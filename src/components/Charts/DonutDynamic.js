import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
        
        series: [10, 20, 30, 40],
        
            options: {
              labels: [
                ['Cardio','10 hrs'],
                ['Stretching','20 hrs'],
                ['Treadmill','30 hrs'],
                ['Strength','40 hrs']
            ],
              chart: {
                type: 'donut',
              },
              colors: ["#1AB0B0","#FF844B","#F85C7F","#8676FE"],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          };
  }

  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="donut" height="200" width="500" />
      </div>
    );
  }
}

export default Donut;