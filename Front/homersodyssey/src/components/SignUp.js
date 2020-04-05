import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordre: "",
      firstname: "",
      lastname: "",
    };
  }

  updateEmailField = (event) => {
    const target = event.target;
    const stateName = target.name;

    const stateValue = target.value;

    this.setState({
      [stateName]: stateValue,
    });
  };

  handleSubmit = (event) => {
    console.log(JSON.stringify(this.state), "console.log");
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <span>
            First Name
            <input
              onChange={this.updateEmailField}
              type="text"
              name="firstname"
              value={this.state.firstname}
            />
          </span>
          <br />
          <span>
            Last Name
            <input
              onChange={this.updateEmailField}
              type="text"
              name="lastname"
              value={this.state.lastname}
            />
          </span>
          <br />
          <span>
            E-mail
            <input
              onChange={this.updateEmailField}
              type="email"
              name="email"
              value={this.state.email}
            />
          </span>
          <br />
          <span>
            Password
            <input
              onChange={this.updateEmailField}
              type="password"
              name="password"
              value={this.state.password}
            />
          </span>
          <br />
          <span>
            Re-Password
            <input
              onChange={this.updateEmailField}
              type="passwordconf"
              name="passwordconf"
              value={this.state.passwordconf}
            />
          </span>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
