import React, {Component} from 'react';
import { Text, View,Image } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Dimensions } from "react-native";
import {Container,ImageSeta,ViewSelect} from "./styles";

const imageWidth = Dimensions.get("window").width / 2;


export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      items: [
        {value: 'BRL', label: 'REAL'},
        {value: 'USD', label: 'DÓLAR AMERICANO'},        
      ],
    };
  }
    render() {      
      return (
        <ViewSelect>
        <RNPickerSelect
            placeholder={{
              label: 'DÓLAR',              
              value: null,
              color: '#FF6347',
              fontSize: 18,
              fontWeight: '600',}}
            
            items={this.state.items}
            style={{
              inputAndroid: {
                backgroundColor: '#FF6347',
                fontSize: 18,
                color: '#FF6347',                    
                width: imageWidth - 50,
                height: 50,                  
                lineHeight: 20,
                textAlign: 'center',
                fontWeight: '600',  
                margin:10,
                borderRadius: 10                                  
              },
            }}
          value={this.state.favSport3}
          useNativeAndroidPickerStyle={false}
        />  
        <ImageSeta source={require("./images/seta.png")}  
      />
        <RNPickerSelect
            placeholder={{
              label: 'REAL',
              value: 'REAL',
              color: '#FF6347',
              fontSize: 18,
              fontWeight: '600',}}                 
            items={this.state.items}
            style={{
              inputAndroid: {
                backgroundColor: '#cccc',
                fontSize: 18,
                color: 'white',                    
                width: imageWidth - 50,
                height: 50,                  
                lineHeight: 20,
                textAlign: 'center',
                fontWeight: '600',  
                margin:10,
                borderRadius: 10
                
              },             
            }}
          value={this.state.favSport3}
          useNativeAndroidPickerStyle={false}
        />  
    </ViewSelect>     
      );
    }
  }
