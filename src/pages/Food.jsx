import React from 'react';

import { useState,useEffect } from 'react';
import axios from 'axios';
import Landing from '../assets/food2.jpg'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from '../components/Navbar';

const Food = () =>{

  // Hooks
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  
  //create navigate hook

  const navigate = useNavigate();

  //location of the image
  const img_url = "https://ishaqibrahim.pythonanywhere.com/static/images/"

  // create get function
  const getfood = async()=>{
    // update loading hook
    setLoading("Please wait as we retrieve our wide variety of products...")

    try{
      // handle response from pythonanywhere
      const response = await axios.get("https://ishaqibrahim.pythonanywhere.com/api/getfood")

      // update product hook with products from api
      setFoods(response.data)

      // set the loading hook back to default
      setLoading("");
    }
    catch(error){
      // set the loading hook back to default
      setLoading("");

      // project an error message
      setError("There was an error encountered")
    }
  }
  // end of get products function

  // calling our get products function
  useEffect(
    ()=> {getfood()},[]
  )

  // Filtered based on search
  const [search, setSearch] = useState("");
  
  const filtered_food = foods.filter((item) =>
    item.food_name.toLowerCase().includes(search.toLowerCase())||
    item.food_description.toLowerCase().includes(search.toLowerCase()));

  return (

    <div>
      
      <div className='position-relative vh-100 overflow-hidden' >
        <img src={Landing} alt="" className='d-block w-100 h-100 object-fit-cover'/>
      </div>
    
    <div className="row">

    
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* {search} */}
      </div>

      {/* bind loading and error */}
      {loading}
      {error}
    
      {filtered_food.map((food)=> (
        <div className="col-md-3 justify-content-center mb-4">
        {/* below div will carry the card that contains a single product */}
        <div className="card shadow">
            <img src={img_url + food.food_photo} className="product_img mt-4 " alt="" />

            {/* below is the card body */}
            <div className="card-body">
              <h5 className='mt-2'>{food.food_name}</h5>
              <p className='text-muted'>{food.food_description.slice(0, 100)}</p>
              <b className='text-warning'>Ksh{food.food_cost}</b> <br />
              <button className='btn btn-success' onClick={() => navigate("/Mpesapayment", {state : {food}})} >Purchase Now</button>
            </div>
        </div>
        </div>
      ))}
    

    </div>


    </div>
  );
};

export default Food;
