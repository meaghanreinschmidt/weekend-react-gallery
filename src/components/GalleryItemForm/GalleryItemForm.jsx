import {useState} from 'react';
import './GalleryItemForm.css'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


function GalleryItemForm({ addGalleryItem, galleryItemPath, galleryItemTitle, galleryItemDescription, setGalleryItemPath, setGalleryItemTitle, setGalleryItemDescription, galleryItemLikes, setGalleryItemLikes }) {
    const [toggle, setToggle] = useState(false);

    return (
        <Container >
            {toggle ? (
                <form onSubmit={addGalleryItem}>
                    <TextField placeholder="Image Path" value={galleryItemPath} id="path-input" onChange={e => setGalleryItemPath(e.target.value)} />
                    <TextField placeholder="Title" value={galleryItemTitle} id="title-input" onChange={e => setGalleryItemTitle(e.target.value)} />
                    <TextField placeholder="Description" value={galleryItemDescription} id="description-input" onChange={e => setGalleryItemDescription(e.target.value)} />
                    <Select 
                        labelId="likes-label" 
                        id="likes-input" 
                        value={galleryItemLikes} 
                        label="Likes"
                    >
                        <MenuItem value={0}>0</MenuItem>
                    </Select>
                    <Button color="success" type="submit">Add</Button>
                    <Button color="error" onClick={() => setToggle(!toggle)}>Cancel</Button>
                </form>
            ) : (
                <Button variant="text" onClick={() => setToggle(!toggle)}>
                    <AddAPhotoIcon className="add-photo"></AddAPhotoIcon>
                </Button>
            )
        }



        </Container>
    )
}

export default GalleryItemForm;