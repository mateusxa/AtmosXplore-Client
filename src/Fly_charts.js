import './Fly_charts.css';
import React, { Component } from 'react'

class Fly_charts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/teste/number')
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
        <div class="d-flex">
          <div class="spinner-border" style={{ 'width': '5rem', 'height': '5rem' }} role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Fly_charts">

        <div className="container">
          <h1>Catalogo de voos</h1>
          <div className="row">
            
              {items.map(item => (
                <div className="col">
                <div class="card">
                  <div class="card-body">
                    <h3>
                      Voo: {item.Fly}
                    </h3>
                    <a href="#" class="btn btn-primary">Ver detalhes</a>
                  </div>
                </div>
                </div>
              ))}
              


          </div>
        </div>

      </div>
      )
    }
  }
}

export default Fly_charts;
