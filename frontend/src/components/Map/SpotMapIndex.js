import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Map.css';
import { useHistory } from 'react-router-dom';

const SpotMapIndex = ({ spots, mapOptions, highlightedSpot, setHighlightedSpot }) => {
	const [map, setMap] = useState(null);
	const mapRef = useRef(null);
	const markers = useRef({});
	const history = useHistory();
	let google = window.google;
	let marker = window.marker;

	useEffect(() => {
		if (!map) {
			const defaultOptions = {
				zoom: 10, center: { lat: 37.8253, lng: -122.3700 }, mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false, fullscreenControl: false, disableDefaultUI: true
			};
			const newMap = new google.maps.Map(mapRef.current, { ...defaultOptions, ...mapOptions });
			setMap(newMap);
		}
	}, [map, spots, mapOptions])

	useEffect(() => {
		if (map) {
			const infowindow = new google.maps.InfoWindow();
			let windowOpened = false;

			Object.values(spots).forEach(spot => {
				if (!markers.current[spot.id]) {
					const coordinates = new google.maps.LatLng(spot.latitude, spot.longitude);

					const markerOptions = {
						position: coordinates,
						map: map,
						title: spot.name
					}

					marker = new google.maps.Marker(markerOptions);

					markers.current[spot?.id] = marker;

					marker.addListener('click', () => {
						map.panTo(markers.current[spot?.id].getPosition());
						history.push(`/spots/${spot.id}`);
					});

					marker.addListener('mouseover', () => {
						if (windowOpened) {
							infowindow.close();
						}
						infowindow.setContent(spot?.name);
						infowindow.open(map, markers.current[spot?.id]);
						windowOpened = true;
						setHighlightedSpot(spot);
					});

					marker.addListener('mouseout', () => {
						if (windowOpened) {
							infowindow.close();
						}
						windowOpened = false;
						setHighlightedSpot(null);
					})
				}
			})
		}
	}, [spots, map, highlightedSpot])

	return (
		<div ref={mapRef} className='google-map-div'>
			Map
		</div>
	)
}

const SpotMapWrapper = ({ spots, mapOptions, highlightedSpot, setHighlightedSpot }) => {
	return (
		<>
			<Wrapper apiKey={process.env.REACT_APP_HYPECAMP_MAPS_API_KEY}>
				<SpotMapIndex spots={spots} mapOptions={mapOptions}
					highlightedSpot={highlightedSpot} setHighlightedSpot={setHighlightedSpot} />
			</Wrapper>
		</>
	)
}

export default SpotMapWrapper;