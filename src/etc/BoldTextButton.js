import React from 'react';

class BoldTextButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            text: props.value,
            color: props.color,
            backgroundColor: props.backgroundColor,
            clickEvent: props.onClick
        }
    }
    componentDidMount() {

    }
    render() {
        return (
        <div className="floating-button btb" style={{width:this.state.width,height:this.state.height, color:this.state.color,backgroundColor:this.state.backgroundColor}} onClick={this.state.clickEvent}>
            <b>{this.state.text}</b>
        </div>
        );
    }
}

export default BoldTextButton;
