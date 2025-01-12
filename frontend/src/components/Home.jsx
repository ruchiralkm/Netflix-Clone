import { useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";
import Movies from "./Movies";

const Home = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="bg-black">
        {/* <h1>Welcome, {state.name}!</h1>
      <p>Email: {state.email}</p> */}

        {/* Pass state.name to Nav */}
        <Nav userName={state.name} userEmail={state.email} />
        <Carousel />
        <Movies />

        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/S0IWuCdeBME"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </div>
    </>
  );
};

export default Home;
