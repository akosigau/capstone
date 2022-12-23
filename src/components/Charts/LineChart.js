import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class LineChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 20, 5]
        }],
        
        options: {

            chart: {
                id: 'spark1',
                group: 'sparks',
                type: 'line',
                height: 80,
                sparkline: {
                  enabled: true
                },
                dropShadow: {
                  enabled: true,
                  top: 1,
                  left: 1,
                  blur: 2,
                  opacity: 0.2,
                }
              },
              stroke: {
                curve: 'straight'
              },
              markers: {
                size: 0
              },
              grid: {
                padding: {
                  top: 30,
                  bottom: 10,
                  left: 0,
                  right: 30
                }
              },
              colors: ['#fff'],
              tooltip: {
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function formatter(val) {
                      return '';
                    }
                  }
                }
              }
           
         }, 
      };
    }
  render() {

    return (
      <div className="chart">
        <Chart options={this.state.options} series={this.state.series} type="line" width="250" />
      </div>
    );
  }
}

export default LineChart;