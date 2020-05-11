import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { store } from '../..';

const AnyReactComponent = ({ text }) => <div>
    <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        style={{ width: 40, height: 40 }}
    />
</div>;


class Home extends React.Component {
    state = {
        latitude: 22.59,
        longitude: 88.43
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    componentDidMount() {
        this.getCurrentLocation()
    }

    getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            })
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }

    render() {
        console.log("store---->",store)
        return (
            <div >
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'This is test name'}
                    />
                </Map>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBblBBdFgTqvTIums6FXNMBdwkIvHAP-vs'
})(Home);
const mapStyles = {
    width: '100%',
    height: '100%'
};
