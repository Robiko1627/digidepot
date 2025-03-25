import { Link } from 'react-router-dom';
//import the useState hook library
import { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';
const Signup = () => {
  //initialize the hooks
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password,setPassword]= useState("");
  const[phone,setPhone]= useState("")
  //create 3 hooks that will capture the state of our application when the signup button is clicked
  const[loading, setloading]=useState("");
  const[error, setError]=useState("");
  const[success, setSuccess]=useState("");



  //We create a function below that will handle the data submitted on the form all the way to the database
  const submit = async (e) =>{
    //asynckeyword- shows processes taking place in the background
     //below we shall prevent our site from entire reload when the detelis are submitted 
     //loading

      e.preventDefault();

      //update the loading hook with a message that will be displayed when auser clicks on the signup button
      setloading("Please wait as we upload your details")

      try{
        //we create an object that will hold all the data on hooks(username,email,password,phone)
        const data = new FormData();
        //below we append the different derails onto mout object
        data.append("username", username);
        data.append("email", email);
        data.append("password", password);
        data.append("phone", phone);

        //use the axios library that will help us interact with the http requests
        //this particular method we shall use is the post method

        const response = await axios.post("http://Robiko.pythonanywhere.com/api/signup", data)
        // after data has been inserted successfully, set the loading hook to empty
        setloading("");

        //Set the success hook with the message  get from a successful registration
        setSuccess(response.data.Message)

        console.log(response)
        //clear all the input fields on the html form
        //return the form to default
        setUsername("");
        setPassword("");
        setEmail("");
        setPhone("");


      }
      catch(error){
        //update the loading hook to empty
        setloading("");
        //update the error with the error message
        //setError("Unfornately, something went wrong")
        setError(error.message)
      }
  }
   
    






  return (
    <div className="row justify-content-center mt-4">
      <Navbar/>
        <div className="col-md-6 card shadow p-4"> 
          <h2>Sign Up</h2>
          <form onSubmit={submit}>
              {loading}
              {success}
              {error}
              <input type="text" 
              placeholder="Enter The Username" 
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required/>  <br/>

              {/* {username} */}


              <input
              type="email"
              placeholder="Enter Email Address"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>  <br/>

              {/* {email} */}
              


              <input
              type="password"
              placeholder="Enter The Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>  <br/>

              {/* {password}  */}

              <input      
              type="text"
              placeholder="Enter Phone Number"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required/>  <br/>  <br/>

              {/* {phone} */}

              <button type ="submit" className="btn btn-primary">Sign Up</button>

          </form>

        <p>Already have an account? <Link to={"/signin"}>Sign in</Link></p> 
      </div>
      <Footer/>
    </div>
  )
}

export default Signup;
