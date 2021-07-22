import About from "../components/About";
import Categories from "./Categories";


const Home = ({restaurant}) => {
  return (
    <>
      <About about={restaurant.about}/>
      <Categories categories={restaurant.categories}/>
    </>
  )
}

export default Home;