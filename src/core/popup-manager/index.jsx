import React, {Component} from 'react';
import {connect} from 'react-redux';

import view from './view.rt';

@connect(state => ({
        activePopup: state.ui.activePopup
}))
export class PopupManager extends Component {
    constructor(props){
        super(props);
        this.render = view;
    }
}

export default PopupManager;