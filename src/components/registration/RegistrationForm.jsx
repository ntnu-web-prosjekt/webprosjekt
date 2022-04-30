import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
      title: "Professor",
      university: "NTNU",
      tags: [],
      description: "",
      formIndex: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case "firstName":
        this.setState({ firstName: event.target.value });
        break;
      case "lastName":
        this.setState({ lastName: event.target.value });
        break;
      case "phone":
        var phoneno = /^[0-9]*$/;
        if (event.target.value.match(phoneno))
          this.setState({ phone: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      case "repeatPassword":
        this.setState({ repeatPassword: event.target.value });
        break;
      case "tags":
        // Refers the whole string
        const tags = event.target.value;

        // Splitting string, and removes array elements which are empty
        const tagsArray = tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tagWithoutEmptySpace) => tagWithoutEmptySpace);

        // Setting the state
        this.setState({ tags: tagsArray });
        break;
      case "description":
        this.setState({ description: event.target.value });
        break;
      case "title":
        this.setState({ title: event.target.value });
        break;
      case "university":
        this.setState({ university: event.target.value });
        break;

      default:
        console.error(
          "Missing functionality!:",
          event.target.name,
          event.target.value
        );
        break;
    }
  }

  async registerUser(credentials) {
    var returnData;
    fetch(process.env.REACT_APP_API_URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => (returnData = data));
    return returnData;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.formIndex === 1 &&
      this.state.password !== this.state.repeatPassword
    )
      alert("Password must be identical!");
    else this.setState({ formIndex: this.state.formIndex + 1 });
  };

  registerSubmit = async (event) => {
    event.preventDefault();
    this.handleSubmit(event);
    var registerData = {
      name: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      },
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      degree: this.state.title,
      university: this.state.university,
      tags: this.state.tags,
      description: this.state.description,
    };
    console.log("Sending register-data");
    const registerStatus = await this.registerUser(registerData);
    if (registerStatus) this.setState({ registerStatus: registerStatus });
  };

  render() {
    return this.state.formIndex === 1 ? (
      <div>
        <h1>Request an account (step 1/3)</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>First Name</p>
            <input
              className="aInput"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p>Last Name</p>
            <input
              className="aInput"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p>Phone Number</p>
            <input
              className="aInput"
              type="tel"
              name="phone"
              placeholder="123 45 678"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p>E-Mail</p>
            <input
              className="aInput"
              type="text"
              name="email"
              placeholder="John@Doe.Com"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p>Password</p>
            <input
              className="aInput"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p>Repeat Password</p>
            <input
              className="aInput"
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={this.state.repeatPassword}
              onChange={this.handleChange}
              required
            />
          </label>
          <input type="submit" className="aButton" value="Next Page" />
          <Link to="/login" className="backButton">
            Back to login
          </Link>
        </form>
      </div>
    ) : this.state.formIndex === 2 ? (
      <div>
        <h1>Request an account (step 2/3)</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Your Title</p>
            <select
              className="aInput"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            >
              <option value="Professor">Professor</option>
              <option value="Associate professor">Associate professor</option>
              <option value="Doctor">Doctor</option>
            </select>
          </label>
          <label>
            <p>Your University</p>
            <select
              className="aInput"
              name="university"
              value={this.state.university}
              onChange={this.handleChange}
              required
            >
              <option value="NTNU">NTNU</option>
              <option value="UIO">UIO</option>
            </select>
          </label>
          <input type="submit" className="aButton" value="Next Page" />
          <Link to="/login" className="backButton">
            Back to login
          </Link>
        </form>
      </div>
    ) : this.state.formIndex === 3 ? (
      <div>
        <h1>Request an account (step 3/3)</h1>
        <form onSubmit={this.registerSubmit}>
          <label>
            <p>Tags (separate by comma)</p>
            <ul className="gen-tags__list">
              {this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}
            </ul>
            <textarea
              className="aInput"
              id="tags"
              name="tags"
              rows="4"
              cols="60"
              onChange={this.handleChange}
              placeholder="Write relevant tags related to your academic knowledge..."
              required
            />
          </label>
          <label>
            <p>Your Description</p>
            <textarea
              className="aInput"
              id="description"
              name="description"
              rows="4"
              cols="60"
              onChange={this.handleChange}
              value={this.state.description}
              placeholder="A short text about you..."
              required
            />
          </label>
          <input type="submit" className="aButton" value="Submit Request" />
          <Link to="/login" className="backButton">
            Back to login
          </Link>
        </form>
      </div>
    ) : this.state.formIndex === 4 ? (
      <div>
        <h1>Thank you for registrating!</h1>
        <p>
          Please wait for an administrator to approve your account. You will
          receive an email which details whether you have been approved or not.
        </p>
        <NavLink to="/login" className="backButton">
          Back to login
        </NavLink>
      </div>
    ) : (
      <div>
        <h1>Waiting for a response from the server...</h1>
        <h2>Current status: {this.state.registerStatus}</h2>
      </div>
    );
  }
}

export default RegistrationForm;
