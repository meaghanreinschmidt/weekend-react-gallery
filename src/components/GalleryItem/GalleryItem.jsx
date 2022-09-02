import { useState } from 'react';

function GalleryItem({ galleryItem, likeImage }) {
    const [toggle, setToggle] = useState(false);
    
    return <div>
        {
            toggle ? (
                <div></div>
            ) : (
                <div></div>
            )
        }
    

    <div onClick={() => setToggle(!toggle)}>
        {toggle ? 
            <span>{galleryItem.description}</span>
            : 
            <div>
                <img key={galleryItem.id} src={galleryItem.path} />
                <br />
                <div>
                <button onClick={() => likeImage()}>
                    <i className="fa fa-heart-o"></i>
                </button>
                </div>
            </div>
        }
    </div>

    </div>
}

export default GalleryItem;