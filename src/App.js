import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom"
import Form from './Form'
import Home from './Home'
import * as yup from 'yup'
import schema from './formSchema'
import axios from "axios";

const initialFormValues = {
  name: '',
  email: '',
  //DROPDOWN
  size: '',
  //BUTTONS
  sauce: '',
  //Checkboxes
  pepperoni: '',
  olives: '',
  peppers: '',
  onions: '',
}
const inititialFormErrors = {
  name: '',
  email: '',
  sauce: '',
  size: '',
}

const initialPizza = []
const initialDisabled = true

export default function App() {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(inititialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const newPizza = () => {
    axios
    .get('ttp://buddies.com/api/friends')
    .then((res) => {
      setPizza(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const postNewOrder = newOrder => {
    axios
    .post('ttp://buddies.com/api/friends', newOrder)
    .then((res) => {
      setPizza([res.data, ...pizza]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const inputChange = (name,value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() =>{
      setFormErrors({
        ...formErrors,
        [name]: '',

      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.email.trim(),
      sauce:formValues.sauce.trim(),
      toppings: ['pepperoni', 'olives', 'peppers', 'onions'].filter((topping) => formValues[topping])
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    newPizza()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then((valid) =>{
      setDisabled(!valid)
    })
  }, [formValues])


  
  
  
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Form">Pizza Form</Link>
        </div>
      </nav>

      <Route path="/">
        <Home />
      </Route>

      <Route path={"/Form"}>
        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}

        />
      </Route>
   
    </div>
  );
}

