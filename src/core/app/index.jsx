import React, {Component} from 'react';
import {openTaskPopup} from 'dal/ui/popups';
import view from './view.rt';

export class App extends Component {
	constructor(props) {
		super(props);
		this.render = view;
	}

    componentWillMount(){
        openTaskPopup();
    }
}

export default App

