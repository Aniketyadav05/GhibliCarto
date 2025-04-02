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
          iconSize: [50 * scale, 50 * scale],  // Adjust size based on hover
          iconAnchor: [16, 32],
          
        })}
        eventHandlers={{
          click: (e) => {
            e.target._map.flyTo([name.lat, name.lng], 12);
          },
        }}
      >
        <Popup
        autoClose={false}
        closeOnClick={false}
        >
          <div className='bg-purple-400 p-5 flex flex-col items-center justify-center '>
            <h1 className='text-2xl font-bold text-white font-[Perished] mb-2'>{name.movie}</h1>
            <h2 className='text-xl font-bold text-white'>{name.location}</h2>
            <p className='text-l font-extrabold text-black'>{name.description}</p>
            <img className='max-w-[100%] h-auto mt-2.5' src={name.image} alt="" width="100%"/>
            <button className='font-[Vonique] text-purple-700 bg-white p-2 rounded-lg text-3xl border-2 mt-4 cursor-pointer' onClick={() => navigate(`/Movies/${name.id}`)}>More.....</button>          
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
