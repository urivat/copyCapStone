import React from "react";
import {
  Container,
} from "@material-ui/core";
import WordList from "../../components/WordList/WordList";
import "./HomePage.css";

// The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
// The "token" value is the JWT token that you will send in the header of any request requiring authentication
//TODO: Add an AddCars Page to add a car for a logged in user's garage
const HomePage = (props) => {
  const {allWords} = props
  

  return (
    <Container maxWidth="sm" className="container">
      <div className="">
      <WordList allWords= {allWords}/>
      </div>
      
    </Container>
  );
};

export default HomePage;

// { wordData.meanings[0].definitions.map((def , index) => { return <p key={index}> {def.definition}</p>}) } */}

//  {/* <h3>Home Page for {user.username}</h3>
//         {word &&
//         word.map((word) => (
//           <span key={word.id}>
//             {word.name}: {word.definition}.<br/>
//           </span>
//         ))}*/}
