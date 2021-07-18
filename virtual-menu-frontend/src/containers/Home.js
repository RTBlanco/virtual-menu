import About from "../components/About";
import Categories from "./Categories";


const Home = ({categories}) => {
  return (
    <>
      <About />
      <Categories categories={categories}/>
    </>
  )
}

export default Home;