import React from "react";
import "./ResultList.css";
import BookCard from "./BookCard"

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(book => (
        <BookCard book={book}>
        </BookCard>
      ))}
    </ul>
  );
}

export default ResultList;
