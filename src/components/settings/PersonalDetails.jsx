import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalDetails() {
  const redirect = useNavigate();
  const [request, setRequest] = useState({});

  const updateRequest = (event) => {
    const API_HOST = process.env.REACT_APP_API_URL;
    const req = `${API_HOST}/settings/update/data`;
    console.log(request);
    const fetchRequest = async () => {
      try {
        const response = await fetch(req, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        });
        const data = await response.json();
        console.log(data);
        redirect("/profile");
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRequest();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRequest((request) => ({
      ...request,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRequest();
  };

  return (
    <div>
      <h1>
        <span>Personal Details</span>
      </h1>
      <div className="form-group">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={request.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={request.lastName}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={request.email}
              onChange={handleChange}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={request.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
