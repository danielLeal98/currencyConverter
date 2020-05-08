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
  top: 18px;
`;
export const TextTitle = styled.Text`
  color: #FFF;
  margin:15px;
  font-size: 25px;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  color: #FFF;
  font-size: 14px;
`;
export const ViewSubTitle = styled.View`
  align-Items: center;
  flex-direction: row;
  background-color: #005B44;
  margin-top: -5px;
  margin-bottom: 5px;
`;
