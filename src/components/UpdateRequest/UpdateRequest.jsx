import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateRequest() {
    const redirect = useNavigate();
    const [request, setRequest] = useState({});
    const params = useParams();
    
    useEffect(() => {
        const API_HOST = process.env.REACT_APP_API_URL;
        const req = `${API_HOST}/requests/${params._id}`;
        const fetchRequest = async () => {
            try {
                const response = await fetch(req);
                const data = await response.json();
                console.log(data);
                setRequest(data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchRequest();
    }, [params._id]);

    const updateRequest = (event) => {
        const req = `http://localhost:5000/requests/update/${params._id}`;
        const fetchRequest = async () => {
            try {
                const response = await fetch(req, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(request)
                });
                const data = await response.json();
                console.log(data);
                redirect('/myRequests');
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchRequest();
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "sname":
                setRequest({ ...request, subjectName: event.target.value });
                break;
            case "scode":
                setRequest({ ...request, subjectCode: event.target.value });
                break;
            case "surl":
                setRequest({ ...request, subjectUrl: event.target.value });
                break;
            case "slevel":
                setRequest({ ...request, subjectLevel: event.target.value });
                break;
            case "tags":
                setRequest({ ...request, tags: event.target.value });
                break;
            case "desc":
                setRequest({ ...request, description: event.target.value });
                break;
            case "startd":
                setRequest({ ...request, startDate: event.target.value });
                break;
            case "endd":
                setRequest({ ...request, endDate: event.target.value });
                break;
            case "loc":
                setRequest({ ...request, location: event.target.value });
                break;
            case "rlevel":
                setRequest({ ...request, examinatorLevel: event.target.value });
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRequest();
        // Redirect to requests page
        redirect('/requests');
    }

    return (
        console.log(request),
        <div className="requestForm">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h2 className="form-header">1. General info</h2>

                <label htmlFor="sname">Subject name*</label>
                <input type="text" id="sname" name="sname" onChange={handleChange} value={request.subjectName} required/>

                <label htmlFor="scode">Subject code*</label>
                <input type="text" id="scode" name="scode" onChange={handleChange} value={request.subjectCode} required/>
                
                <label htmlFor="surl">Subject URL</label>
                <input type="url" id="surl" name="surl" onChange={handleChange} value={request.subjectUrl}/>
                
                <label htmlFor="slevel">Subject level*</label>
                <select name="slevel" id="slevel" onChange={handleChange} defaultValue={'DEFAULT'} value={request.subjectLevel} required>
                    <option value="DEFAULT" disabled>Choose one...</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="master">Master</option>
                    <option value="phd">Ph.d.</option>
                    <option value="one-year">One-year programme</option>
                </select>
                
                <label htmlFor="tags">Tags*</label>
                <span className="info">Separate the tags by using comma.</span>

{/*                  {request.tags != null ? 
                <div className="gen-tags">
                    <ul className="gen-tags__list">
                        {request.tags.map((tag, index) => <li key={index}>{tag}</li>)}
                    </ul>
                </div> 
                : false}  */}
                <textarea id="tags" name="tags" rows="4" cols="30" onChange={handleChange} value={request.tags} required/>
             
                <label htmlFor="desc">Description*</label>
                <textarea id="desc" name="desc" rows="10" cols="50" onChange={handleChange} value={request.description} required/>

                <h2 className="form-header">2. Requirements</h2>
                
                <div className="start-date">
                    <label htmlFor="startd">Start date*</label>
                    <span className="info">When the examination job begins.</span>
                    <input type="date" id="startd" name="startd" onChange={handleChange} value={request.startDate} required/>
                </div>
                <div className="end-date">
                    <label htmlFor="endd">End date*</label>
                    <span className="info">When grading must be done.</span>
                    <input type="date" id="endd" name="endd" onChange={handleChange} value={request.endDate} required/>
                </div>

                <label htmlFor="loc">Location</label>
                <span className="info">Please provide the address. If the job can be done remotely, type "online".</span>
                <input type="text" id="loc" name="loc" onChange={handleChange} value={request.location} required/>
                
                <label htmlFor="rlevel">Subject level*</label>
                <span className="info">Which education level does the second examinator need to possess?</span>
                <select name="rlevel" id="rlevel" onChange={handleChange} defaultValue={`${request.examinatorLevel}`} required>
                    <option value="DEFAULT" disabled>Choose one...</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="master">Master</option>
                    <option value="phd">Ph.d.</option>
                </select>

                <input className="publish-btn" type="submit" value="Publish request"/>
            </form>
        </div>
    );

}

export default UpdateRequest;