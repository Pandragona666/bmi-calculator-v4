import React from 'react'
import Form from './Form';

class BmiCalculator extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        var style = {
            marginTop: '20px'
        }
        return (
            <div>
                <div className="container" style={style}>             
                    <h2>{this.props.title}</h2>
					<h4>A measure of body fat in adults</h4>
                    <Form/>
                </div>
            </div>
        )
    }
}

export default BmiCalculator;