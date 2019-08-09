import React from 'react'
import Result from './Results';

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            weight: 0,
            height: 0,
            bmi: 0
        }
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.getBMI = this.getBMI.bind(this);
    }

    handleWeightChange(event){
        this.setState({weight: event.target.value})
    }

    handleHeightChange(event){
        this.setState({height: event.target.value})
    }

    getBMI(weight, height){
        let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
        this.setState({bmi: bmi});
    }
	
	setBmi = () => {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) });
  }

    render() {
        return (
            <div>
                <hr/>
              
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label text-left">Weight</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="weight" name="weight" onChange={this.handleWeightChange} placeholder="Enter Your Weight in kilograms"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label text-left">Height</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="height" name="height" onChange={this.handleHeightChange} placeholder="Enter Your Height in metres"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm" onClick={this.getBMI} style={{float: 'left', marginLeft: '93px'}}>Get BMI</button>
                        </div>
                        <br/><br/>                      
                        <div className="col-lg-3"></div>
                    </div>
                    <div className="row">
						<div className="container">
							<div className="col-lg-3"></div>
							<div className="col-lg-6">
                            {this.state.bmi !== 0 ? (<Result result={this.state.bmi} bmi={this.state.bmi}/>) : null}
							</div>
							<div className="col-lg-3"></div>
						</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;