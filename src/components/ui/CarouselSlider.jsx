
const CarouselSlider = ({MilestoneElements, slide, setSlide}) => {
  return (
    <div>
      <span className="carousel__inidicator"
      >{MilestoneElements.map((_,index)=>{
        return <button className={slide === index ? "indicator":"indicator indicator-inactive"}
        key={index} onClick={()=> setSlide(index)}>

        </button>
      })}</span>
    </div>
  )
}

export default CarouselSlider
