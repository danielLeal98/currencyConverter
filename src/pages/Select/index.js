import React, {Component} from 'react';
import { Text, View,Image,AsyncStorage } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {Container,ImageSeta,ViewSelect} from "./styles";
import ArrayMoedas from '../Select/Moedas.json';

const imageWidth = Dimensions.get("window").width / 2;

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      moeda1: '...',
      moeda2: '...',
      symbol1: '$',
      symbol2: '$'
    }; 
    this.calculaMoeda1 = this.calculaMoeda1.bind(this);
    this.calculaMoeda2 = this.calculaMoeda2.bind(this);
  }

  componentDidUpdate(){
    this.props.recebe(this.state.moeda1, this.state.moeda2);
  }
  async calculaMoeda1(moeda){
    try { 
      this.setState({moeda1: moeda});     
    } catch (e) {
      console.log(e);
    }
  }


  async calculaMoeda2(moeda){
    try {    
      this.setState({moeda2: moeda});  
    } catch (e) {
      console.log(e);
    } 
  }

    render() {      
      return (
        <ViewSelect>
        <RNPickerSelect
            placeholder={{
              label: 'Moeda',
              value: null,              
              color: 'black',
              fontSize: 12   ,
              fontWeight: 'bold',}}
              onValueChange={value => this.calculaMoeda1(value)}                 
            items={ArrayMoedas}
            style={{
              inputAndroid: {
                backgroundColor: '#A3A3A3',
                color: 'white',
                fontSize: 12,              
                width: imageWidth - 40,
                height: 50,                                  
                textAlign: 'center',
                fontWeight: 'bold',  
                margin:10,
                borderRadius: 10                
              },                           
              iconContainer: {
                top: 27,
                right: 15,
              },
            }}          
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return <AntDesign name="down" size={16} color="white" />;
          }}
        />    
        <ImageSeta source={require("./images/seta2.png")}  
      />
        <RNPickerSelect
            placeholder={{
              label: 'Moeda',
              value: null,              
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',}}
              onValueChange={value => this.calculaMoeda2(value)}                 
            items={ArrayMoedas}
            style={{
              inputAndroid: {
                backgroundColor: '#A3A3A3',
                color: 'white',
                fontSize: 12,              
                width: imageWidth - 40,
                height: 50,                                  
                textAlign: 'center',
                fontWeight: 'bold',  
                margin:10,
                borderRadius: 10                
              },              
              iconContainer: {
                top: 27,
                right: 15,
              },
            }}          
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return <AntDesign name="down" size={16} color="white" />;
          }}
        />    
    </ViewSelect>     
      );
    }
  }
