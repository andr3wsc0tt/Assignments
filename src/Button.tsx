import * as React from 'react';

export interface IButtonProps {
}

export default class Button extends React.Component<IButtonProps> {

    componentDidMount(){
        onclick = () => {
            const newChange = document.getElementById("change"); 
            if (newChange !== null)
                newChange.innerHTML = "Clicked!"
        }
    }
  public render() {
    return (
      <button id="change">Click Me</button>
    );
  }
}
