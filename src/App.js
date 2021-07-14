import React from 'react';
import './App.css';
/*Componente escrito en una funcion
function App() {
  return (
    <div>This is my component: <Helloworld/><Helloworld/><Helloworld/></div>
  );
}
*/
/*Componente en una sola linea utilizando flecha 
const App = () => <div>This is my component: <Helloworld/><Helloworld/><Helloworld/></div>
//componente en una clase
*/
class App extends React.Component {
  render(){
    return(
     <div>
      This is my component: 
      <Helloworld mytext="Hello ricardo" subtitle="Lorem ispum"/>
      <Helloworld mytext="HOla mis loca"/>
      <Helloworld mytext="HELLO"/>
    </div>
    )
  }
}

/* function Helloworld(props) {
  //console.log(props);
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}</div>
  )
} */

class Helloworld extends React.Component {
  
  state = {
    show: true
  }

  toggleShow = () => {
    /*if (this.state.show == true) {
      this.setState({show: false})
    } else {
      this.setState({show: true})
    }
    */
    this.setState({show: !this.state.show})
    
  }

  render(){
    if (this.state.show) {
      return(
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}>Toggle show </button>
        </div>
      )
    } else {
      return( 
        <h1>No hay elementos
        <button onClick={this.toggleShow}>Toggle show</button>
        </h1>
        )
    }
    
  }
}

export default App;
