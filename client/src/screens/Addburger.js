import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
import { addBurger } from "../actions/burgerActions";
export default function Addburger() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  
  const dispatch = useDispatch()

  const addBurgerstate = useSelector(state=>state.addBurgerReducer)
  const {success , error , loading} = addBurgerstate
  function formHandler(e){

    e.preventDefault();

    const burger ={
        name ,
        image,
        description,
        category,
        prices:{
            
            medium : mediumprice,
            large : largeprice
        }
    }

    console.log(burger);
    dispatch(addBurger(burger));

  }

  return (
    <div>
      <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
        <h1>Add burger</h1>

        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        {success && (<Success success='New burger added successfully'/>)}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className='btn mt-3' type='submit'>Add burger</button>

          
        </form>
      </div>
    </div>
  );
}