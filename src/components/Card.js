import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {
    render () {
        return (
            <div class="container">
                <div class="card">
                    <img class="card-img-top" src={this.props.img} alt="Card image" />
                    <div class="card-body">
                        <h4 class="card-title">{this.props.animal}</h4>
                        <p class="card-text">{this.props.subtext}</p>
                        <a href={this.props.location} class="btn btn-primary">{this.props.btntext}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
