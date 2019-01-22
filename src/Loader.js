import React from 'react';
import './loader.css';

export default () => {
    return (
        <div class="loader-container ui segment">
            <div class="ui active dimmer">
                <div class="ui text loader">Loading</div>
            </div>
        </div>
    )
}