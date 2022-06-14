import React, { useState } from "react";
import BootCard from "../BootCard/BootCard";


const LearnedWord = (props) => {
  const { userWords, randomWord} = props;
  console.log(userWords[0]);




  return( 
  <div>
     <BootCard word={randomWord} /> 
  </div>)
};

export default LearnedWord;

