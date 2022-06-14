import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const {word , answerCount } = props

  const [showList, setShowList] = useState(false)


    const toggleState = () => {
      if (showList === true){
        setShowList(false)
      }else {
        setShowList(true)
      }
    
    }

    

const navigate = useNavigate()

  return (
    <div style={{}}>
       <Card variant="outlined"
        style={{
          width: 400,
          backgroundColor: "white",
          marginBottom: '1em'
          
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 20 }}
            color="inherit"
            gutterBottom
          > 
            {word.name}  {answerCount}  
          </Typography>
          <Typography variant="h5" component="h2">
            {showList ? word.definition : ' '}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' size="small"  onClick= {toggleState}  >Study</Button>
          <Button variant="text" size="small" onClick={() => navigate('/user/study')}>learn</Button> 
        </CardActions>
      </Card>
    </div>
  );
}
export default Cards
//*If i add a component call here that just displays information so that i can reuse these cards in multiple situations.*\\
// what if I used a param hook to route navigate to a certain index so that card would be attached to a specific index.