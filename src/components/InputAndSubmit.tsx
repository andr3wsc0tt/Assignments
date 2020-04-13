import * as React from 'react';

export interface IInputProps {
    type : string,
    name: string, 
    uValue : string,
    handleOnChange : (event: React.ChangeEvent<HTMLInputElement>) => void
}

export class Input extends React.Component<IInputProps> {
  public render() {
      const {
          type, name, uValue, handleOnChange
      } = this.props

    return (
        <input
        type={type}
        name={name}
        value={uValue}
        onChange={handleOnChange}
      />
    );
  }
}

export interface ISubmitProps {
    type : string,
    value : string,
}

{/* <input
            type="submit"
            value={loggedValues[this.state.loggedIn ? 1 : 0]}
          ></input> */}

export class Submit extends React.Component<ISubmitProps> {
    public render() {
        const {
            type, value
        } = this.props
  
      return (
          <input
          type={type}
          value={value}
        />
      );
    }
  }
