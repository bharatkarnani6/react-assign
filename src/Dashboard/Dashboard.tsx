import React from 'react';
import '../App.css'
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May','June','July','August','Septmber','October','November','December'],
  datasets: [
    {
      label: 'Isuues',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(30, 139, 195, 1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56,32,87,34,76,54,84,24]
    },
    {
        label: 'Today Issue',
        fill: false,
        lineTension: 1,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [50, 49, 40, 41, 65,32,46,23,78,45,76,26]
      }
  ]
}

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="col-12">
        <Bar
          data={state}
          width={10}
          height={3}
          options={{
            title:{
              display:true,
              text:'Issues in 2020',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
