import React from "react";
function Book({ img, title, author }) {
  //const {img,title,author}=props.book;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    //alert(title);
  };
  const Exemple2 = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" width="200" height="300" />
      <h2 onClick={() => console.log(title)}> {title} </h2>
      <h5> {author}</h5>
      <button type="button" onClick={clickHandler}>
        Quick Event
      </button>
      <button type="button" onMouseOver={() => Exemple2(author)}>
        Exemple2
      </button>
    </article>
  );
}

export default Book;
