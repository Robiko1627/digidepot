import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Signin = () => {
    const[email, setEmail] = useState("");
    const[password,setPassword]= useState("");
    const[loading, setloading]=useState("");
    const[error, setError]=useState("");
    
    const navigate = useNavigate()
    const submit = async(e) =>{
      e.preventDefault()

      setloading("Please wait as we log you in...")


      try{
        const data = new FormData();

        data.append("email", email);
        data.append("password", password);

        //access the post method from the library
        const response = await axios.post("https://Robiko.pythonanywhere.com/api/addappliance", data)
        //set the loading hook back to empty
        setloading("")

        if (response.data.user){
          // save the details of the user into the local storage
          localStorage.setItem("user", JSON.stringify(response.data.user));
          // redirect the person to another page
          // use the navigate hook to do this
          navigate("/")
        }
        else{
          //the user was not found so show a message
          setError(response.data.Message)
        }
      }
      catch(error){
        //set the loading hook back to empty
        setloading("")
        setError(error.response.data.Message)
        //setError("User is not found")
        
      }

        






      
    }
     


  return (
    <div className="row justify-content-center mt-5">
      <Navbar/>  
      <div className="card shadow col-md-6 p-4">
        <h2>Sign In</h2>
        <form onSubmit={submit}>
          {loading}
          {error}
        <input
        type="email"
        placeholder='Enter Your Email Address here'
        className='form-control'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/> 
        <br/>

        {email}

        <input
        type ="password"
        placeholder='Enter the password'
        className='form-control'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
        
        />
        <br/>
        {password}


        <button type="submit" className='btn btn-success'>Sign In</button>



        </form>

        
      </div>
      <Footer/>
    </div>
  )
}

export default Signin;
