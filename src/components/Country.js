import React,{useState} from 'react';
import Select from 'react-select';
// import News from './News';


const Countryddl = () => {

    const [selectedCountry,setSelectedCountry]=useState('')
    const countrylist=[
        {
            value: 'us',
            label: "United States"
        },
        {
            value: 'in',
            label: "India"
        },
        {
            value: 'tr',
            label: "Turkey"
        }
    ]
    const ddlHandler = (countrylist) => {
        setSelectedCountry(countrylist.value);
        console.log(selectedCountry)
    }

  return (
    <div>
        <Select options={countrylist} onChange={ddlHandler}/>
        {/* <News country={selectedCountry}/> */}
    </div>
  )
}

export default Countryddl