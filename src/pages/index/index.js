import React from "react";
import { Link } from "react-router-dom";
function index() {
  return (
    <>
      <h2>index.html</h2>
      <Link to="/orders">to Orders</Link>|<Link to="/details">to Details</Link>
    </>
  );
}

export default index;
