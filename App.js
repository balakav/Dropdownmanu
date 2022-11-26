import React, { useState } from 'react'
import Select from 'react-select'
import './Dropdown.css'

function Dropdown() {
  var colors=[
    {
       value:1,
       label:"red"
    },
    {
       value:2,
       label:"blue"
    },
    {
       value:3,
       label:"orange"
    },
    {
       value:4,
       label:"Lavender"
    },
    {
       value:5,
       label:"Teal"
    },
    {
       value:6,
       label:"Purple"
    },
    {
       value:7,
       label:"white"
    },
    {
       value:8,
       label:"green"
    },
    {
       value:9,
       label:"pink"
    },
  ];
  var [setcolor,finalvalue]=useState(colors.label);
  var finalhandle = (e) => {
    finalvalue(e.label);
  }
  return (
    <>
    <center><h1>COLOUR CHANGER</h1></center>
      <div className='h'>
      {/* <style>{'h {background-color:'+setbgcolor+';}'}</style> */}

        <Select options={colors} onChange={finalhandle} className="sl">
        </Select>
      </div>
      <br/><br/><br/>
      <center>
        <h3> {setcolor}</h3>
        <div className='drop'>
            <style>{'.drop {background-color:'+setcolor+';}'}</style> 
        </div>
      </center>
    </>
  )
}

export default Dropdown;