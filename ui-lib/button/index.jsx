import React, {Component} from 'react';

import './style.scss'

export class Button extends Component {
    render() {
        return (
            <button className="button" {...this.props}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;