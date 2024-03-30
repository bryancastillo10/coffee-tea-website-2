// import{ useState} from "react";
// Array
import MilestoneElements from "src/arrays/MilestoneElements.js";
import {ThemeList} from "src/components/";


// Utility
import {getImageURL} from "src/utilities/imageURL.js";
import arrowLeft from "src/assets/icons/arrow-left.svg";
import arrowRight from "src/assets/icons/arrow-right.svg";

const MileStone = () => {
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
        <div className="arrow arrow-left"><img src={arrowLeft}
        width={50} height={50}
        alt="carousel-left-arrow" /></div>
        {MilestoneElements.map((timeline)=>{
          return(
        <div key={timeline.id} className="milestone__card">
          <div  className="milestone__content">
               <div className="milestone__content-header">
                    <h1>{timeline.title}</h1>
                     <p>{timeline.year}</p>
                    </div>
        <div className="milestone__content-image">
            <img src={getImageURL(timeline.image)} alt="" />
          </div>
        </div>
         <div className="milestone__subcontent">
          <p>{timeline.description}</p>
        <ThemeList data={timeline} />
        </div>
        </div>
        )
        })}
        <div className="arrow arrow-right">
        <img src={arrowRight} width={50} height={50}
        alt="carousel-right-arrow" />
        {/* <CircularSlider data={timeline}/> */}
        </div>
      </div>      
    </section>
  );
};

export default MileStone;
