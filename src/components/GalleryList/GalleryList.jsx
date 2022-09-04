import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Grid from '@mui/material/Grid';

function GalleryList({ galleryArray, updateLikes }) {
    return (
        <Grid container spacing={2}>
            {
                galleryArray.map(galleryItem => {
                    return (
                        <GalleryItem
                            key={galleryItem.id}
                            galleryItem={galleryItem}
                            updateLikes={updateLikes}
                        />
                    )
                })
            }
        </Grid>
    )
}

export default GalleryList;