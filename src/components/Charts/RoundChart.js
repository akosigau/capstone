import React from 'react';
import Chart from 'react-apexcharts';

function RoundChart() {

    return(
      <React.Fragment>
        <Chart
          height={90}
          type= 'radialBar'
          series= {[70]}
        
          options={{
          labels: ['Progress'],
          colors: ["#FF7443"],
          
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 15,
                size: "40%"
              },
             
              dataLabels: {
                showOn: "always",
                name: {
                 
                  show: false,
                  color: "#888",
                  fontSize: "7px"
                },
                value: {
                  offsetY: 5,
                  color: "#111",
                  fontSize: "10px",
                  show: true
                }
              }
            }
          }
          }}
       />    
      </React.Fragment>
    );

}

export default RoundChart;