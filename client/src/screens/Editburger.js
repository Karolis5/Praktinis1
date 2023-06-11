import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBurger , getBurgerById } from "../actions/burgerActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Editburger({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getBurgerbyidstate = useSelector((state) => state.getBurgerByIdReducer);

  const { burger, error, loading } = getBurgerbyidstate;

  const editBurgerstate = useSelector((state) => state.editBurgerReducer)
  const {editloading , editerror , editsuccess} = editBurgerstate;

  useEffect(() => {

    if(burger)
    {
        if(burger._id==match.params.burgerid)
        {
            setname(burger.name)
            setdescription(burger.description)
            setcategory(burger.category)
            setsmallprice(burger.prices[0]['small'])
            setmediumprice(burger.prices[0]['medium'])
            setlargeprice(burger.prices[0]['large'])
            setimage(burger.image)
        }
        else{
            dispatch(getBurgerById(match.params.burgerid));
        }
        
    }
    else{
        dispatch(getBurgerById(match.params.burgerid));
    }



  }, [burger , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedburger = {
      _id : match.params.burgerid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };

    dispatch(editBurger(editedburger))
  }

  return (
    <div>
    
     

      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Edit burger</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (<Success success='burger details edited successfully'/>)}
        {editloading && (<Loading />)}

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
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
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
          <button  className="btn mt-3" type="submit">
            Edit burger
          </button>
        </form>
      </div>
    </div>
  );
}