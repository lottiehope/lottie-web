import React, { Component } from 'react';
import '../styles/Promo.css';


class Promo extends Component {
    render () {
        return (
            <div className="Promo">
                <div className="Promo--item">
                    <h2 className="Promo--item-title">{this.props.title}</h2>
                </div>
            </div>
        );
    }
}

export default Promo;