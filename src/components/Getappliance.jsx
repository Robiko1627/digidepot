import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ImageCarousel from './Carousel';
import Navbar from './Navbar';

const Getappliance = () => {

//create hooks
   const[appliance, setAppliance] = useState([]); //this hook contain an empty array
   const [loading, setLoading] = useState("");
   const [error, setError] = useState("");

   //create a navigate hook
   //this hook will navigate us to the mpesa payment component
   const navigate = useNavigate();

   //specify the location of the image
   const img_url = "https://Robiko.pythonanywhere.com/static/images/"

   //create a function that will handle get operation(method)
   const getappliance = async () =>{
    //update the loading hook with a message
    setLoading("Adding appliances...")
    try{
      //handle response given from python anywhere
      const response = await axios.get("https://Robiko.pythonanywhere.com/api/getappliance")
      //update the products hook with the products received from the api

      setAppliance(response.data);

      //set loading hook back to default
      setLoading("");
      
    }
    catch(error){
      //set loading hook back to default
      setLoading("");
      //project an error message

      setError("There was an error encountered")

    }
   }//end getproducts function


   //below we shall use the useEffect hook to call our get products function
   //useEffect is a hook that applies new effects or changes after an action has happened

   useEffect(
    () => {getappliance()}, [])//dependency, this hook contains an empty array dependecy to ensure that it only runs once when the component(getproducts functon) renders
   
  return (
    <div className='row'>
      <Navbar/>
    
      <ImageCarousel/>
      <h3 className='text-info mt-3'>Available Appliances</h3>

        {/* bind loading and error */}
        {loading}
        {error}

        {appliance.map((appliance)=>(
          <div className='col-md-3 justify-content-center mb-4'>
          {/* Below div will carry the card that contains a single product */}
          <div className='card shadow'>
            <img src={img_url + appliance.appliance_photo} className='product_img mt-4' alt=''/>

            {/* Below is the card body */}
            <div className='card body'>
              <h5 className='mt-2 text-danger'>{appliance.appliance_name}</h5>
              <p className='text-muted'>{appliance.appliance_description.slice(0,50)}</p>
              <b className='text-warning'>Kes {appliance.appliance_cost}</b> <br/>
              <button className='btn btn-success' onClick={() =>navigate("/mpesapayment", {state : {appliance}})}>Buy Now</button>
            </div>

          

          </div>
        </div>
              
              
            
      ))}

        <Footer/>
    </div>
      
  )
}

export default Getappliance;
