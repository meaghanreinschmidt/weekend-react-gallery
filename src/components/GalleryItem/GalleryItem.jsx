import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({ galleryItem, updateLikes }) {
    const [toggle, setToggle] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [isHovering, setIsHovering] = useState(false);   

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return <div>

        <button className="click" onClick={() => setToggle(!toggle)}>
            {toggle ?
                <span sx={{height: '200', width: '200'}}>{galleryItem.description}</span>
                :
                <div className="image-div">
                    <img key={galleryItem.id} src={galleryItem.path} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                    <br />
                    {isHovering && <p>CLICK ME!</p>}
                    <br />
                </div>
            }
        </button>
        <br />
        <button onClick={() => updateLikes(galleryItem.id)}>
            LIKE
        </button>        

        <div>
            <p className="like-counter">Likes: {galleryItem.likes}</p>
        </div>
        
    </div>
}

export default GalleryItem;