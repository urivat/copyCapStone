import React from 'react'
import { useNavigate } from "react-router-dom";



 function ButtonCard(props) {
        const {onClick} = props;
        const navigate = useNavigate()

        



  return (
    <div>
    <button className='btn btn-primary' onClick={onClick}>Study</button>
    <a className='btn btn-secondary' onClick={() => navigate('/user/study')}>Add</a>
    </div>
  )
}
export default ButtonCard;