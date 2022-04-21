import { Component } from "react";

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
      title: "",
      university: "",
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
        this.setState({ tags: event.target.value });
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
            First Name
            <br />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone Number
            <br />
            <input
              type="tel"
              name="phone"
              placeholder="123 45 678"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-Mail
            <br />
            <input
              type="text"
              name="email"
              placeholder="John@Doe.Com"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Repeat Password
            <br />
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={this.state.repeatPassword}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    ) : this.state.formIndex === 2 ? (
      <div>
        <h1>Request an account (step 2/3)</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Title
            <br />
            <select
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
          <label>
            Your University
            <br />
            <select
              name="university"
              value={this.state.university}
              onChange={this.handleChange}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    ) : this.state.formIndex === 3 ? (
      <div>
        <h1>Request an account (step 3/3)</h1>
        <form onSubmit={this.registerSubmit}>
          <label>
            Tags
            <br />
            <input
              type="text"
              name="tags"
              placeholder="Click to search..."
              value={this.state.tags}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Your Description
            <br />
            <input
              type="text"
              name="description"
              placeholder="A short text about you..."
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    ) : this.state.formIndex === 4 ? (
      <div>
        <h1>Thank you for registrating!</h1>
        <p>
          Please wait for an administrator to approve your account.
          <br />
          You will receive an email which details whether you have been approved
          or not.
        </p>
        <button>Back to login</button>
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
