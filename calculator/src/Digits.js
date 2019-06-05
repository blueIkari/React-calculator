import React from 'react'
 

const Digits = (props) =>{
    return(
        <div className="digits">
            <div className="first row">
                <div className="ui buttons">
                    <button className="ui button">7</button>
                    <button className="ui button">8</button>
                    <button className="ui button">9</button>
                </div>
            </div>
            <div className="second row">
                <div className="ui buttons">
                    <button className="ui button">4</button>
                    <button className="ui button">5</button>
                    <button className="ui button">6</button>
                </div>
            </div>
            <div className="third row">
                <div className="ui buttons">
                    <button className="ui button">1</button>
                    <button className="ui button">2</button>
                    <button className="ui button">3</button>
                </div>
            </div>
            <button className="ui button">0</button>

        </div>
    );
}

export default Digits;