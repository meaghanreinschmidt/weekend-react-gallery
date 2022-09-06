import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Grid from '@mui/material/Grid';

function GalleryList({ galleryArray, updateLikes, deleteItem}) {
    return (
        <Grid container spacing={2}>
            {
                galleryArray.map(galleryItem => {
                    return (
                        <GalleryItem
                            key={galleryItem.id}
                            galleryItem={galleryItem}
                            updateLikes={updateLikes}
                            deleteItem={deleteItem}
                        />
                    )
                })
            }
        </Grid>
    )
}

export default GalleryList;