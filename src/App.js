import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

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
    // react says we have to define the render method!!
    render() {
        if ( this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if ( !this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay lat = { this.state.latitude } />
        }
        return <Loader/>;
    }
}

export default App;