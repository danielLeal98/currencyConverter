import styled from 'styled-components';
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

export const ImageSeta = styled.Image`
  width: 35px;
  height: 20px;
  top: 25px;
`;
export const TextTitle = styled.Text`
  margin-top: 15px;
  color: #FF6347;
  font-size: 15px;
  letter-Spacing: 0;
  font-weight: 600;
`;
export const ViewSelect = styled.View`
  flex-Direction: row;
  background-Color: #005B44;
  justify-Content: center;
  
`;