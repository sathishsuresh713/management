import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className="App">
      <div className="mt-3 text-danger">Home page</div>
      <div className="mt-5 text-center">
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => setCount(count - 1)}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
        <span className="mx-2 border border-info rounded p-2 ">{count}</span>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setCount(count + 1)}
          disabled={count < 10 ? false : true}
        >
          +
        </button>
      </div>
      <div className="mt-5 p-2">
        <button className={`btn ${show?"btn-danger":"btn-primary"} btn-sm`} onClick={() => setShow(!show)}>{show?"Hide":"Show"}</button>
        {
          show? <div className="text-success">
          Velit qui excepteur occaecat veniam anim cillum occaecat ex ex fugiat
          proident deserunt. Excepteur aute consequat eiusmod reprehenderit
          adipisicing commodo in labore esse culpa. Nostrud dolore aute eu esse
          mollit eiusmod deserunt irure eu fugiat quis nulla quis anim. Lorem ad
          id aliquip quis fugiat veniam in incididunt occaecat magna fugiat
          nostrud velit minim. Officia quis voluptate sint laboris aliqua esse
          dolor.
        </div>:""
        }
      </div>
      <div className="mt-5 text-center">
        <input onChange={(events)=> setName(events.target.value)}/>
        <button className="btn btn-outline-primary btn-sm" onClick={() => setIsSubmit(true)}>Submit</button>
      </div> 
      <div>
        {
          isSubmit?<div className="text-center text-success"><p>{name}</p></div>:''
        }
      </div>
    </div>
  );
}

export default Home;
