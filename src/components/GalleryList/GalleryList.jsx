import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryArray, updateLikes }) {
    return (
        galleryArray.map(galleryItem => {
            return <GalleryItem
                        key={galleryItem.id}
                        galleryItem={galleryItem}
                        updateLikes={updateLikes}
                    />
        })
    )
}

export default GalleryList;