import React from "react";
import { Formik, Form, Field } from "formik";

const UseHook = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        password: "",
        gender: "male",
        date: "",
        income:"0",
        about:"",
        social:{
            facebook:"",
            twitter:""
        }
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <br />
        <label htmlFor="">Name</label>
        <Field name="name" type="text" />
        <br />
        <br />
        <label htmlFor="">Phone</label>
        <Field name="phone" type="number" />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <Field name="password" type="password" />
        <br />
        <br />
        <label htmlFor="">Gender</label>
        <br />
        <br />
        <label htmlFor="">Male</label>
        <Field name="gender" value="male" type="radio" />
        <label htmlFor="">Female</label>
        <Field name="gender" value="female" type="radio" />
        <br />
        <br />
        <label htmlFor="">Date</label>
        <Field name="date" type="date" />
        <br />
        <br />
        <label htmlFor="">Income:</label>
        <Field name="date" as="select" >
        <option value="0">$ 000</option>
            <option value="0">$ 5000</option>
            <option value="100000">$ 500</option>
            <option value="10000">$ 300</option>
            <option value="1000">$ 200</option>
        </Field>
        <br />
        <br />
        <label htmlFor="">About:</label>
        <Field name="about" as="textarea" />
        <br />
        <br />
        <label htmlFor="">Social:</label>
        <br />
        <br />
        <label htmlFor="">Facebook:</label>
        <Field name="social.facebook" type="text" />
        <br />
        <br />
        <label htmlFor="">Twitter</label>
        <Field name="social.twitter" type="text" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UseHook;
