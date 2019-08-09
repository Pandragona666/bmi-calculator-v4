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
					<p>*The Body Mass Index is a popular formula and straightforward to apply, but it is not always an accurate indicator of a person’s fat to body mass ratio.</p>
                </div>
            </div>
        )
    }
}

export default BmiCalculator;