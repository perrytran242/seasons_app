import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold',
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
    console.log(seasonConfig[season])

    return (
        <div>
            <i className={`${iconName} icon`} ></i>
            <h1>{ season === 'winter' ? 'Burrr, It is chilly' : 'Lets hit the beach' }</h1>
            <i className={`${iconName} icon`} ></i>
        </div>
    )
}