import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collection from "../../components/Collection/Cards";
import Button from "@material-ui/core/Button";
import useAuth from "../../hooks/useAuth";


function Definition() {
  const [user , token] = useAuth();
  const { word } = useParams();
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchDefinition = async () => {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(res.data);
      setWordData(res.data[0])
      setLoading(false)
    };
    fetchDefinition();
  }, [word]);
  
const handleSubmit = (event) => {
  event.preventDefault();
  const axios = require('axios');
  const data = JSON.stringify({
    "id": 1,
    "name": wordData.word,
    "definition": wordData.meanings[0].definitions[0].definition,
    "user_id": 1
  });
  
  const config = {
    method: 'post',
    url: 'http://127.0.0.1:8000/api/word/',
    headers: { 
      'Authorization': "Bearer " + token, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });}
  
         

        
      



  

  return (
    <form className="container" onSubmit={handleSubmit}>
    <label>Definition </label> 
    <div>
    <div>
      {loading ? 'loading' : `${wordData.word} `} <br/>
      {loading ? 'loading' : wordData.meanings[0].definitions[0].definition}
    </div>
      <Button type="submit"  variant="contained" size="small" color="inherit">Add</Button>
    </div>
    </form>
      
        

      
   
  );
  }

export default Definition;

  // const addToCollection = async (event) => {
  //   event.preventDefault()
  //   const resp = await axios.post("http://127.0.0.1:8000/api/word/", {
  //     headers: {
  //           Authorization: "Bearer " + token,
  //   }, body: {
  //       name: 'wordData.word', 
  //       definition: 'wordData.meanings[0].definitions[0].definition',
  //       user_id: user.id 
  //   } , }); console.log(resp.data)
  //           setAddWord(resp.data)
            
    
  //     };
  //{/* {loading ? 'loading' : wordData.meanings[0].definitions.map((def , index) => { return <p key={index}> {def.definition}</p>}) } */}//   const handleSubmit = (event) => {
//     event.preventDefault();
//     try {axios.post("http://127.0.0.1:8000/api/word/", {
//      headers: {
//        Authorization: "Bearer " + token,
//      },
//      data: {
//        id: 1,
//        name: 'light',
//        definition: 'Visible electromagnetic radiation.',
//        user_id: 1
//      } 
//    }).then((res) => {
//      console.log(res.data)
//      setNewWord(res.data)
//     })} catch (error) {
//       console.log(error)
//     } 
//  }