import React from 'react';

import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr.. it\'s cold!',
        iconName: 'snowflake'
    },
}

const getSeason = (lat, month) => {
    if ( month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];


    return (
        <div className={`${season} season-display`}>
            <i className={`icon-left ${iconName} icon massive`} ></i>
            {/* <h1>{ season === 'winter' ? 'Burrr, It is chilly' : 'Lets hit the beach' }</h1> */}
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`} ></i>
        </div>
    )
}