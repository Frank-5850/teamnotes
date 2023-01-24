import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section>
      <div>html for landing page of business</div>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
