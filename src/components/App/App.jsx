import axios from 'axios';
import React, {useState, useEffect } from 'react';
import './App.css';

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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div>
          {galleryArray.map((galleryItem) => {
            return <img key={galleryItem.id} src={galleryItem.path}></img>
          })
          }
        </div>
      </div>
    );
}

export default App;
