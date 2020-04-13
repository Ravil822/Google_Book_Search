import React from "react";
import "./ResultList.css"

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.filter(user => user.name.first.toLowerCase().includes(props.searchtext.toLowerCase())).map(user => (
        <div className="card">
        <div className="img-container">
          <img alt={user.name} src={user.picture.large} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {user.name.first} {user.name.last}
            </li>
            <li>
            <strong>Gender:</strong> {user.gender}
            </li>
            <li>
              <strong>Location:</strong> {user.location.state}
            </li>
          </ul>
        </div>
      </div>
      ))}
    </ul>
  );
}

export default ResultList;
