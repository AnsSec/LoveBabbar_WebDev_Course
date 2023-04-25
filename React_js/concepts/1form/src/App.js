import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event) {
  //   // console.log("printing first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changelastNameHandler(event) {
  //   // console.log("Printing last name")
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState(  {firstName: "", lastName: "", email:"", comments:"" } );

  console.log(formData)

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("Finally printing the entireform ka data ........")
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <br/>
        <input
          type="text"
          placeholder='first name'
          onChange={changeHandler}  
          name="firstName"
          value={formData.firstName}
        />

        <br/>
        <br></br>

        <input
          type="text"
          placeholder='last name'
          onChange={changeHandler} 
          name="lastName" 
          value={formData.lastName}
          
        />

        <br/>
        <br/>
        <input
          type="email"
          placeholder="Enter your email here"
          onChange={changeHandler}
          name="email"
            value={formData.email}
          />
        <br /><br />

        <textarea name="comments" value={formData.comments} placeholder='enter your comments' onChange={changeHandler}
        
        />
      </form>
    </div>
  );
}

export default App;
