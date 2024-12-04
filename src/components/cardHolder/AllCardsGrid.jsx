import React from 'react';
import GreetingCard from './GreetingCard';
import newsp1t from "../../assets/newsp1template.png"
import newsp2t from "../../assets/newsp2template.png"
import newsp3t from "../../assets/newsp3template.png"
import newcommon1t from "../../assets/newcommon1template.png"
import newcommon2t from "../../assets/newcommon2template.png"


function AllCardsGrid() {

  const cardData = [
    { image: newsp1t, title: "use this template", id: "newsp1"  },
    { image: newsp2t, title: "use this template", id: "newsp2" },
    { image: newcommon2t, title: "use this template", id: "newcommon2" },
    { image: newsp3t, title: "use this template", id: "newsp3" },
    { image: newcommon1t, title: "use this template", id: "newcommon1" },
  ];

  return (
    <div className='w-4/5 mx-auto'>
        <h2 className='text-2xl pt-6 mx-auto'>Explore all available templates</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
       {cardData.map((data, index) => (
          <div key={index} className="">
            <GreetingCard image={data.image} title={data.title} id={data.id}/>
          </div>
        ))}

    </div>
    </div>
    
  );
}

export default AllCardsGrid;
