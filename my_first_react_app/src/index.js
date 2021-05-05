
import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

const Greeting = () => {
  return  (
    <div>
      <h4>Hello World</h4>
      <ul>
        <li> 
          <a href="www.google.com"> Hello</a>
        </li>
        <li>
        <input type="text"/>
        </li>
      </ul>
    </div>
  
  );
}
function Hello (){
  return React.createElement('h1',{},'hello world React');
}
// Hello1 return a html script using the function Person
function Hello1 (){
  return (
    <Person/>
  );
}
const Person =() => <h2>Mohamed Ayoub</h2>

/*ReactDom.render  replace the element root 
// from index.html by the function Hello1
ReactDom.render(<Hello1/>,document.getElementById('root'));*/
function BookList(){
  return(
    <section className="booklist">
      <Book titre="What the day owes the night"/>
      <Book author="Yasmina khedher"/>
    </section>
  );
}
const source="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg";
const Book = (props) => {
  return (
  <article className="book">
    <img width="200" height="300"  src={source} alt=""/>
    <h3>{props.titre}</h3>
    <h2> { "By " +props.author}</h2>
  </article>
  );
}



ReactDom.render(<BookList/>,document.getElementById('root'));