import React from 'react'

class Result extends React.Component {
    constructor(props){
        super(props);
    }

    showStats(bmi){
        if (bmi < 18.5) {
            return "Under Weight";
        }
        else if ((bmi >= 18.5) && (bmi < 25)) {
            return "Normal Weight";
        }
        else if ((bmi >= 25) && (bmi < 30)) {
            return "Over Weight";
        }
        else {
            return "Obese";
        }
    }

    render() {

        return (
        <div align="center">
            <br/>
            <table className="table table-bordered table-striped">
                <tbody>
					<tr>
                        <td width="100 pixels">BMI</td>
						<td width="100 pixels">{Number(this.props.bmi).toFixed(2)}</td>
                        
                    </tr>
                    <tr>    
                        <td>Result</td>
                        <td>{this.showStats(this.props.result)}*</td>
                    </tr>
                </tbody>
            </table>
			<p>*The Body Mass Index is a popular formula and straightforward to apply, but it is not always an accurate indicator of a person’s fat to body mass ratio.</p>
        </div>
        )
    }
}

export default Result;