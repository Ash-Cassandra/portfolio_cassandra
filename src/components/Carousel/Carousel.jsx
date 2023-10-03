import React, {useState} from 'react'


 function Carousel(props) {
    const [currentImg, setCurrentImg] = useState(0);

        const handleNext = () => {
            setCurrentImg ((prevImg) => (prevImg === props.children.length -1 ? 0 : prevImg + 1))
        }

        const handlePrev = () => {
            setCurrentImg ((prevImg) => (prevImg === 0 ? props.children.length - 1 : prevImg - 1))
        }

    
    const index = currentImg + 1
    const counter = props.children.length > 1 ? <p>{index} / {props.children.length} </p> : null
    const buttons = props.children.length > 1 ? (
            <div>
                <button className='buttonCarousel btnCarouselRight' onClick={handleNext}>
                </button> 
                <button className='buttonCarousel btnCarouselLeft' onClick={handlePrev}>
                </button>
            </div>
        ) : null

return (
    <div className='divCarousel'>
        {props.children[currentImg]}
            {buttons}
        <div className='indexCurrentImg'>
            {counter}
        </div>
    </div>  
    )
}

export default Carousel

