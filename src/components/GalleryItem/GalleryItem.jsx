import { useState } from 'react';
import './GalleryItem.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';

function GalleryItem({ galleryItem, updateLikes }) {
    const [toggle, setToggle] = useState(false);


    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card variant="outlined">
                <CardContent className="card-content">
                    <Button className="click" style={{backgroundColor: '#222'}} onClick={() => setToggle(!toggle)}>
                        {toggle ?
                            <Typography className="gallery-description">{galleryItem.description}</Typography>
                            :
                            <CardMedia className="gallery-image" component="img" image={galleryItem.path} />
                        }
                    </Button>
                    <br />
                    <CardActions className="card-like-button">
                        <Button onClick={() => updateLikes(galleryItem.id)}>
                            <FavoriteIcon className="like-button"></FavoriteIcon>
                        </Button>
                        <Typography className="like-counter">{galleryItem.likes} people like this!</Typography>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default GalleryItem;