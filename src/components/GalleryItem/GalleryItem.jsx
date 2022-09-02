import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({ galleryItem, likeImage }) {
    const [toggle, setToggle] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    }
    
    return <div>
        {
            toggle ? (
                <div></div>
            ) : (
                <div></div>
            )
        }

    <button className="click" onClick={() => setToggle(!toggle)}>
        {toggle ? 
            <span>{galleryItem.description}</span>
            : 
            <div className="image-div">
                <img key={galleryItem.id} src={galleryItem.path} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                <br />
                {isHovering && <p>CLICK ME!</p>}
                <br/>
            </div>
            
        }
    </button>
    
    <div>
        <button className="like-button" onClick={() => likeImage()}>
            <i className="fa fa-heart-o"></i>
        </button>
    </div>

    </div>
}

export default GalleryItem;