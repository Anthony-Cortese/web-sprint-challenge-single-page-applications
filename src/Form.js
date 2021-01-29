import React from 'react';

export default function PizzaForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

return (
   <form className="form container" onSubmit={onSubmit}>
       <div className="form-group submit">
           <h1>BUILD YOUR OWN PIZZA</h1>

           <button disable={disabled}>Submit Order</button>

           <div className='errors'>
               <div>{errors.name}</div>
               <div>{errors.email}</div>
               <div>{errors.size}</div>
               <div>{errors.sauce}</div>
           </div>
       </div>

       <div className="form-group inputs">
            <h2>Name</h2>
            <label>
                Name
                <input 
                value={values.name}
                onChange={onChange}
                name='name'
                type="text"
                
                />
            </label>

            <label>
                Email
                <input 
                value={values.email}
                onChange={onChange}
                name='email'
                type="text"
                
                />
            </label>
            
            
            <h2>Choice of Size</h2> 
    
            <label>
                <select onChange={onChange} value={values.size} name="size">
                    <option value="">Select</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                </select>
            </label>

            <label>
                Original Red
                <input 
                 type="radio"
                 name="sauce"
                 value="original"
                 checked={values.sauce}
                 onChange={onChange}
                />
            </label>

            <label>
                Garlic
                <input 
                 type="radio"
                 name="sauce"
                 value="original"
                 checked={values.sauce}
                 onChange={onChange} 
                 />
            </label>
            
            <label>
                Alfredo
                <input 
                 type="radio"
                 name="sauce"
                 value="original"
                 checked={values.sauce}
                 onChange={onChange} 
                 />
            </label>
       </div>

       <div className="form-group checkboxes">
           <h2>Add Toppings</h2>
           
           <label>Pepperoni</label>
           <input
           type='checkbox'
           name='pepperoni'
           checked={values.pepperoni}
           onChange={onChange} 
           />

           <label>Olives</label>
           <input
           type='checkbox'
           name='olives'
           checked={values.olives}
           onChange={onChange} 
           />

           <label>Onions</label>
           <input
           type='checkbox'
           name='onions'
           checked={values.onions}
           onChange={onChange} 
           />

           <label>Peppers</label>
           <input
           type='checkbox'
           name='peppers'
           checked={values.peppers}
           onChange={onChange} 
           />
       </div>
   </form> 
)
}

        







