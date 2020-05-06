import React from 'react';
import { StatusBar } from 'react-native';
import Main from './src/pages/Main'
import Input from './src/pages/Input'
import Logo from './src/pages/Logo/Logo'

import Select from './src/pages/Select'


const App = () => {

  return(
    <React.Fragment>
      <StatusBar backgroundColor="#005B44" />           
      <Logo />      
      <Select/>
      <Input/>
    </React.Fragment>
    
  )
};

export default App;