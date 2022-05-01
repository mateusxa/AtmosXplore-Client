import './Fly_chart.css';
import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

class Fly_chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
        flyNumber: this.props.flyID,
        isLoaded: false,
        Temperature_Chart: {
          labels: [],
          datasets: [
            {
              label: "Temperature",
              backgroundColor: "#CC444B",
              borderColor: "#CC444B",
              borderWidth: 2,
              data: [],
            }
          ]
        },
        Humidity_Chart: {
          labels: [],
          datasets: [
            {
              label: "Umidade",
              backgroundColor: "#5BC0EB",
              borderColor: "#5BC0EB",
              borderWidth: 2,
              data: [],
            }
            ]
          },
        Pressure_Chart: {
          labels: [],
          datasets: [
            {
              label: "Pressão",
              backgroundColor: "#94B0DA",
              borderColor: "#94B0DA",
              borderWidth: 2,
              data: [],
            }
            ]
          },
        Height_Chart: {
          labels: [],
          datasets: [
            {
              label: "Altitude",
              backgroundColor: "#9BC53D",
              borderColor: "#9BC53D",
              borderWidth: 2,
              data: [],
            }
            ]
          },
          Luminosity_Chart: {
            labels: [],
            datasets: [
              {
                label: "Luminosidade",
                backgroundColor: "#D0E562",
                borderColor: "#D0E562",
                borderWidth: 2,
                data: [],
              }
              ]
            } 

        }
    }

  componentDidMount() {
    fetch('https://atmosxplore-server.herokuapp.com/flys/' + this.state.flyNumber)
      .then(res => res.json())
      .then(data => {
        var Temperature_Chart = this.state.Temperature_Chart
        Temperature_Chart.labels = data.map(data => data.Duration)
        Temperature_Chart.datasets[0].data = data.map(data => data.Temperature)

        var Humidity_Chart = this.state.Humidity_Chart
        Humidity_Chart.labels = data.map(data => data.Duration)
        Humidity_Chart.datasets[0].data = data.map(data => data.Humidity)

        var Pressure_Chart = this.state.Pressure_Chart
        Pressure_Chart.labels = data.map(data => data.Duration)
        Pressure_Chart.datasets[0].data = data.map(data => data.Pressure)

        var Height_Chart = this.state.Height_Chart
        Height_Chart.labels = data.map(data => data.Duration)
        Height_Chart.datasets[0].data = data.map(data => data.Height)

        var Luminosity_Chart = this.state.Luminosity_Chart
        Luminosity_Chart.labels = data.map(data => data.Duration)
        Luminosity_Chart.datasets[0].data = data.map(data => data.Luminosity)

        this.setState({
          isLoaded: true,
          Temperature_Chart,
          Humidity_Chart,
          Pressure_Chart,
          Height_Chart,
          Luminosity_Chart,
        })
      })
  }

  render (){
    var { isLoaded, Temperature_Chart, Humidity_Chart, Pressure_Chart, Height_Chart, Luminosity_Chart } = this.state;
    
    if(!isLoaded) {
      return (
        <div className="d-flex chart">
          <div className="spinner-border" style={{ 'width': '5rem', 'height': '5rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    } else {
      
      return (
        <div className="Fly_chart">
          <div className="chart-area">
          <Line data={Temperature_Chart} />
          <Line data={Humidity_Chart} />
          <Line data={Pressure_Chart} />
          <Line data={Height_Chart} />
          <Line data={Luminosity_Chart} />
        </div>
        </div>
      )
    }
  }
}

export default Fly_chart;


/*
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      }
*/