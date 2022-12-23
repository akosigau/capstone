import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Distributed extends Component {

  constructor(props) {
    super(props);

    this.state = {
        
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13],
            show: false
          }],
          options: {
            chart: {
              offsetY: 15,
              height: 350,
              width: '10%',
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              },
              toolbar:{
                show:false
              }
            },
            colors: ["#D4DCE8","#D4DCE8","#D4DCE8","#FF844B","#D4DCE8","#D4DCE8","#D4DCE8"],
            plotOptions: {
              bar: {
                columnWidth: '55%',
                distributed: true,
              },
            },
            grid: {
                borderColor: 'transparent',
              },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            }, 
            yaxis: {
                labels: {
                  show: false
                },
              },
            xaxis: {
              categories: [
                ['Mon'],
                ['Tues'],
                ['Wed'],
                ['Thurs'],
                ['Fri'],
                ['Sat'],
                ['Sun'], 
              ],
              labels: {
                style: {
                  colors: ["#000"],
                  fontSize: '12px'
                }
              },
            }
          },
        }
  }

  render() {

    return (
      <div className="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height="200" width="500" />
      </div>
    );
  }
}

export default Distributed;