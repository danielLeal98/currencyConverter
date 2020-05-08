import React, {Component, PropTypes} from 'react';
import { Text, View,Image, TextInput, AsyncStorage } from 'react-native'
import { Dimensions } from "react-native";
import {Container,ViewInput} from "./styles";
import Select from '../Select';
const imageWidth = Dimensions.get("window").width / 2;

export default class Input extends Component {  
  constructor(props){
    super(props);
    this.state = {money: '', moneyConvertido:'Aguardando valor...', moeda1: '', moeda2: '', error: '', arrayMoedas: []};
    this.validate = this.validate.bind(this);       
}

validate = (text) => {
  const valor = text;
  if(valor == ''){
    this.setState({moneyConvertido: 'Aguardando valor...', money: '', error: ''});
  } else {
    this.setState({money: valor});
    const de_para = this.props.moeda1 + "_" + this.props.moeda2;
    const url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=3e43e8dd8556ff5b8ba9`;
    console.log(url);
    console.log(this.props.moeda1 + "_" + this.props.moeda2);
    fetch(url)
      .then(r => r.json()).then(json => {
        if(json.error){
          this.setState({error: json.error,moneyConvertido: json.error });
        } else {
          const cotacao = json[de_para];
          let s = this.state;
          s.moneyConvertido = "R$: " + (cotacao * parseFloat(this.state.money)).toFixed(2).toString();
          //console.log(s.moneyConvertido);
          this.setState(s);   
        }       
       
    }).catch(error => {  
        console.log(error);
        this.setState({error: json.error});
    });
  }
 }

  render(){
    //console.log(this.props);
    return(
      <ViewInput>
        <View style={{flexDirection: 'row', backgroundColor: "black", margin: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10,
         borderBottomLeftRadius: 10, borderBottomRightRadius: 10, top: 15 }}>
          <View style={{flexDirection: 'column', backgroundColor: "#FF6347", width: '20%', borderTopLeftRadius: 10,borderBottomLeftRadius: 10 }}>
          <Text style={{color: 'white', margin: 10, fontWeight: 'bold'}}>{this.props.moeda1}</Text>           
          
          </View>
          <View style={{flexDirection: 'column', backgroundColor: "#cccc", width: '80%', justifyContent: 'space-around', paddingLeft: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
            <TextInput style={{height: 40, fontSize: 14, fontWeight: 'bold', color: 'white'}} placeholder="Entre com o valor" placeholderTextColor="white" underlineColorAndroid="transparent" onChangeText={this.validate}          
             value={this.state.money} keyboardType='numeric'/>
          </View>
        </View>

        <View style={{flexDirection: 'row', backgroundColor: "black", margin: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10,
         borderBottomLeftRadius: 10, borderBottomRightRadius: 10, top: 15 }}>
          <View style={{flexDirection: 'column', backgroundColor: "#FF6347", width: '20%', borderTopLeftRadius: 10,borderBottomLeftRadius: 10 }}>
          <Text style={{color: 'white', margin: 10, fontWeight: 'bold'}}>{this.props.moeda2}</Text>
          </View>
          <View style={{flexDirection: 'column', backgroundColor: "#cccc", justifyContent: 'space-around', paddingLeft: 5, width: '80%',  borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>{this.state.moneyConvertido}</Text>
          </View>
        </View>        
        <View>
        <Text style={{color: 'red', fontSize: 20, justifyContent: 'center', paddingTop:20, textAlign: 'center'}}>{this.state.error}</Text>
        </View>
      </ViewInput>
      
    )
  }
}