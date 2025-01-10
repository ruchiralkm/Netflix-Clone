import { useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  const { state } = useLocation();

  return (
    <div>
      <Nav />
      {/* <h1>Welcome, {state.name}!</h1>
      <p>Email: {state.email}</p> */}
      <Carousel />
    </div>
  );
};

export default Home;
