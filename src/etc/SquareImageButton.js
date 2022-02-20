import React from 'react';

class SquareImageButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            text: props.value,
            color: props.color,
            backgroundColor:props.backgroundColor,
            clickEvent: props.onClick,
            imageSource: props.imageSource
        }
    }
    componentDidMount() {

    }
    render() {
        return (
        <div className="floating-button square-image-button" style={{width:this.state.width,height:this.state.height, color:this.state.color,backgroundColor:this.state.backgroundColor}} onClick={this.state.clickEvent}>
            <img src={this.state.imageSource} width="100%" height="100%"/>
        </div>
        );
    }
}

export default SquareImageButton;
