import InfiniteMenu from "../components/InfiniteMenu"
import { MovieLocations } from "../data/location"

const Items = MovieLocations.map(name => ({
  image: name.image,
  link: `/Movies/${name.id}`,
  title: name.movie,
  description: name.description
}))

const Movies = () => {
  return (
    <div className="relative h-[100vh] bg-gray-700 text-white">
  <InfiniteMenu items={Items}/>
</div>
  )
}

export default Movies