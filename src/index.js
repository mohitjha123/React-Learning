import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const books = [
  {
    author: "James Clear",
    title: "Atomic Habits: the life-changing million-copy #1 bestseller",
    img: './img/1632735326.jpg',
    id: 1,
  },
  {
    author: "Anthony Doerr ",
    title: "All The Light We Cannot see",
    img: 'https://images.squarespace-cdn.com/content/v1/605b7322b806fb292a9defce/1617816625655-PUCD8T87L4YO2KZGMQPU/all-the-light-we-cannot-see_Anthony_Doerr.jpg',
    id: 2,
  },
  {
    author: "Akshat Gupta",
    title: "The Hidden Hindu",
    img: 'https://m.media-amazon.com/images/I/61BM-uMRxfL._AC_UF350,350_QL80_.jpg',
    id: 3,
  },
  {
    author: "Akshat Gupta",
    title: "The Power of Your Subconscious Mind ",
    img: 'https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg',
    id: 4,
  },
  {
    author: "Napoleon Hill",
    title: "Think and Grow Rich",
    img: 'https://m.media-amazon.com/images/I/81L06A1SNJL.jpg',
    id: 5,
  }

];

/*const firstBook = {
  author: "James Clear",
  title: "Atomic Habits: the life-changing million-copy #1 bestseller",
  img: './img/1632735326.jpg',
};
const secBook = {
  author: "Anthony Doerr ",
  title: "All The Light We Cannot see",
  img: 'https://images.squarespace-cdn.com/content/v1/605b7322b806fb292a9defce/1617816625655-PUCD8T87L4YO2KZGMQPU/all-the-light-we-cannot-see_Anthony_Doerr.jpg',
};
const thirdBook = {
  author: "Akshat Gupta",
  title: "The Hidden Hindu",
  img: './img/hindu-newproject2.jpg',
};*/
const BookList = () => {
  return <section className='booklist'>
    <EventExample />
    {books.map((book) => {
      return <Book {...book} key={book.id} />;
    })}
  </section>
}

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle form input");
  }
  const handleButtonClick = () => {
    alert("handle Button Click");
  }
  const handleOnSubmit = () => {
    alert("Form Submitted");
  }
  return <section>
    <form onSubmit={handleOnSubmit}>
      <h2>Typical Form</h2>
      <input className='input' type="text" name='example' onChange={handleFormInput} style={{ margin: '1rem 0' }} />
      <div>
        <button className='btn' onClick={handleButtonClick} type='button' style={{ margin: '5px' }}>click me</button>
        <button className='btn' type='submit' style={{ margin: '5px' }}>Submit</button>
      </div>
      <button type='button' className="btn bt" onClick={() => alert("Anonymous Function")}>Anonymous Function</button>
    </form>
  </section>
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props)
  const displayTitle = () =>{
    alert(title)
  }
  return <article className='book'>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h3>{author}</h3>
    <button className="btn" onClick={displayTitle}>View Title</button>
  </article>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList></BookList>);