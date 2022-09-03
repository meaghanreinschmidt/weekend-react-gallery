import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({ galleryItem, likeImage }) {
    const [toggle, setToggle] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [counter, setCounter] = useState(0);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return <div>

        <button className="click" onClick={() => setToggle(!toggle)}>
            {toggle ?
                <span>{galleryItem.description}</span>
                :
                <div className="image-div">
                    <img key={galleryItem.id} src={galleryItem.path} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                    <br />
                    {isHovering && <p>CLICK ME!</p>}
                    <br />
                </div>
            }
        </button>

        <div>
            <button className="like-button" onClick={() => setCounter(counter + 1)}>
                <i className="fa fa-heart-o"></i>
            </button>
            <br />
            <span>Likes: {counter}</span>
        </div>

    </div>
}

export default GalleryItem;