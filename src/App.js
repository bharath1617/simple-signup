import React,{useState} from 'react';
import {FaFacebook, FaGoogle,FaTwitter} from 'react-icons/fa'
import './App.css';
import imgs from './#03.svg'
function App() {
  let [name, setName] = useState("");
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmpassword] = useState("");
  let [suss, setSucessor] = useState("");
  let [err, setError] = useState("");
 
  const checkdetails = () =>{
      if(name == "" || mail == "" || password == "" || confirmPassword == ""){
        setSucessor("")
        setError("Error: Please make sure your all the details are filled!")
      }
      else if(password !== confirmPassword){
        setSucessor("")
        setError("Error: Please make sure your password and confirm password match!")
      }
      else{
        setError("")
        setSucessor("Successfully Created!")
      }
  }

  return (
    <div className='full'>
    <div className='desighside'>
      <p className='leftext'>Find 3D Objects, Mockups and Ilustration here</p>
      <img src={imgs}></img>
    </div>  
    <div className="App">
      <h1>Create Account</h1>
      <div className='container'>
      <div className='links'>
        <div className='golink'>
         <FaGoogle className='google'></FaGoogle>
         <p>Sign up with Google</p>
         </div>
         <div className='falink'>
         <FaFacebook className='facebook'></FaFacebook>
         <p>Sign up with facebook</p>
         </div>
      </div>
      <h1 className='or'>-OR-</h1>
      <div className='inputs'>
        <input className='name' type='text' placeholder='Full Name' onChange={(e)=> setName(e.target.value)}></input>
        <input className='mail' type='email' placeholder='Email Address' onChange={(e)=> setMail(e.target.value)}></input>
        <input className='pass' type='text' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}></input>
        <input className='conPass' type='text' placeholder='Confirm Password' onChange={(e)=> setConfirmpassword(e.target.value)}></input>
        <button type='submit' onClick={checkdetails}>Create Account</button>
      </div>
      <p className='error'>{err}</p>
      <p className='success'>{suss}</p>
      </div>
    </div>
    </div>
  );
}

export default App;
