import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@test.com",
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>

        <input onChnage={this.updateEmailField} type="email" name="email" />
      </div>
    );
  }
}

export default SignUp;
