import axios from 'axios';
import React from 'react';
import { useState } from "react";


  // create hooks that will enable to store different data
  



const Addappliance = () => {

  const [appliance_name, setApplianceName] = useState("");
  const [appliance_description, setApplianceDescription] = useState("");
  const [appliance_cost, setApplianceCost] = useState("");
  const [appliance_photo, setAppliancePhoto] = useState("");

      // create three additional hooks to manage the state of your application when a person 
    // clicks the add product button
    const [loading, setLoading] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


       // create a fucntion that will handle the submit event
       const submit = async (e) =>{
        e.preventDefault()
        //update the loading hook with a message
        setLoading("Please wait as we upload your product details")

          // create a form data variable that will hold all the details from the hooks
        const data = new FormData()
        // append the information from the hooks
        data.append("appliance_name", appliance_name);
        data.append("appliance_description", appliance_description);
        data.append("appliance_cost", appliance_cost)
        data.append("appliance_photo", appliance_photo)
            

        try{
          const response = await axios.post("https://Robiko.pythonanywhere.com/api/addappliance", data);
          //set loading back to default
          setLoading("")

          //update ur message hook
          // update your message hook with a message if the details have beed saved successfully
        // into the database.
        setMessage("Product Added Successfully.")
        // clear the data on the other four hooks
        setApplianceName("");
        setApplianceDescription("");
        setApplianceCost("");
        setAppliancePhoto("");
        }

        catch(error){
          setLoading("")
          setError("Failed to add product.Please try again.")
        }}

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 shadow p-4">
        <form onSubmit={submit}>
          <h2>Add Appliance</h2>

          {loading}
         
          {error}
          {message}

          <input
          type="text"
          placeholder="Enter The Appliance Name"
          value={appliance_name}
          onChange={(e) => setApplianceName(e.target.value)}
          className="form-control"
          required/> <br/>

          


          <textarea 
          placeholder="Enter the description of the appliance"
          value={appliance_description}
          onChange={(e) => setApplianceDescription(e.target.value)}
          className="form-control"
          required></textarea> <br/>

          

          <input
          placeholder='Enter the price'
          value={appliance_cost}
          onChange={(e) => setApplianceCost(e.target.value)}
          className='form-control'
          required/> <br/>

            

          <label>Appliance Photo</label> <br/>
          <input type="file"
          className='form-control'
          accept="image/*"
          onChange={(e) => setAppliancePhoto(e.target.files[0])}
          required/> <br/>

          <button
           type="submit" 
           className='btn btn-danger'>Add Appliance</button>
        </form>

      </div>
    </div>
  )
}

export default Addappliance;
