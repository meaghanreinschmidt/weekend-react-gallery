import axios from 'axios';
import React, {useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import GalleryItemForm from '../GalleryItemForm/GalleryItemForm';
import GalleryList from '../GalleryList/GalleryList';
import Container from '@mui/material/Container';

function App() {
  let [galleryArray, setGalleryArray] = useState([]);
  let [galleryItemPath, setGalleryItemPath] = useState('');
  let [galleryItemTitle, setGalleryItemTitle] = useState('');
  let [galleryItemDescription, setGalleryItemDescription] = useState('');
  let [galleryItemLikes, setGalleryItemLikes] = useState(0);

  // This gets called when the page loads. 
  useEffect(() => {
    console.log('useEffect -page load');
    fetchGallery();
  }, []);

  // Make a GET request to our server
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      // Our array is response.data
      setGalleryArray(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    })
  }

  // PUT request 
  const updateLikes = (galleryId) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${galleryId}`,
    }).then(response => {
      fetchGallery();
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong!')
    })
  }

  // DELETE request
  const deleteItem = (galleryId) => {
    axios({
      method: 'DELETE',
      url: `/gallery/${galleryId}`
    }).then((response) => {
      fetchGallery();
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong!')
    })
  }

  // POST request
  const addGalleryItem = (evt) => {
    evt.preventDefault();
    axios({
      method: 'POST',
      url: '/gallery',
      data: {
        path: galleryItemPath,
        title: galleryItemTitle,
        description: galleryItemDescription,
        likes: galleryItemLikes
      }
    }).then(response => {
      // Clear form inputs
      setGalleryItemPath('');
      setGalleryItemTitle('');
      setGalleryItemDescription('');
      // Fetch Gallery 
      fetchGallery();
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    });
  }

    return (
      <Container className="App">
        <Header />
        <GalleryItemForm 
        addGalleryItem={addGalleryItem} 
        galleryItemPath={galleryItemPath}
        setGalleryItemPath={setGalleryItemPath}
        galleryItemTitle={galleryItemTitle}
        setGalleryItemTitle={setGalleryItemTitle}
        galleryItemDescription={galleryItemDescription}
        setGalleryItemDescription={setGalleryItemDescription}
        galleryItemLikes={galleryItemLikes}
        setGalleryItemLikes={setGalleryItemLikes}
        />
        <br />
        <GalleryList 
          galleryArray={galleryArray}
          updateLikes={updateLikes}
          deleteItem={deleteItem}
        />   
      </Container>
    );
}

export default App;
