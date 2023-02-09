import React, { useState } from "react";

const Countryddl = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("in");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    props.onCountryChange(event.target.value);
  };

  return (
    <div>
      <label>Select a Country:</label>
      <select value={selectedCountry} onChange={handleChange}>
        <option value="in">India</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
      </select>
    </div>
  );
};

export default Countryddl;
















// import React, { useState } from 'react';
// import News from './News';


// const DropDown = (props) => {
//   const [selectedCountry, setSelectedCountry] = useState(selectedCountry.value);
//   console.log(selectedCountry)



//   return (
//     <>

//     <select  value={selectedCountry} onChange={(event) => setSelectedCountry(event.target.value)}>
//       <option value="us" >United States</option>
//       <option value="tr" >Turkey</option>
//       <option value="in" >India</option>
//     </select>
//     <News country={selectedCountry} />
//     </>
//   );
  
// };
// export default DropDown;











// // import React, { useState } from "react";
// // import Select from "react-select";
// // import News from "./News";

// // export default function DropDown() {
// //     const [selectedValue, setSelectedValue] = useState('tr');
// //     const options = [
// //         { value: "us", label: "United State" },
// //         { value: "in", label: "India" },
// //         { value: "tr", label: "Turkey" }
// //     ];

// //     const handleChange = selectedOption => {
// //         setSelectedValue(selectedOption.value);
// //     };

// //     return (
// //         <div style={{ margin: 20, width: 100 }}>
// //             <Select
// //                 options={options}
// //                 placeholder="Select country"
// //                 onChange={handleChange}
// //             />
// //             {selectedValue && <News selectedValue={selectedValue} />}
// //         </div>
// //     );
// // }