// App.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./components/formInput";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    phone: "",
    country: "",
    city: "",
    panNumber: "",
    aadharNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    navigate("/profile", { state: { values } });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <div className="img">
        <h2 className="img_heading" data-heading="WELCOME TO CSI PROJECT1">
          Welcome To CSI PROJECT1
        </h2>
        <img
          src="/img.jpg"
          alt=""
          height="100%"
          width="100%"
          className="img_img"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <FormInput
          name="firstname"
          type="text"
          placeholder="First Name"
          errorMessage="First Name should contain only characters"
          label="First Name"
          pattern="^[A-Za-z ]{1,25}$"
          required
          onChange={onChange}
        />
        <FormInput
          name="lastname"
          type="text"
          placeholder="Last Name"
          errorMessage="Last Name should contain only characters"
          label="Last Name"
          pattern="^[A-Za-z ]{1,25}$"
          required
          onChange={onChange}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          errorMessage="Enter a valid email address"
          label="Email"
          pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$"
          required
          onChange={onChange}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          errorMessage="Password should contain alphanumeric values, special characters, and be at least 8 characters long."
          label="Password"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
          onChange={onChange}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          errorMessage="Passwords do not match"
          label="Confirm Password"
          pattern={values.password}
          required
          onChange={onChange}
        />
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          errorMessage="Username should contain only characters"
          label="Username"
          pattern="^[A-Za-z0-9_]{1,25}$"
          required
          onChange={onChange}
        />
        <FormInput
          name="phone"
          type="tel"
          placeholder="123-456-7890"
          errorMessage="Enter a valid phone number in the format 123-456-7890"
          label="Phone Number"
          pattern="\d{3}[-.\s]?\d{3}[-.\s]?\d{4}"
          required
          onChange={onChange}
        />

        <FormInput
          name="city"
          type="text"
          placeholder="City"
          errorMessage="Please enter your city"
          label="City"
          required
          onChange={onChange}
        />
        <FormInput
          name="country"
          type="text"
          placeholder="Country"
          errorMessage="Please enter your country"
          label="Country"
          required
          onChange={onChange}
        />
        <FormInput
          name="panNumber"
          type="text"
          placeholder="Pan Number"
          errorMessage="Please enter a valid PAN number"
          label="Pan Number"
          pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
          required
          onChange={onChange}
        />
        <FormInput
          name="aadharNumber"
          type="text"
          placeholder="Aadhar Number"
          errorMessage="Please enter a valid Aadhar number"
          label="Aadhar Number"
          pattern="[0-9]{12}"
          required
          onChange={onChange}
        />
        {/* Add more FormInputs for Country, City, Pan Number, Aadhar Number */}
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
