import React from 'react';

import './loader.css';

const Loader = (props) => {

    return (
        <div className="loader-container ui segment">
            <div className="ui active dimmer">
                <div className="ui text loader">
                    { props.loadingMessage } 
                </div>
            </div>
        </div>
    )
}

Loader.defaultProps = {
    loadingMessage: 'Loading....'
}

export default Loader;