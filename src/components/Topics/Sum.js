import {Component} from 'react';

class Sum extends Component {

    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(num1){
        this.setState({number1: parseInt(num1)})
    }

    handleChange2(num2){
        this.setState({number2: parseInt(num2)})
        console.log(num2);
    }

    addition(num1, num2){
        this.setState({sum: num1 + num2})
    }

    render () {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange= {(e) => this.handleChange1(e.target.value)}/>
                <input className='inputLine' onChange= {(e) => this.handleChange2(e.target.value)}/>
                <button className='confirmationBox' onClick={ () => this.addition(this.state.number1, this.state.number2)}>Answer</button>
                <span className='resultsBox'>SUM: {JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}

export default Sum;