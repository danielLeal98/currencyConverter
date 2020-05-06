import React from "react";

import { View, Image, Text } from "react-native";

import {Container,LogoImage, LogoImage2, TextTitle} from "./styles";

export default function Logo(){
  return (
  <Container>
      <LogoImage
        resizeMode="contain"
        source={require("./images/logo3.png")}  
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <LogoImage2
        resizeMode="contain"
        source={require("./images/logo5.png")}  
      />
      <TextTitle>Conversor de Moedas</TextTitle>
      </View>
  </Container>
  )
}
