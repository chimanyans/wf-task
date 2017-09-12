import React, {Component} from 'react';
import View from 'ui/view';

import './style.scss';

export class Tooltip extends Component {
    render() {
        let returnValue = null;
        if(this.props.show){
            returnValue = (
                <View className="tooltip" >
                    <span className="tooltiptext">{this.props.text}</span>
                </View>
            )
        }
        return returnValue;
    }
}

export default Tooltip;