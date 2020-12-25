import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  // azalt = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }

  // artır = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // yukarıdaki ikisni "degistir" olarak tek fonksiyonda yazdık o yüzden onlara gerek kalmadı.

  degistir = (operation) => {
    this.setState({
      count: operation === "azalt" ? this.state.count - 1 : this.state.count + 1
    })
  }

  render(){
    const {count} = this.state;
    return <div>
        <h1>{count}</h1>
        <button onClick={() => {this.degistir("azalt")}}>
          -
          </button>
        <button onClick={() => {this.degistir("artır")}}>
          +
          </button>
      </div>
  }
}





export default App;
