import React, {useState} from "react";
import { useParams } from "react-router-dom";
import ButtonCard from "./ButtonCard";




const BootCard = (props) => {
    const {word} = props
    
    const [showList, setShowList] = useState(false)

   

    const toggleState = () => {
      if (showList === true){
        setShowList(false)
      }else {
        setShowList(true)
      }
    
    }




    return ( 
        <div className="card text-white bg-dark mb-3" style={{width: 50 + 'rem'}}>
            <div className="card-body">
            <h5 className="card-title">{word.name}</h5> 
            <p className="card-text">{showList ? word.definition : ''}</p>
            <ButtonCard onClick={toggleState}/>
            </div>
        </div>
     );
}
 
export default BootCard;