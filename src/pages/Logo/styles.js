import styled from 'styled-components';
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2.5;

export const Container = styled.View`
  align-Items: center;
  background-color: #005B44;
  flex: 2;  
`;
export const LogoImage = styled.Image`
  width: ${imageWidth}px;
  flex: 1;
`;
export const LogoImage2 = styled.Image`
  width: 30px;
  height: 30px;
  left: 10px;
`;

export const TextTitle = styled.Text`
  color: #FFF;
  margin:20px;
  font-size: 25px;
  letter-Spacing: 1;
  font-weight: bold;
`;