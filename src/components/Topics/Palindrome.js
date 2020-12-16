import {Component} from 'react';

class Palindrome extends Component {

    constructor () {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    test(word){
        let arr = word.split("");
        let testArr = [];
        let firstWord = '';
        let secondWord = '';

        for(let i = 0; i < arr.length; i++){
            testArr.unshift(arr[i]);
        }
        
        firstWord = arr.join();
        secondWord = testArr.join();

        if(firstWord === secondWord){
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }

    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.test(this.state.userInput)}>TEST</button>
                <span className='resultsBox'>{JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome;