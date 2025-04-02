import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieLocations } from "../data/location";
export interface Movie {
  id: number;
  movie: string;
  location: string
  image: string
  description: string;
}

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const foundMovie = MovieLocations.find((m) => m.id === Number(id));
    setMovie(foundMovie || null);
  }, [id]);
  if (!movie) return <div className="flex items-center justify-center mt-[20%] text-6xl font-extrabold">
    <p>Loading...</p>
  </div>;
  return (
    <div className=" h-[40px] text-white bg-black">
      <button className="p-2 bg-purple-700  rounded ml-8 font-bold cursor-pointer" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6 font-[Perished] tracking-wider">{movie.movie}</h1>
      <h1 className="text-4xl mb-6 font-[Vonique] tracking-wider text-purple-600">LOCATION:  {movie.location}</h1>
      <div className=" backdrop-blur-lg bg-white/10 border-b-3 border-t-2 border-x-2  border-purple-400/20 shadow-md shadow-purple-600 ">
      <img className="h-52 " src={movie.image} alt={movie.movie} />
      </div>
      <p className="mt-6 mb-10 font-bold text-xl mx-4">{movie.description || "no data available"}</p>
      </div>

    </div>
  )
}

export default Details