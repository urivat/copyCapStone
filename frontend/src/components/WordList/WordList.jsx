import React, { useState } from 'react'
import './WordList.css'
import BootCard from '../BootCard/BootCard'

const WordList = (props) => {

    const [collected , setCollected] = useState([]);

    const {allWords} = props
    const mappedWords = allWords.map((word) =>  
    <span key={word.id}>
    <BootCard word= {word}/>
    </span>)
    
   return ( 
   <div className='container'>
        <h3>Add one to your collection</h3>
        <div>{mappedWords}</div>
        
    </div>);
}
 
export default WordList;

   
//send words from app component to here as well as my word component and map the two together to create a list of words to have that access. 
//can create the jsx design in the word component. we will also need a card component to have the words maped to as well. 