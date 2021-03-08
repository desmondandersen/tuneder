import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render(){
        return(
          <div>
            <Map
              google={this.props.google}
              initialCenter={{
                lat: 34.0689,
                lng: -118.4452
              }}
              zoom={15}
            >
              <Marker
                position={{lat: 37.759703, lng: -122.428093}} />
              <Marker />
            </Map>
          </div>)
    }
  }

  
  export default GoogleApiWrapper({
      apiKey: ''
  }) (MapContainer);
