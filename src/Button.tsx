import * as React from 'react';

export interface IButtonProps {
}

export interface IButtonState {
  data: string
}

export default class Button extends React.Component<IButtonProps, IButtonState> {

    constructor(props : IButtonProps){
      super(props);

      this.state = {
        data: "Click Me"
      }
    }
    componentDidMount(){ //<Button/>
        onclick = () => {
            const newChange = document.getElementById("change");  //<button id="change">
            if (newChange !== null)
                newChange.innerHTML = "Clicked!"
        }
    }

  public render() {
    return (
      <button id="change">{this.state.data}</button>
    );
  }
}