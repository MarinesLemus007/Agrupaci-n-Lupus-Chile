import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ButtonIndex extends Component {
    render() {
        return (
            <div className="button-div">
                <Link className={this.props.class} to={this.props.link}>
    
                {this.props.name}
            
                </Link>
             </div>            
                      
                        );
}
}
export default ButtonIndex;