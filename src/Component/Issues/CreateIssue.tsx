import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../Issues/CreateIssue.css'
type Inputs = {
    project: string,
    status: string,
    priority: string,
    title: string,
    desc: string,
    assignee: string,
    file: any,
    date: any,
};

const CreateIssue = () => {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const [formDatas, setFormDatas] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
          const res= await axios('http://localhost:8000/api/v1/issues/')
          setFormDatas(res.data)
        }
    
        fetchMyAPI()
      }, [])


    const onsubmit = (values: any) => {
        console.log(values);

    }
    return (        
        
        <div className="create">
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputProject">Project</label>
                        <select id="inputProject" name="project" ref={register({ required: true })} className="form-control">
                            <option value="">Select Project...</option>
                            <option value='Project 1'>Project 1</option>
                            <option value='Project 2'>Project 2</option>
                            <option value='Project 3'>Project 3</option>
                        </select>
                        {errors.project && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputIssue">Status</label>
                        <select id="inputIssue" name="status" ref={register({ required: true })} className="form-control">
                        <option value="">Select Status</option>
                            <option value='TODO'>TODO</option>
                            <option value='DOING'>DOING</option>
                            <option value='DONE'>DONE</option>
                        </select>
                        {errors.status && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPriority">Priority</label>
                        <select id="inputPriority" name="priority" ref={register({ required: true })} className="form-control">
                            <option value="">Choose Priority...</option>
                            <option value='SHOWSTOPPER'>SHOWSTOPPER</option>
                            <option value='HIGH'>HIGH</option>
                            <option value='LOW'>LOW</option>
                            <option value='VERYLOW'>VERY LOW</option>
                        </select>
                        {errors.priority && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputTitle">Title</label>
                        <input type="text" name="title" ref={register({ required: true })} className="form-control" id="inputTitle" />
                        {errors.title && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputDescription">Description</label>
                        <input type="text" name="desc" ref={register({ required: true })} className="form-control" id="inputDescription" />
                        {errors.desc && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputAssignee">Assignee</label>
                        <select id="inputAssignee" name="assignee" ref={register({ required: true })} className="form-control">
                            <option value="">Choose Assignee...</option>
                            <option value='Assign 1'>Assign 1</option>
                            <option value='Assign 2'>Assign 2</option>
                            <option value='Assign 3'>Assign 3</option>
                        </select>
                        {errors.assignee && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="exampleInputFile">Image Upload</label>
                        <input type="file" name="file" ref={register({ required: true })} className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                        {errors.file && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="date">Due Date</label>
                        <input name="date" ref={register({ required: true })} className="form-control" type="date" id="date" />
                        {errors.date && <span className="text-danger">This field is required</span>}
                    </div>
                </div><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    </div>
                    <div className="form-group col-md-4">
                        <button type="submit" className="btn btn-primary">Create</button>&nbsp;
                    <button type="reset" className="btn btn-primary">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CreateIssue;