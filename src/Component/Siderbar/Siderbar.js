/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,useState } from 'react'
import axios from 'axios';
import Logo from '../../Assets/img/reactlogo.png'
import TextField from '@material-ui/core/TextField';

import Autocomplete from '@material-ui/lab/Autocomplete'
import Account from '../../Assets/img/my_account.svg';
import './Sidebar.css'
import Dashboard from '../Dashboard/Dashboard';
import IssueList from '../Issues/IssueList.js';
import CreateIssue from '../Issues/CreateIssue';
import Error from '../../Error'
import { Link, Route, Switch } from 'react-router-dom'

const gettingData=[];
    axios.get("http://localhost:8000/api/v1/issues/")
    .then(res=>{
        res.data.map(d=>{
            gettingData.push({title:d.title})
        })
    })

export default function FreeSoloCreateOptionDialog() {
    
    
    const [value, setValue] = useState(null);
    const [open, toggleOpen] =useState(false);

    return (
        <div className="d-flex" id="wrapper">
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading"><img src={Logo} to="/" /></div>
                <div className="list-group list-group-flush">
                    <div className="list-group-item list-group-item-action bg-light"><i className="fa fa-tachometer" aria-hidden="true"></i> &nbsp;<Link to='/'>Dashboard</Link></div>
                    <div className="list-group-item list-group-item-action bg-light"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp; <Link to='/issuelist'>Issue List</Link></div>
                    <div className="list-group-item list-group-item-action bg-light"><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;<Link to='/createissue'>Create Issue</Link></div>
                </div>
            </div>
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="form-inline my-7 my-lg-0">
                            <React.Fragment>
                                <Autocomplete
                                    value={value}
                                    id="Search"
                                    options={gettingData}
                                    getOptionLabel={(option) => {
                                        // e.g value selected with enter, right from the input
                                        if (typeof option === 'string') {
                                            return option;
                                        }
                                        if (option.inputValue) {
                                            return option.inputValue;
                                        }
                                        return option.title;
                                    }}
                                    selectOnFocus
                                    clearOnBlur
                                    handleHomeEndKeys
                                    renderOption={(option) => option.title}
                                    style={{ width: 300 }}
                                    freeSolo
                                    renderInput={(params) => (
                                        <TextField {...params} label="Search" variant="outlined" />
                                    )}
                                />
                            </React.Fragment>
                        </div>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active hide">
                                <div className="nav-link" ><i className="fa fa-tachometer" aria-hidden="true"></i> &nbsp;<Link to='/'>Dashboard</Link> <span className="sr-only">(current)</span></div>
                            </li>
                            <li className="nav-item hide">
                                <div className="nav-link"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;<Link to='/issuelist'>Issue List</Link></div>
                            </li>
                            <li className="nav-item hide">
                                <div className="nav-link"><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;<Link to='/createissue'>Create Issue</Link></div>
                            </li>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={Account} /></a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/issuelist' component={IssueList} />
                    <Route path='/createissue' component={CreateIssue} />
                    <Route component={Error} />
                </Switch>
            </div>
        </div>
    )
}


