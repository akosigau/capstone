import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class StrokedGauge extends Component {

  constructor(props) {
    super(props);

    this.state = {
    
      series: [67],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          offsetY: -15,
        },
        colors: ["#FF7443"],
        plotOptions: {
          radialBar: {
            startAngle: -120,
            endAngle: 120,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 60
              },
              value: {
                offsetY:-5,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['of your Goal this month'],
      },
    
    
    };
  }

  render() {

    return (
      <div className="chart">
        <Chart options={this.state.options} series={this.state.series} type="radialBar" width="230" />
      </div>
    );
  }
}

export default StrokedGauge;