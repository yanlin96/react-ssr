import React from "react";

const Home = () => {
  return (
    <div>
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
