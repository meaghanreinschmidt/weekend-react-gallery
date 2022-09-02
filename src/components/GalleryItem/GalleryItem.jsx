import React from 'react';

function GalleryItem({ galleryItem }) {
    return (
        <div>
            <img key={galleryItem.id} src={galleryItem.path}></img>
            <br />
            <button onClick={() => likeImage()}>
                <i className="fa fa-heart-o"></i>
            </button>
        </div>
    )
}

export default GalleryItem;