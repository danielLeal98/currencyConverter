import React from "react";

import { View, Image, Text } from "react-native";

import {Container,LogoImage, LogoImage2, TextTitle,SubTitle,ViewSubTitle} from "./styles";

export default function Logo(){
  return (
  <Container>
      <LogoImage
        resizeMode="contain"
        source={require("./images/logo3.png")}  
      />
      <View style={{flexDirection: 'row', alignContent: 'center'}}>
      <LogoImage2
        resizeMode="contain"
        source={require("./images/logo5.png")}  
      />
      <TextTitle>Conversor de Moedas</TextTitle>      
      </View>
      <ViewSubTitle>
        <SubTitle>Selecione as moedas</SubTitle>
      </ViewSubTitle>
  </Container>
  )
}
