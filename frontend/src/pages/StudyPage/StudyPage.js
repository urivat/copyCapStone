import React, { useState, useEffect } from "react";
import Containers from "../../components/Containers";
import "./StudyPage.css";
import LearnedWord from "../../components/LearnedWord/LearnedWord";
import WordList from "../../components/WordList/WordList";


function StudyPage(props) {
  const { userWords, newLearned } = props;


  const [randomWord, setRandomWord] = useState([])
  
useEffect(() => {
      function randomGenerator(){
        let i = Math.floor(Math.random() * userWords.length)
        setRandomWord(userWords[i])
        } randomGenerator()

}, [userWords])
  
  // const { wordId } = useParams();
  // const [learned, setLearned] = useState(Boolean);
  // const [wordData, setWordData] = useState([]);
  // const [loading , setLoading] = useState([])


  // useEffect(() => {
  //   async function wordByID() {
  //   let res = await axios
  //   .get(`http://127.0.0.1:8000/api/word/${wordId}/`);
  //   console.log(res.data);
  //     setWordData(res.data)
  //     setLoading(false)
  // } wordByID

  // }, [wordId]);

  // const navigate = useNavigate();

  // function getId(){
  //   let filtered = userWords.filter((el) => {el.id === wordId
  //     return el.id
  //   })
  //   return navigate(`user/study/${filtered}`)
  // }
  
    


  
  return (
    <div>
      <div>
        <h1>Study Cards</h1>
        <LearnedWord userWords={userWords} randomWord={randomWord} />
        <div>
          <div>
            <img
              src="https://jooinn.com/images/ancient-book-7.png"
              alt="old books"
            />
          </div>

          <div>
            <Containers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPage;
//increment count up.
