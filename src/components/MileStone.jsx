// import{ useState} from "react";
// Array
import MilestoneElements from "src/arrays/MilestoneElements.js";


// Utility
import {getImageURL} from "src/utilities/imageURL.js";

const MileStone = ({data}) => {
  // const [slide,setSlide] = useState(0);
  // const nextSlide = () =>{
  //     setSlide(slide === data.length - 1 ? 0 : slide+1);
  // }

  // const prevSlide = () =>{
  //     setSlide(slide === 0  ? data.length - 1 : slide-1);
  // }
  
  return (
    <section className="milestone__page">
      <div className="milestone__header">
        <h1>A Brewing Journey</h1>
      </div>

      <div  className="milestone__card-container">
      
      </div>
 

        
    </section>
  );
};

export default MileStone;
