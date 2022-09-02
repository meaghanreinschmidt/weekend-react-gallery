import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryArray}) {
    galleryArray.map((galleryItem) => {
        return (
            <div>
                <GalleryItem galleryItem={galleryItem}/>
            </div>
        )
    })
}

export default GalleryList;