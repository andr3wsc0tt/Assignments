import * as React from "react";

import Card from "./Card";
import {Input, Submit} from "./InputAndSubmit"

export interface ILoginProps {
  name: string;
  age: number;
  gender: string;
  location: string;
}

export interface ILoginState {
  uname: string;
  password: string;
  loggedIn: boolean;
  uValue: string;
  pValue: string;
  warning: string;
}

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      uname: "eza",
      password: "1",
      loggedIn: false,
      uValue: "",
      pValue: "",
      warning: ""
    };
    // this.handleOnChange = this.handleOnChange.bind(this)
    // Interesting video on the difference between bind ^^^ and the => function.https://www.youtube.com/watch?reload=9&v=19teBd3lrpk&feature=youtu.be
    // I used one of each vvv && handleOnChange (event) =>
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    const savedStateFromLocalStorage = localStorage.getItem("loggedIn");

    if (savedStateFromLocalStorage) {
      this.setState({
        loggedIn: JSON.parse(savedStateFromLocalStorage)
      });
    }
  }

  componentDidUpdate({}, prevState: ILoginState) {
    const prevStateString = JSON.stringify(prevState.loggedIn);
    const updatedStateString = JSON.stringify(this.state.loggedIn);

    if (prevStateString != updatedStateString) {
      localStorage.setItem("loggedIn", updatedStateString);
    }
  }

  handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!this.state.loggedIn) {
      if (
        this.state.uname === this.state.uValue &&
        this.state.password === this.state.pValue
      ) {
        this.setState({
          loggedIn: true,
          warning: ""
        });
      } else {
        this.setState({
          warning: "Incorrect username or password"
        });
      }
    } else {
      this.setState({
        loggedIn: false
      });
    }

    this.setState({
      uValue: "",
      pValue: ""
    });
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    if (target.name === "uname")
      this.setState({
        uValue: target.type === "text" ? target.value : ""
      });
    else if (target.name === "pass")
      this.setState({
        pValue: target.type === "password" ? target.value : ""
      });
  };

  public render() {
    let profile: any = "";

    if (this.state.loggedIn) profile = <Card {...this.props} />;

    let loggedValues = ["login", "logout"];
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="uname">Username</label>
          <Input
            type="text"
            name="uname"
            uValue={this.state.uValue}
            handleOnChange={this.handleOnChange}
          />
          <label htmlFor="pass">Password</label>
          <Input
            type="password"
            name="pass"
            uValue={this.state.pValue}
            handleOnChange={this.handleOnChange}
          />
          <Submit
            type="submit"
            value={loggedValues[this.state.loggedIn ? 1 : 0]}
          />
          <span>{this.state.warning}</span>
        </form>

        {profile}
      </>
    );
  }
}
