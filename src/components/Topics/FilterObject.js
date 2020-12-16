import {Component} from 'react';

class FilterObject extends Component {

    constructor (){
        super();

        this.state = {
            objectArr: [
                {
                    name:'Kepler',
                    age: 28,
                    state: 'Utah'
                },
                {
                    title: 'doctor',
                    age: 35,
                    school: 'stanford'
                },
                {
                    name: 'Cory',
                    state: 'Indiana',
                    title: 'senior developer'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterArr(prop){
        let arr = this.state.objectArr;
        let newArr = [];

        for(let i = 0; i < arr.length; i++){
            if(arr[i].hasOwnProperty(prop)){
                newArr.push(arr[i]);
            }
        }
        this.setState({filteredArray: newArr});
    }


    render () {
        return (
            <div className='puzzleBox fileterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.objectArr, null, 10)}</span>
                <input className='inputLine' onChange= { (e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => {this.filterArr(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterObjectRB'>{ JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;