import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Mpesapayment = () => {

    const {product} = useLocation().state || {};

    const[phone, setPhone] = useState("");
    const[message, setMessage] = useState("");

    const submit = async (e) => {
        e.preventDefault()
        setMessage("Please wait as we process your payment...")
        const data= new FormData();
        data.append("phone", phone);
        data.append("amount", product.product_cost);
        const response = await axios.post("https://Robiko.pythonanywhere.com/api/mpesa_payment", data)

        setMessage(response.data.message)
    }
  return (
    <div className='row justify-content-center mt-3'>
        <h1 className='text-success'>Lipa na M-pesa</h1>

        
        <div className='col-md-6 card shadow p-3'>
            <b className='text-info'>{message}</b>

            {product.product_photo}
            
            <h4>Product Name: <span className='text-primary'>{product.product_name}</span></h4>
            <form onSubmit={submit}>
                
                <h4>Price of the Product: <span className='text-primary'>KES {product.product_cost}</span></h4>
                <input
                type="number"
                placeholder='Enter your phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}

                className='form-control'/>

                {phone}
                <br/>
                <br/>

                <button className='btn btn-success'>Make Payment</button>



            </form>
        </div>
      
    </div>
  )
}

export default Mpesapayment;


