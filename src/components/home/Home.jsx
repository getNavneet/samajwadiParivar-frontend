import React from "react";
import HeroSection from "../hero/Hero";
import poster from "../../assets/hero.png"
import AllCardsGrid from "../cardHolder/AllCardsGrid"
import Button from "../../Button";
import { useDispatch } from "react-redux";
import {updateString } from '../Store';
import FormComponent from "../form/InputData";
import { useSelector } from "react-redux";

const Home=()=>{
  const dispatch = useDispatch();

  const templateId = useSelector((state) => state.appState.stringValue); //access template id, initially false value,empty string

  const handleButtonClick = () => {
    dispatch(updateString("member")); // Update the string value
  };
return(

<>
<HeroSection/>
<div className="w-full flex flex-col justify-center content-center  ">
<p className="mx-auto p-6 pb-0 text-2xl md:text-4xl  md:w-3/5 md:py-12 ">
"With a secular and democratic ideology, the <span className="bg-gradient-to-r from-red-500  to-green-500 bg-clip-text text-transparent  font-bold"> Samajwadi Party </span> believes in creating a socialist society, which works on the principle of equality."
</p>
<div className="flex justify-center align-middle content-center p-9 pt-4 ">
<Button 
className="w-5/6 md:w-3/6 p-3 font-bold shadow-2xl border-solid border-4 border-red-500 "
onClick={() => handleButtonClick()}
>
  Samajwadi member card
  </Button>
</div>
</div>



<AllCardsGrid/>


{ templateId &&(
<FormComponent/>
)
}
<div className="w-4/4 md:w-3/4 mx-auto  px-4 pt-14  flex justify-center items-center">
  <img src={poster} alt="Poster" className="max-w-full h-auto rounded-lg border-gray-300 border-2 shadow-lg " />
</div>
<p className="mx-auto p-6 pb-0 text-2xl md:text-4xl  md:w-3/5 md:py-12 ">
Send personalized New Year greetings to loved ones.  
Share creative cards on social media to spread the festive spirit.<br/>  <span className="bg-gradient-to-r from-red-500  to-green-500 bg-clip-text text-transparent  font-bold"> Happy New Year</span> 
</p>

</>
)


}

export default Home;