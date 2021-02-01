import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {/* 这里应该是涉及到了一个问题 */}
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
