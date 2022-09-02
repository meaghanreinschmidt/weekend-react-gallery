import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryArray }) {
    return (
        galleryArray.map(galleryItem => {
            return <GalleryItem
                        key={galleryItem.id}
                        galleryItem={galleryItem}
                    />
        })
    )
}

export default GalleryList;