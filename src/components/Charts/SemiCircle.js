import React, { Component } from 'react';
import Chart from 'react-apexcharts';


class SemiCircle extends Component {

  constructor(props) {
    super(props);

    this.state = {
        series: [76],
        options: {
          chart: {
            type: 'radialBar',
            offsetY: -5,
            offsetX: -5,
            sparkline: {
              enabled: true,
            }
          },
          colors: ["#fff"],
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#fff",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2,
                }
              },
              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `${val}`
                  },
                  style: {
                    color: ['#ff2']
                  }
                }
              },
              dataLabels: {
                formatter: (val) => {
                  return `${val}`
                },
                name: {
                  show: false,
                }, 
                style: {
                  color: '#fff',
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px',
                },
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 0,
              stops: [0, 50, 53, 91],
            },
          },
          labels: ['Average Results'],
        },

        }
  }

  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="radialBar" width="230" />
      </div>
    );
  }
}

export default SemiCircle;