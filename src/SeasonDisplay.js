import React from 'react';

const getSeason = (lat, month) => {
    if ( month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

export default (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    return (
        <div>
            { season === 'Winter' ? 'Burrr, It is chilly' : 'Lets hit the beach' }
        </div>
    )
}