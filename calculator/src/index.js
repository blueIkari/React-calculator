import React from 'react';
import ReactDOM from 'react-dom';
import Digits from './Digits';
import OperationButtons from './OperationButtons';
import Clear from "./Clear";
import Result from "./Result"

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {result: "Hello", errorMassage: ''};
    }; 

    render (){
        return (
            <div className="calculator">
                <div>
                    <Result result={this.state.result}/>
                    <OperationButtons /> 
                    <Clear />
                    <Digits />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root')); 