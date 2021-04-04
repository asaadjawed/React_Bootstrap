import React from 'react';
import {Logo,Header,SearchButton,Caraousel} from './Component/header';
import Footer from './Component/footer';
import {Center,Heading} from './Component/center';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Caraousel />
        <Center />
        <Footer />
      </div>
       
    
    )
  }
}



export default App;
