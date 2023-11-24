import React from "react";   
import { useFormik } from "formik";    
import * as Yup from 'yup'; 

//Formik
//Form
//Field
//ErrorMeassage

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};


const validationSchema = Yup.object({
  name: Yup.string().required('Required!! Please Fill Properly'),
  email: Yup.string()
  .email('Please Enter Correct Format Of Email')
  .required('Required!!!!'),
  channel: Yup.string().required("Required!!!!")
});

const Youtube = () => {
  //useFormik is used for managing form data
  //handleChange method is formik helper which is used to upadate form object
  ////  


  const formik = useFormik({
    //  //
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });

  // console.log("Formik values", formik.values)
  return (
    <div className="App">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Youtube;
