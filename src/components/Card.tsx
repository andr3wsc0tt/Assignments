import React, { Component } from "react";
import "./Card.css";

export interface ICardProps {
  name: string;
  age: number;
  gender: string;
  location: string;
}

class Card extends Component<ICardProps> {
  render() {
    const { name, age, gender, location } = this.props;

    return (
      <React.Fragment>
        <section className="card-container">
          <header className="card-header">
            <h2>{name}</h2>
          </header>
          <main>
            <h2>{age}</h2>
            <h2>{gender}</h2>
            <h2>{location}</h2>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default Card;
