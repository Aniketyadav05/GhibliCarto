import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MovieLocations } from '../data/location';
import L from 'leaflet';
import MarkerClusterGroup  from 'react-leaflet-markercluster';
import { useNavigate } from 'react-router-dom';

const MapComponent = () => {
  const hoveredMarker = 0
  const navigate = useNavigate()
  
  return (
    <div className='h-[100vh] w-[100%] z-[1]  '>
      <MapContainer center={[35.3606, 138.7274]} zoom={5} style={{ width: "100%", height: "100vh" }}
    zoomControl={false} >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a>'
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
        <Popup
        autoClose={false}
        closeOnClick={false}
        
        >
          <div className='bg-amber-300 p-4 font-[Menorca] flex flex-col items-center justify-center mt-'>
            <h1 className='text-3xl font-bold text-[#333] font-[Perished]'>{name.movie}</h1>
            <h2 className='text-xl font-bold text-[#333]'>{name.location}</h2>
            <p className='text-l font-bold text-black'>{name.description}</p>
            <img className='max-w-[100%] h-auto mt-2.5' src={name.image} alt="" width="100%"/>
            <button className='bg-purple-700 p-2 rounded-lg text-3xl border-2 mt-4 cursor-pointer' onClick={() => navigate(`/Movies/${name.id}`)}>More.....</button>          
          </div>
        </Popup>
      </Marker>
      )
})}
      </MarkerClusterGroup>
    </MapContainer>
    </div>
  );
};

export default MapComponent;
