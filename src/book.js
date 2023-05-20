const Book = (props) => {
  const { img, title, author, addToCard, buyNow, getBook, id, index } = props;

  //console.log(props)
  return <article className='book'>
    <span className="index">#{index + 1}</span>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h3>{author}</h3>
    <button className="btn" onClick={buyNow}>Buy Now</button>
    <button className="btn bttn" onClick={addToCard}>Add To Card</button>
    <button className="btn bttn" onClick={() => getBook(id)}>Get Book</button>

  </article>
}

export default Book