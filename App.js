import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import Main from './src/pages/Main'
import Input from './src/pages/Input'
import Logo from './src/pages/Logo/Logo'
import Select from './src/pages/Select'

const App = () => {
  const [moeda, setMoeda] = useState('...');
  const [moeda2, setMoeda2] = useState('...');


  function recebe(valor, valor2){
    setMoeda(valor)
    setMoeda2(valor2);  
  } 

  return(
    <React.Fragment>
      <StatusBar backgroundColor="#005B44" />           
      <Logo />      
      <Select recebe={recebe}/>
      <Input moeda1={moeda} moeda2={moeda2}/>
    </React.Fragment>
    
  )
};

export default App;