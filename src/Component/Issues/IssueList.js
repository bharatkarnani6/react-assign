import React, { Component } from 'react';
import axios from 'axios';
import './IssueList.css';
import AccountIcon from '../../Assets/img/Sanal.svg'

class IssueList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/issues/')
            .then(res => {
                this.setState({ datas: res.data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        const { datas } = this.state;
        return (
            <div className="issue">
                <div className="row">
                    <div className="col-md-4">
                        <div className="shadow-sm p-3 mb-5 bg-white rounded"><h2>To-Do</h2></div>
                        {
                            datas.slice(0,3).map(d =>{
                                return d.status==="TODO" ?
                                <div key={d.id} className="card" style={{ width: "25rem" }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <h6 className="card-id col-6">{d.short_id}</h6>
                                            <p className="card-date col-6 text-right">{new Date(d.created_at).toDateString()}</p>
                                        </div>
                                        <h5 className="card-title">{d.title}</h5>
                                        <p className="card-text">{d.description}</p>
                                        <div className="row">
                                    <div className="col-6">
                                        <p>Assignee</p>
                                        <div className="row">
                                            <div className="icon">
                                                <img src={AccountIcon} />
                                            </div>
                                            <div className="info">
                                                <small className="">Bharat</small><br></br>
                                                <small className="">UI/UXDesigner</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <p>Priority</p>
                                        {
                                            d.priority=="LOW"?<button type="button" style={{ width: "80%" }} className="btn btn-warning btn-sm">{d.priority}</button>
                                            :d.priority=="SHOWSTOPPER"?<button type="button" style={{ width: "80%" }} className="btn btn-primary btn-sm">{d.priority}</button>
                                            :d.priority=="HIGH"?<button type="button" style={{ width: "80%" }} className="btn btn-danger btn-sm">{d.priority}</button>
                                            :d.priority=="VERY LOW"?<button type="button" style={{ width: "80%" }} className="btn btn-warning btn-sm">{d.priority}</button>
                                            :null
                                        }
                                    
                                    </div>
                                </div>
                                    </div>
                                </div>:null
                            })
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="shadow-sm p-3 mb-5 bg-white rounded">
                            <h2>In Progress 2</h2>
                        </div>
                        {
                            datas.map((d,i) =>{
                                return d.status==="DOING" && i<105 ?
                                <div key={d.id} className="card" style={{ width: "25rem" }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <h6 className="card-id col-6">{d.short_id}</h6>
                                            <p className="card-date col-6 text-right">{new Date(d.created_at).toDateString()}</p>
                                        </div>
                                        <h5 className="card-title">{d.title}</h5>
                                        <p className="card-text">{d.description}</p>
                                        <div className="row">
                                    <div className="col-6">
                                        <p>Assignee</p>
                                        <div className="row">
                                            <div className="icon">
                                                <img src={AccountIcon} />
                                            </div>
                                            <div className="info">
                                                <small className="">Bharat</small><br></br>
                                                <small className="">UI/UXDesigner</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <p>Priority</p>
                                        {
                                            d.priority=="LOW"?<button type="button" style={{ width: "80%" }} className="btn btn-warning btn-sm">{d.priority}</button>
                                            :d.priority=="SHOWSTOPPER"?<button type="button" style={{ width: "80%" }} className="btn btn-primary btn-sm">{d.priority}</button>
                                            :d.priority=="HIGH"?<button type="button" style={{ width: "80%" }} className="btn btn-danger btn-sm">{d.priority}</button>
                                            :d.priority=="VERY LOW"?<button type="button" style={{ width: "80%" }} className="btn btn-warning btn-sm">{d.priority}</button>
                                            :null
                                        }
                                    
                                    </div>
                                </div>
                                    </div>
                                </div>:null
                            })
                        }
                        
                    </div>
                    <div className="col-md-4">
                        <div className="shadow-sm p-3 mb-5 bg-white rounded"><h2>Done</h2></div>
                        {
                            datas.map((d,i) =>{
                                return d.status==="DONE" && i<208 ?
                                <div key={d.id} className="card" style={{ width: "25rem" }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <h6 className="card-id col-6">{d.short_id}</h6>
                                            <p className="card-date col-6 text-right">{new Date(d.created_at).toDateString()}</p>
                                        </div>
                                        <h5 className="card-title">{d.title}</h5>
                                        <p className="card-text">{d.description}</p>
                                        <div className="row">
                                    <div className="col-6">
                                        <p>Assignee</p>
                                        <div className="row">
                                            <div className="icon">
                                                <img src={AccountIcon} />
                                            </div>
                                            <div className="info">
                                                <small className="">Bharat</small><br></br>
                                                <small className="">UI/UXDesigner</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <p>Priority</p>
                                        {
                                            d.priority=="LOW"?<button type="button" style={{ width: "80%" }} className="btn btn-warning btn-sm">{d.priority}</button>
                                            :d.priority=="SHOWSTOPPER"?<button type="button" style={{ width: "80%" }} className="btn btn-primary btn-sm">{d.priority}</button>
                                            :d.priority=="HIGH"?<button type="button" style={{ width: "80%" }} className="btn btn-danger btn-sm">{d.priority}</button>
                                            :d.priority=="VERY LOW"?<button type="button" style={{ width: "80%" }} className="btn btn-warning btn-sm">{d.priority}</button>
                                            :null
                                        }
                                    
                                    </div>
                                </div>
                                    </div>
                                </div>:null
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}
export default IssueList;