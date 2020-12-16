import {Component} from 'react';

class FilterString extends Component {

    constructor () {
        super();
        
        this.state = {
            firstArr: ['Kepler', 'Danielle', 'Cory', 'Megan', 'Nate', 'Jayquellen', 'A-Aron'],
            userInput: '',
            filteredArr: []
        };
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filter(str){
        let arr = this.state.firstArr;
        let newArr = [];

        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(str)){
                newArr.push(arr[i]);
            }
        }
        this.setState({filteredArr: newArr})
    }

    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: { JSON.stringify(this.state.firstArr, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.filter(this.state.userInput)}>Filter</button>
                <span className='resultsBox'>Filtered Names: { JSON.stringify(this.state.filteredArr, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;