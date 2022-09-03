import axios from 'axios';
import React, {useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
  let [galleryArray, setGalleryArray] = useState([]);

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

    return (
      <div className="App">
        <Header />
        <div className="row">
        <GalleryList 
          galleryArray={galleryArray}
          updateLikes={updateLikes}
        />   
        </div>
      </div>
    );
}

export default App;
