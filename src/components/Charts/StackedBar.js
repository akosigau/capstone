import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class StackedBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        
        series: [{
            name: 'Carbs',
            data: [20],
          }, {
            name: 'Protein',
            data: [70],
          }, {
            name: 'Fat',
            data: [30],
          }],
         
          options: {
            chart: {
              type: 'bar',
              height: 150,
              stacked: true,
              stackType: '100%',
              toolbar: {
                show: false
                },
                sparkline: {
                    enabled: true,
                 
                  }
            },
            colors: ["#1AB0B0","#FF844B","#F85C7F"],
            plotOptions: {
              bar: {
                borderRadius: 5,
                barHeight: '10%',
                distributed: false,
                horizontal: true,
                
              }
            },
            
            stroke: {
              width: 1,
              colors: ['#fff'],
            },
            title: {
              text: 'Avocado Salad',
            },
            xaxis: {
              show: true,
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + "%"
                }
              }
            },
            fill: {
              opacity: 1
            
            },
            legend: {
              show: true,
              horizontalAlign: 'left',
            },

            grid: {
                show: false,
            },
          },
        }; 
  }

  render() {

    return (
      <div className="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height="100"/>
      </div>
    );
  }
}

export default StackedBar;