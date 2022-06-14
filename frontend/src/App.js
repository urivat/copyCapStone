// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./hooks/useAuth";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserPage from "./pages/UserPage/UserPage";
import StudyPage from "./pages/StudyPage/StudyPage";
import Definition from "./pages/DefinitionPage/Definition";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [user, token] = useAuth();
  const [userWords, setUserWords] = useState([]);
  const [allHomeWords, setHomeWords] = useState([]);
  const [learnedWords, setLearnedWords] = useState([]);
  const [loading, setLoading] = useState(true);
  // function reference.
  

  useEffect(() => {
    const getAll = async () => {
      try {
        let res = await axios.get("http://127.0.0.1:8000/api/word/", {
          headers: {
            Authorization: "Bearer " + token,
            
          
          },
        
          
        });
        setUserWords(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAll();
  }, [token]);

  useEffect(() => {
    const getWords = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/word/all/",
          {}
        );
        setHomeWords(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getWords();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage allWords={allHomeWords} />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          exact element={
            <PrivateRoute>
              <UserPage userWords={userWords} user={user} />
            </PrivateRoute>
          }
        />
        <Route
          path= '/user/study'
          element={
            <PrivateRoute>
              <StudyPage
                userWords={userWords}
                learnedWords={setLearnedWords}
             
              />
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search/:word" element={<Definition />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// const [words , setWords] = useState([{  //will hold words coming in to an array.
//   name: 'depart' ,  // intended this to be a sample word
//   definition: 'leave, especially in order to start a journey',
// }])
// const [User, setUser] = useState()

// useEffect(() => {
//   const getAllWords = () => axios.get('http://127.0.0.1:8000/api/word/all/').then((res) => {
//     const ResponseWords = res.data
//     setWords(ResponseWords)
//   }, getAllWords())         //does this need a cleanup function as of now its coming on the first render only.
// }, [words])

// const wordArraySpread = (entry) => {
//   let newWord = [...words , entry]
//    setWords(newWord)// this will be for creating/adding words to a card.

// }
