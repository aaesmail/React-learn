import React from 'react'

const userOutput = props => {
    return (
        <div>
            <p>UserName: {props.userName}</p>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    );
};


export default userOutput;
