import React from 'react';
import './IssueList.css';
const IssueList = () => {
    return (
        <div className="issue">
            <div className="row">
                <div className="col-md-4">
                <div className="shadow-sm p-3 mb-5 bg-white rounded"><h2>To-Do 5</h2></div>
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="shadow-sm p-3 mb-5 bg-white rounded"><h2>In Progress 2</h2></div>
                </div>
                <div className="col-md-4">
                <div className="shadow-sm p-3 mb-5 bg-white rounded"><h2>Done</h2></div>
                </div>
            </div>
        </div>
    )
}
export default IssueList;