import React,{useState} from 'react';

const Product = (props) => {
  let [count, setCount] = useState(0);
  return (
  <div>
    <div className="Card" style={{width: "18rem"}}  >
    <img src={props.image} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="https://www.jiomart.com/?gclid=Cj0KCQiAxc6PBhCEARIsAH8Hff2SUpXPPVxOmgU4wO_YoKvkj9GTY16sjc7ttxNGjxWv3EsVcZVSZRYaAlEjEALw_wcB" className="btn btn-primary mx-2">Buy</a>
      <button onClick={()=>setCount(count+1)}type="button" className="btn btn-primary mx-2">Qty {count}</button>
      <button onClick={()=>setCount(count-1)}type="button" className="btn btn-primary my-2">Delete</button>
      <button onClick={()=>setCount(0)}type="button" className="btn btn-primary my-2">Reset</button>
    </div>
    </div>
  </div>
  )
};

export default Product;
