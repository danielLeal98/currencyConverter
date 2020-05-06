import React, {Component} from 'react';
import { Text, View,Image, TextInput } from 'react-native'
import { Dimensions } from "react-native";
import {Container,ViewInput} from "./styles";

const imageWidth = Dimensions.get("window").width / 2;


export default class Input extends Component {  
  constructor(props){
    super(props);
    this.state = {money: '', moneyConvertido:'Aguardando valor...', moeda1: 'USD', moeda2: 'BRL', error: ''};
    this.validate = this.validate.bind(this);       
}


validate = (text) => {
  const valor = text;
  if(valor == ''){
    this.setState({moneyConvertido: 'Aguardando valor...', money: '', error: ''});
  } else {
    this.setState({money: valor});
    const de_para = this.state.moeda1 + "_" + this.state.moeda2;
    const url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=3e43e8dd8556ff5b8ba9`;
    
    fetch(url)
      .then(r => r.json()).then(json => {
        if(json.error){
          this.setState({error: json.error,moneyConvertido: json.error });
        } else {
          const cotacao = json[de_para];
          let s = this.state;
          s.moneyConvertido = "R$: " + (cotacao * parseFloat(this.state.money)).toFixed(2).toString();
          console.log(s.moneyConvertido);
          this.setState(s);
          
        }       
       
    }).catch(error => {  
        console.log(error);
        this.setState({error: json.error});
    });
  }
 }


  render(){
    const text = '0';
    return(
      <ViewInput>
        <View style={{flexDirection: 'row', backgroundColor: "black", margin: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10,
         borderBottomLeftRadius: 10, borderBottomRightRadius: 10, top: 15 }}>
          <View style={{flexDirection: 'column', backgroundColor: "#FF6347", width: '20%', borderTopLeftRadius: 10,borderBottomLeftRadius: 10 }}>
          <Text style={{color: 'white', margin: 10, fontWeight: 'bold'}}>DÓLAR</Text>
          </View>
          <View style={{flexDirection: 'column', backgroundColor: "#cccc", width: '80%', paddingLeft: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
            <TextInput style={{height: 40, fontSize: 18, fontWeight: 'bold'}} placeholder="Entre com o valor" placeholderTextColor="white" underlineColorAndroid="transparent" onChangeText={this.validate}          
             value={this.state.money} keyboardType='numeric'/>
          </View>
        </View>

        <View style={{flexDirection: 'row', backgroundColor: "black", margin: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10,
         borderBottomLeftRadius: 10, borderBottomRightRadius: 10, top: 15 }}>
          <View style={{flexDirection: 'column', backgroundColor: "#FF6347", width: '20%', borderTopLeftRadius: 10,borderBottomLeftRadius: 10 }}>
          <Text style={{color: 'white', margin: 10, fontWeight: 'bold'}}>REAL</Text>
          </View>
          <View style={{flexDirection: 'column', backgroundColor: "#cccc", width: '80%', paddingLeft: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
            <Text style={{color: 'white', fontSize: 18, padding: 5, fontWeight: 'bold'}}>{this.state.moneyConvertido}</Text>
          </View>
        </View>        
        <View>
        <Text style={{color: 'red', fontSize: 20, justifyContent: 'center', paddingTop:20, textAlign: 'center'}}>{this.state.error}</Text>
        </View>
      </ViewInput>
      
    )
  }
}