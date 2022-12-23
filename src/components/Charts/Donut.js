import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
        
        series: [70],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
            offsetY: -15,
          },
          colors: ["#fff"],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '60%',
              },
            },
          },
          labels: ['Water'],
        },
        
    }
  }

  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="radialBar" width="210" />
      </div>
    );
  }
}

export default Donut;