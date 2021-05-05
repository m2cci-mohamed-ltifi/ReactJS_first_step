import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://m.media-amazon.com/images/M/MV5BODAwNDhhNDItMzNiNC00NjFlLTk3NmEtZDVhYzliNTE1NjI3XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_UY268_CR7,0,182,268_AL_.jpg",
    title: "What the day owes the night",
    author: "Yasmina Khedher",
  },
  {
    id: 2,
    img:
      "https://www.mercator-ocean.fr/wp-content/uploads/2019/11/Mock-Up_BlueBookCopernicus_2-600x400.jpg",
    title: "The Blue Book",
    author: "Mercator Ocean International",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //return <Book img={book.img} title={book.title} author={book.author} />;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

function Book({ img, title, author }) {
  //const {img,title,author}=props.book;
  const clickHandler = () => {
    alert(title);
  };
  return (
    <article className="book">
      <img src={img} alt="" width="200" height="300" />
      <h2 onClick={() => console.log(title)}> {title} </h2>
      <h5> {author}</h5>
      <button type="button" onClick={clickHandler}>
        Quick Event
      </button>
    </article>
  );
}
ReactDom.render(<BookList />, document.getElementById("root"));
