import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Employee() {
  const [users, setUsers] = useState([]);

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
        </div>
      </div>
    </div>
  );
}

export default Employee;
