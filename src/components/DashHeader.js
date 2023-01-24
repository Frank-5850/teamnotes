import { Link } from "react-router-dom";

import React from "react";

const DashHeader = () => {
  const content = (
    <header>
      <div>
        <Link to="/dash">
          <h1>Header content</h1>
        </Link>
        <nav>Nav stuff</nav>
      </div>
    </header>
  );
  return content;
};

export default DashHeader;
