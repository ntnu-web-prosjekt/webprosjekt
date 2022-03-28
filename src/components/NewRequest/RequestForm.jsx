import "./requestForm.scss";
import React from "react";

class RequestForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subject_name: "",
            subject_code: "",
            subject_url: "",
            subject_level: "",
            tags: [],
            description: "",
            start_date: "",
            end_date: "",
            location: "",
            required_level: ""
          };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addRequest = this.addRequest.bind(this);
    }

    // Handling changes of the forms inputs
    handleChange(event) {
        switch (event.target.name) {
            case "sname":
                this.setState({ subject_name: event.target.value });
                break;
            case "scode":
                this.setState({ subject_code: event.target.value });
                break;
            case "surl":
                this.setState({ subject_url: event.target.value });
                break;
            case "slevel":
                this.setState({ subject_level: event.target.value });
                break;
            case "tags":
                // Refers the whole string
                const tags = event.target.value;

                // Splitting string, and removes array elements which are empty
                const tagsArray = tags.split(",").map(tag => tag.trim()).filter((tagWithoutEmptySpace) => tagWithoutEmptySpace);

                // Setting the state
                this.setState({ tags: tagsArray });
                break;
            case "desc":
                this.setState({ description: event.target.value });
                break;
            case "startd":
                this.setState({ start_date: event.target.value });
                break;
            case "endd":
                this.setState({ end_date: event.target.value });
                break;
            case "loc":
                this.setState({ location: event.target.value });
                break;
            case "rlevel":
                this.setState({ required_level: event.target.value });
                break;
            default:
                break;
          }
      }
    
    // Handling form subbmission
    handleSubmit(event) {
        alert('Form was submitted!');
        console.log(this.state);
        // this.addRequest();
        event.preventDefault();
    }

    // Adds the submitted request to the DB
    addRequest(){
        const requestData = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              subject_name: this.state.subject_name,
              subject_code: this.state.subject_code,
              subject_url: this.state.subject_url,
              tags: this.state.tags,
              description: this.state.description,
              start_date: this.state.start_date,
              end_date: this.state.end_date,
              location: this.state.location,
              required_level: this.state.required_level,
              requested_by: "MUST RETRIEVE THE EMAIL OF THE LOGGED IN USER HERE"
            })
        };

        fetch("URL GOES HERE", requestData)
        .then((response) => response.json())
        .then((data) => {
        // data
      });
    }

    render() {
        return (
            <div className="requestForm">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <h2 className="form-header">1. General info</h2>

                    <label htmlFor="sname">Subject name*</label>
                    <input type="text" id="sname" name="sname" onChange={this.handleChange} required/>

                    <label htmlFor="scode">Subject code*</label>
                    <input type="text" id="scode" name="scode" onChange={this.handleChange} required/>
                    
                    <label htmlFor="surl">Subject URL</label>
                    <input type="url" id="surl" name="surl" onChange={this.handleChange}/>
                    
                    <label htmlFor="slevel">Subject level*</label>
                    <select name="slevel" id="slevel" onChange={this.handleChange} defaultValue={'DEFAULT'} required>
                        <option value="DEFAULT" disabled>Choose one...</option>
                        <option value="bachelor">Bachelor</option>
                        <option value="master">Master</option>
                        <option value="phd">Ph.d.</option>
                        <option value="one-year">One-year programme</option>
                    </select>
                    
                    <label htmlFor="tags">Tags*</label>
                    <span className="info">Separate the tags by using comma.</span>

                    {this.state.tags.length > 0 ? 
                    <div className="gen-tags">
                        <ul className="gen-tags__list">
                            {this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}
                        </ul>
                    </div> 
                    : false}

                    <textarea id="tags" name="tags" rows="4" cols="30" onChange={this.handleChange} required/>
                    
                    <label htmlFor="desc">Description*</label>
                    <textarea id="desc" name="desc" rows="10" cols="50" onChange={this.handleChange} required/>
    
                    <h2 className="form-header">2. Requirements</h2>
                    
                    <div className="start-date">
                        <label htmlFor="startd">Start date*</label>
                        <span className="info">When the examination job begins.</span>
                        <input type="date" id="startd" name="startd" onChange={this.handleChange} required/>
                    </div>
                    <div className="end-date">
                        <label htmlFor="endd">End date*</label>
                        <span className="info">When grading must be done.</span>
                        <input type="date" id="endd" name="endd" onChange={this.handleChange} required/>
                    </div>

                    <label htmlFor="loc">Location</label>
                    <span className="info">Please provide the address. If the job can be done remotely, type "online".</span>
                    <input type="text" id="loc" name="loc" onChange={this.handleChange} required/>
                    
                    <label htmlFor="rlevel">Subject level*</label>
                    <span className="info">Which education level does the second examinator need to possess?</span>
                    <select name="rlevel" id="rlevel" onChange={this.handleChange} defaultValue={'DEFAULT'} required>
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
}

export default RequestForm;