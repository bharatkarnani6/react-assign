import React from 'react';
import './Dashboard.css';
import axios from 'axios';
import AccountIcon from '../Assets/img/Sanal.svg'
import { Bar } from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'Septmber', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Isuues',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(30, 139, 195, 1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 32, 87, 34, 76, 54, 84, 24]
    },
    {
      label: 'Today Issue',
      fill: false,
      lineTension: 1,
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [50, 49, 40, 41, 65, 32, 46, 23, 78, 45, 76, 26]
    }
  ]
}


export default class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      info: [],
      high: 0,
      totalIssue: 0,
      low: 0,
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/issues/')
      .then(res => {
        let l = 0;
        let h=0;
        let lengthhigh, lengthlow;
        res.data.map(d => {
          if (d.priority === "HIGH") {
            h++
          }
          if (d.priority === "LOW") {
            l++
          }
        })
        lengthhigh = h;
        lengthlow = l;
        this.setState({ info: res.data })
        this.setState({ high: lengthhigh })
        this.setState({ low: lengthlow })
        this.setState({ totalIssue: res.data.length })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <div className="col-12">
          <Bar
            data={state}
            width={10}
            height={3}
            options={{
              title: {
                display: true,
                text: 'Issues in 2020',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div><br></br>
        <div className="row infos">
          <div className="col-md-4">
            <div className="card" style={{ width: "25rem" }}>
              <div className="card-header text-center">
                High Priority</div>
              <ul className="list-group list-group-flush">
                {
                  info.slice(0, 20).map((d, i) =>
                    d.priority === "HIGH" ?
                      <div key={d.id} className="list-group-item card-body">
                        <div className="row">
                          <div className="col-7">
                            <h6 className="card-title font-weight-bold">{d.title}</h6>
                          </div>
                          <div className="col-5">
                            <small className="card-date">{new Date(d.created_at).toDateString()}</small>
                          </div>
                        </div>
                        <p className="card-text">{d.description}</p>
                      </div> : null
                  )
                }
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "25rem" }}>
              <div className="card-header text-center">
                Recently Updated Issue</div>
              <ul className="list-group list-group-flush">
                <div className="list-group-item card-body">
                  <div className="row">
                    <div className="col-7">
                      <h6 className="card-title font-weight-bold">Lorem ipsum dolor sit</h6>
                    </div>
                    <div className="col-5">
                      <small className="card-date">January 02,2019</small>
                    </div>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="list-group-item card-body">
                  <div className="row">
                    <div className="col-7">
                      <h6 className="card-title font-weight-bold">Lorem ipsum dolor sit</h6>
                    </div>
                    <div className="col-5">
                      <small className="card-date">January 02,2019</small>
                    </div>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="list-group-item card-body">
                  <div className="row">
                    <div className="col-7">
                      <h6 className="card-title font-weight-bold">Lorem ipsum dolor sit</h6>
                    </div>
                    <div className="col-5">
                      <small className="card-date">January 02,2019</small>
                    </div>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "25rem" }}>
              <div className="card-header text-center">
                All Issues</div>
              <ul className="list-group list-group-flush">
                <div className="list-group-item card-body">
                  <div className="row">
                    <div className="icon">
                      <img src={AccountIcon} />
                    </div>
                    <div className="info">
                      <small className="">Bharat</small><br></br>
                      <small className="">UI/UXDesigner</small>
                    </div>
                  </div>
                  <div className="progress">
                   <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${this.state.high}%`}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                  <div className="row data">
                    <div className="col">
                      <p>High Priority Issue: {this.state.high}</p>
                    </div>
                    <div className="col">
                      <p className="text-right">Total Issue: {this.state.totalIssue}</p>
                    </div>
                  </div>
                </div>
                <div className="list-group-item card-body">
                  <div className="row">
                    <div className="icon">
                      <img src={AccountIcon} />
                    </div>
                    <div className="info">
                      <small className="">Bharat</small><br></br>
                      <small className="">UI/UXDesigner</small>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width:`${this.state.low}%` }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                  <div className="row data">
                    <div className="col">
                      <p>Low Priority Issue: {this.state.low}</p>
                    </div>
                    <div className="col">
                      <p className="text-right">Total Issue: {this.state.totalIssue}</p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


