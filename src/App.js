import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

import './App.css';

class App extends Component {
    state = {
        latitude: null,
        errorMessage: ''
    }
  
    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
        this.getGeoLocation();
    }

    componentWillUnmount() {
        console.log('COMPONENT UNMOUNTED');
    }

    getGeoLocation() {
        window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ latitude: position.coords.latitude }),
        (err) => this.setState({errorMessage: err.message})
      );
    }
    renderContent() {
        if ( this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if ( !this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay lat = { this.state.latitude } />
        }
        return <Loader loadingMessage = "Please accept user location." />
    }

    // react says we have to define the render method!!
    render() {
        return (
            <div className="red-border">
                { this.renderContent() }
            </div>
        )
    }
}

export default App;