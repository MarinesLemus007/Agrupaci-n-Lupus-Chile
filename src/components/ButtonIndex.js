import React, { Component } from 'react';

class ButtonIndex extends Component {
    render() {
        return (
                    <div className="button-div">
                    <a  className={this.props.class} href={this.props.link}>{this.props.name}</a>  
                     </div>   
                        );
}
}
export default ButtonIndex;