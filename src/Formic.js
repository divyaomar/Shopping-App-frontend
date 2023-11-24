import React, { useState } from "react";

const Formic = () => {
const [inputs, setInputs] = useState({});

const handleInput = (event) => {
const name = event.target.name;
const value = event.target.value;
const type = event.target.type;
setInputs(values => ({...values, [name]: value, type}))


}
  
const handleForm = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs("");
}
  return (
    <form className="form" onSubmit={handleForm}>
      <div className="field">
        <label htmlFor="email">Email Address</label>
        <input id="email" 
        name="email" 
        type="email"
          value={inputs.email || ""}
          onChange={handleInput}
       />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" 
        name="password" 
        onChange={handleInput}
        type="password"
        value={inputs.password || ""}
         />
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    
    </form>
  );
};

export default Formic;
// import React, { useState } from "react";

// const Formic = () => {
//   const [inputs, setInputs] = useState([]);
//   const [inputType, setInputType] = useState({});

//   const handleInput = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     const type = event.target.type;
//     setInputs((values) => [...values, { name, value }]);
//     setInputType((types) => ({ ...types, [name]: type }));
//   };

//   const handleForm = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//     setInputs([]);
//   };

//   return (
//     <form className="form" onSubmit={handleForm}>
//       <div className="field">
//         <label htmlFor="email">Email Address</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={inputs.find((input) => input.name === "email")?.value || ""}
//           onChange={handleInput}
//         />
//       </div>
//       <div className="field">
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           value={inputs.find((input) => input.name === "password")?.value || ""}
//           onChange={handleInput}
//         />
//       </div>
//       <button type="submit" className="submit-btn">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Formic;

