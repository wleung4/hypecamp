import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';
import './map.css';

const SpotMapIndex = ({ spots, mapOptions } ) => { 
	const [map, setMap] = useState(null);
	const mapRef = useRef(null);
	const markers = useRef({});
	let google = window.google;
	let marker = window.marker;


	useEffect(() => {
		if(!map) { 
			const newMap = new google.maps.Map(mapRef.current, {zoom: 8, center: {lat: 37.64654, lng: -121.39977}, ...mapOptions});
			setMap(newMap);
		}
	}, [map, spots, mapOptions])

	useEffect(() => {
		if(map) {
			Object.values(spots).forEach(spot => {
				if(!markers.current[spot.id]) {
					const coordinates = new google.maps.LatLng(spot.latitude, spot.longitude);
					marker = new google.maps.Marker({ position: coordinates, map: map, title: spot.name });
	
					markers.current[spot?.id] = marker;
				}
			})
		}
	}, [spots, map])

	return (
		<div ref={mapRef} className='google-map-div'>
			Map
		</div>
	)
}

const SpotMapWrapper = ({ spots, mapOptions }) => {
	return (
		<>
			<Wrapper apiKey={process.env.REACT_APP_HYPECAMP_MAPS_API_KEY}>
				<SpotMapIndex spots={spots} mapOptions={mapOptions}/>
			</Wrapper>
		</>
	)
}

export default SpotMapWrapper;