import React from 'react';

class BlackRoundButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            text: props.value,
            color: props.color,
            backgroundColor:props.backgroundColor,
            clickEvent: props.onClick
        }
    }
    componentDidMount() {

    }
    render() {
        return (
        <div className="floating-button brb" style={{width:this.state.width,height:this.state.height,color:this.state.color, color:this.state.color,backgroundColor:this.state.backgroundColor}} onClick={this.state.clickEvent}>
            {this.state.text}
        </div>
        );
    }
}
export default BlackRoundButton;