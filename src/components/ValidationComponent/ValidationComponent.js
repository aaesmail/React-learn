import React from 'react';


const validationComponent = (props) => {
    let textToOutput = null;
    if (props.textLen < 5) {
        textToOutput = "Text too short"
    }
    else {
        textToOutput = "Text long enough"
    }
    return (
        <p>{textToOutput}</p>
    );
};


export default validationComponent;