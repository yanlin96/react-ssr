import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div>Home!!</div>
      <button
        onClick={() => {
          alert("clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
