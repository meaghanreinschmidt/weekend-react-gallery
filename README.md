# React Gallery

## Description

*Duration: 2 Weeks*

Here are a few of my favorite things! Don't forget to click the like button!

[Deployed version of app here](https://desolate-spire-67480.herokuapp.com/)

## Screenshot

<img width="1001" alt="Screen Shot 2022-09-06 at 1 48 58 PM" src="https://user-images.githubusercontent.com/98852538/188715155-260679e5-bb3d-465f-aebb-7fc45f241b8f.png">

## Prerequisties 

- [Node.js](https://nodejs.org/en/)
(Side note: if you do not have nodemon installed, change the start script in the `package.json` file to `node server/server.js`)

## Installation
1. Create a database in Postico named `react-gallery`
2. Run `npm install` in your terminal
2. Run `npm run server` in one terminal tab
4. Run `npm run client` in another terminal tab

## Usage
1. As a user, I want to view images in a gallery.
2. As a user, I want to click on the image to display the image description.
3. As a user, I want to be able to like or delete an image.
4. As a user, I want to be able to add an image to the gallery.

## Built With

1. ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
2. ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
3. ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
4. ![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
5. ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
6. ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
7. ![image](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
8. ![image](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
9. ![image](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
   
## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgment 

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) and the members of the Phrygian cohort who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [reinschmidtmeaghan@gmail.com](mailto:reinschmidtmeaghan@gmail.com)

## Project Checklist

### Setup
- [X] Set up base README
- [X] `npm install`, `npm run server`, `npm run client`
- [X] Add sample photos to Images folder
- [X] Add image info to galleryItems array

### Functionality
- [X] Create a GET request and display images to DOM
- [X] Create Header component and pass Header via props
- [X] Add non-functional like button to .map and reformat 
- [X] Shift .map function and gallery data loop to GalleryList component
- [X] Create GalleryItem component from GalleryList 
- [X] Set toggle for image and description
- [X] Add updateLikes button in GalleryItem
- [X] Add PUT request to App.jsx for updateLikes

### Stretch Mode Goals
- [X] Add styling with MUI
- [X] Move Data to Database
- [X] Add Delete functionality
- [X] Add form to POST new gallery item


