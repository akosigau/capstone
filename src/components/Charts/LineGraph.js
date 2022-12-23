import React, { Component } from 'react';
import Chart from 'react-apexcharts';


class LineGraph extends Component {

  constructor(props) {
    super(props);

    this.state = {
        options: {
                    chart: {
                        id: "bar",
                        stacked: true,
                        sparkline: {
                        enabled: true,
                    },

                   
                    },

                    plotOptions: {
                        bar: {
                            horizontal: true,
                            barHeight: '10%',
                            colors: {
                            backgroundBarColors: ['#40475D'],
                            }
                        },
                        
                    },
                    colors: ['#fff'],                   
                 },

          series: [{
            name: 'Process 1',
            data: [50]
          }],  
          


          tooltip: {
            enabled: false
          },

        }
  }

  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="bar"  />
      </div>
    );
  }
}

export default LineGraph;