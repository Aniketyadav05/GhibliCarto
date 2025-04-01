import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MovieLocations } from '../data/location';
import L from 'leaflet';
import MarkerClusterGroup  from 'react-leaflet-markercluster';

const MapComponent = () => {
  const hoveredMarker = 0
  
  
  return (
    <MapContainer center={[35.3606, 138.7274]} zoom={5} style={{ width: "100%", height: "100vh" }}
    zoomControl={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <MarkerClusterGroup>
      {MovieLocations.map((name) => {
        const scale = hoveredMarker === name.id ? 1.5 : 1;
        return (
        <Marker
        key={name.id}
        position={[name.lat, name.lng]}
        icon={L.icon({
          iconUrl: name.image,
          iconSize: [32 * scale, 32 * scale],  // Adjust size based on hover
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        })}
        eventHandlers={{
          click: (e) => {
            e.target._map.flyTo([name.lat, name.lng], 10);
          },
        }}
      >
        <Popup className='text-center'>
          <h1 className='text-[16px] text-[#333]'>{name.movie}</h1>
          <h2 className='text-[14px] text-[#333]'>{name.location}</h2>
          <p className='text-[12px] text-[#777]'>{name.description}</p>
          <img className='max-w-[100%] h-auto mt-2.5' src={name.image} alt="" width="100%"/>
        </Popup>
      </Marker>
      )
})}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapComponent;
