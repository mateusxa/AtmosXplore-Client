import './Fly_card.css';
import React, { Component } from 'react'
import Fly_chart from '../Fly_chart/Fly_chart'

class Fly_card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ShowChart: false,
      ChartCard: null
    }
  }

  handleClick = () => {
    var { ShowChart, ChartCard } = this.state;

    if(!ShowChart){
        this.setState({
          ChartCard : <Fly_chart flyID={this.props.flyNumber} />,
          ShowChart : true
        })
    } else {
      this.setState({
        ChartCard : null,
        ShowChart: false
      })
    }
  }

  render (){
      return (
        
        <div className="Fly_card">
                <div className="row">
                <div className="card">
                  <div className="card-body">
                    <h3>
                      Voo: {this.props.flyNumber}
                    </h3>
                    <button className="btn btn-primary" onClick={this.handleClick}>
                      Ver detalhes
                    </button>
                  </div>
                </div>
                {this.state.ChartCard}
              </div>
          </div>
      )
    }
}

export default Fly_card;