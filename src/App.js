import './App.css';
import React, { Component } from 'react'
import Fly_card from './components/Fly_card/Fly_card'
import Fly_chart from './components/Fly_chart/Fly_chart'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideChart: false,
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://atmosxplore-server.herokuapp.com/flys/number')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }


  render (){
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return (
        <div className="d-flex">
          <div className="spinner-border" style={{ 'width': '5rem', 'height': '5rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    } else {
      return (
      <div className="App">
        <div className="container">
              <h1>Catalogo de voos</h1>
              {items.map(item => (
                <Fly_card flyNumber={item._id} />
              ))}
        </div>
        </div>
    )
   }
  }
}


export default App;
