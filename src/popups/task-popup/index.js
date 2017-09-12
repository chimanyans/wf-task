import React, {Component} from 'react';
import view from './view.rt';
import {closeActivePopup} from 'dal/ui/popups';

import "./style.scss"

const createData = () => {
    var data = [];
    for(var i= 1; i< 11; i++){
        data.push({value : i, color: "#"+((1<<24)*Math.random()|0).toString(16)})
    }
    return data;
};

export class TaskPopup extends Component {
    constructor(props) {
        super(props);
        this.ratingButtons = createData();
        this.state = {
            isDone : false,
            selected: null,
            tooltipText: null,
            tooltipIndex: null
        };

        this.render = view;
    }

    ratingButtonMouseOver(item){
        this.setState({
            tooltipText: "HOVER",
            tooltipPosition: item.value
        })
    }

    ratingButtonMouseOut(){
        this.setState({
            tooltipText: null,
            tooltipPosition: null
        })
    }

    ratingButtonClick(item){
        if(this.state.selected && item.value == this.state.selected.value){
            this.setState({
                tooltipText: "CLICK 2",
                selected : null,
                tooltipPosition: item.value
            })
        } else {
            this.refs.textarea.focus();
            this.setState({
                tooltipText: "CLICK 1",
                selected : item,
                tooltipPosition: item.value
            })
        }
    };

    doneButtonClick(){
        if(this.state.selected){
            this.setState({
                isDone : true
            }, setTimeout(()=> {
                this.close()
            }, 5000));
        }
    }

    showTooltip(item){
        return this.state.tooltipPosition==item.value
    }

    close(){
        closeActivePopup()
    }
}
export default TaskPopup
