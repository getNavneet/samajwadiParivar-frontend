import React from 'react';
import Button from "../../Button";
import { useDispatch } from "react-redux";
import { setTrue,updateString } from '../Store'; // Import actions


  const GreetingCard = ({image,title,id}) => {

    const dispatch = useDispatch();
    const handleButtonClick = (cardId) => {
      // setSelectedCardId(cardId);
      dispatch(setTrue()); // Set the boolean state to true  
      dispatch(updateString(cardId)); // Update the string value
      // dispatch(setFalse()); 
    };

    return (
      <>
      <div className="flex flex-col items-center overflow-hidden border border-gray-300 rounded-lg shadow-md w-full max-w-lg">
   
      <div className="relative w-full bg-gray-100">
        <img
          src={image}
          alt="Card"
          className="w-full h-auto object-contain"
        />
      </div>
      <Button
        className="w-full px-4 py-2 text-center m-1 transition-colors bg-gray-50 border-t border-gray-300"
        onClick={() => handleButtonClick(id)}
      >
        {title}
      </Button>

    </div>
    </>
    );
  }
  
  export default GreetingCard;
  


