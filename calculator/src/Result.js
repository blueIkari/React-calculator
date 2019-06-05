import React from "react";


const Result = (props) => {
    return (
        <div>
            <button className="ui button">{props.result}</button>
        </div>
    )
}

export default Result;