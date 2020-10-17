import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../Issues/CreateIssue.css'
type Inputs = {
    created_by: string,
    status: string,
    priority: string,
    title: string,
    desc: string,
    assignee: string,
    short_id: any,
    date: any,
};
const CreateIssue = () => {

    const { register, handleSubmit, errors } = useForm<Inputs>();
    const [formDatas, setFormDatas] = useState<any>([]);

    useEffect(() => {
        async function fetchMyAPI() {
          let res= await fetch('http://localhost:8000/api/v1/issues/')
          res = await res.json()
          setFormDatas(res)
        }
    
        fetchMyAPI()
      }, [])

      
      let DuplicatesStatus: any[] =[]
      let Duplicatespriority: any[] =[]
      let DuplicatesAssignee: any[] =[]
      let DuplicatesCreatedBy: any[] =[]

      formDatas.map((d:any)=>{
        DuplicatesStatus.push(d.status);
        Duplicatespriority.push(d.priority);
        DuplicatesAssignee.push(d.assignee);
        DuplicatesCreatedBy.push(d.created_by);
        
      })
      const distinctStatus = DuplicatesStatus.filter((n:any, i:any) => DuplicatesStatus.indexOf(n) === i);
      const distinctpriority = Duplicatespriority.filter((n:any, i:any) => Duplicatespriority.indexOf(n) === i);
      const distinctAssigne = DuplicatesAssignee.filter((n:any, i:any) => DuplicatesAssignee.indexOf(n) === i);
      const distinctCreated_By= DuplicatesCreatedBy.filter((n:any, i:any) => DuplicatesCreatedBy.indexOf(n) === i);
    
      
    const onsubmit = (values: any) => {
        console.log(values);
        axios.post('http://localhost:8000/api/v1/issues/',values)
        .then(res=>{
            console.log(res);
            
        })
        .catch(err=>{
            console.log(err);
            
        })

    }
    return (        
        
        <div className="create">
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputProject">Created By</label>
                        
                        <select id="inputProject" name="created_by" ref={register({ required: true })} className="form-control">
                            <option value="">Select Created By...</option>
                            {
                            distinctCreated_By.map((d:any)=>
                            <option value={d}>{d}</option>
                            )
                        }
                        </select>
                        {errors.created_by && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputIssue">Status</label>
                        <select id="inputIssue" name="status" ref={register({ required: true })} className="form-control">
                        <option value="">Select Status</option>
                        {
                            distinctStatus.map((d:any)=>
                            <option value={d}>{d}</option>
                            )
                        }
                        </select>
                        {errors.status && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPriority">Priority</label>
                        <select id="inputPriority" name="priority" ref={register({ required: true })} className="form-control">
                            <option value="">Choose Priority...</option>
                            {
                            distinctpriority.map((d:any)=>
                            <option value={d}>{d}</option>
                            )
                        }
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
                            {
                            distinctAssigne.map((d:any)=>
                            <option value={d}>{d}</option>
                            )
                        }
                        </select>
                        {errors.assignee && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-4">
                        <label htmlFor="inputTitle">ID</label>
                        <input type="text" name="short_id" ref={register({ required: true })} className="form-control" id="inputId" />
                        {errors.short_id && <span className="text-danger">This field is required</span>}
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