import React, {useState} from "react"
import threePoints from '../../assets/three_points.webp'
import onePoint from '../../assets/one_point.webp'

function Collaps({title, children}) {

    const [isOpen, setIsOpen] = useState(false)

    const toggleCollaps = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div>
            <button className='btnCollaps' onClick={toggleCollaps}>
                {title}
                {isOpen ? <img src={onePoint} alt='#' className="CollapsOnePt"/> : <img src={threePoints} alt='#' className="CollapsThreePts"/>}
            </button>
            {isOpen && children}    
        </div>
    )
}

export default Collaps