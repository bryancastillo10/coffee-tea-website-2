import{ useState} from "react";
// Array
import MilestoneElements from "src/arrays/MilestoneElements.js";
import {ThemeList, CarouselSlider} from "src/components/";


// Utility
import {getImageURL} from "src/utilities/imageURL.js";
import arrowLeft from "src/assets/icons/arrow-left.svg";
import arrowRight from "src/assets/icons/arrow-right.svg";

const MileStone = () => {
  const [slide,setSlide] = useState(0);
  const nextSlide = () =>{
      setSlide(slide === MilestoneElements.length - 1 ? 0 : slide+1);
  }

  const prevSlide = () =>{
      setSlide(slide === 0  ? MilestoneElements.length - 1 : slide-1);
  }
  
  return (
    <section className="milestone__page">
      <div className="milestone__header">
        <h1>A Brewing Journey</h1>
        <p>We proudly present some of the shop's milestones. Check this out:</p>
      </div>

      <div  className="milestone__card-container">
        <div className="arrow arrow-left" onClick={prevSlide}>
          Previous<img src={arrowLeft} 
        width={50} height={50}
        alt="carousel-left-arrow" /></div>
        {MilestoneElements.map((timeline,index)=>{
          return(
        <div key={timeline.id} className={slide === index ? "milestone__card" : "milestone__card card-hidden"}>
          <div  className="milestone__content">
               <div className="milestone__content-header">
                    <h1>{timeline.title}</h1>
                     <p>{timeline.year}</p>
                    </div>
        <div className="milestone__content-image">
            <img src={getImageURL(timeline.image)} alt="timeline-image-features" />
          </div>
        </div>
         <div className="milestone__subcontent">
          <p>{timeline.description}</p>
        <ThemeList data={timeline} />
        </div>
        </div>
        )
        })}
        <div className="arrow arrow-right" onClick={prevSlide}>Next
        <img src={arrowRight} width={50} height={50} 
        alt="carousel-right-arrow" />
        <CarouselSlider MilestoneElements={MilestoneElements} slide={slide}
        setSlide={setSlide} />
        </div>
      </div>      
    </section>
  );
};

export default MileStone;
