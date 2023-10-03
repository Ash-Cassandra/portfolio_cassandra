import React, {useState, useEffect} from 'react'
import './Carousel.css'


 function Carousel(props) {
    const [currentImg, setCurrentImg] = useState(0);

        const handleIndicatorClick = (index) => {
            setCurrentImg(index)
        }

        const nextSlide = () => {
            const newIndex = (currentImg + 1) % props.children.length;
            setCurrentImg(newIndex);
          };

          useEffect(() => {
            const interval = setTimeout(nextSlide, 3000); // transition automatique 3 secondes
        
            return () => {
              clearTimeout(interval);
            };
          }, [currentImg]);
        

        const indicator = props.children.map((_, index) => (
            <div
            key={index}
            className={`carousel-indicator ${currentImg === index ? 'active-indicator' : ''}`}
            onClick = {() => handleIndicatorClick(index)}
            ></div>
        ))


return (
    <div className='divCarousel'>
        {props.children[currentImg]}
        <div className='indicators'>
            {indicator}
        </div>
    </div>  
    )
}

export default Carousel

