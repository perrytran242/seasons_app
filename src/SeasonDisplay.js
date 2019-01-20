import React from 'react';

export default (props) => {
    console.log(props.lat);
    return (
        <div>Latitude: {props.lat} </div>
    )
}