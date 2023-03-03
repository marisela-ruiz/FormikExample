import React from "react";
import './index.css';
import {useFormik} from 'formik'


function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.pswField) errors.pswField = 'Field required';
      if (!values.emailField) {
        errors.emailField = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email';
      }
      return errors;   
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}
        <div>Submit</div>
        <button name="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
