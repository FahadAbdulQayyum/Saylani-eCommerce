import React, { useEffect, useState } from 'react';
import { storage } from '../firebase/firebaseConfig';

function ImageComponent() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Reference to the image file in Firebase Storage
    // const imageRef = storage.ref('/files'); // Replace with the path to your image

    // console.log('imageRef', imageRef)
    console.log('imageRef',storage)

    // Get the download URL for the image
//     imageRef.getDownloadURL()
//       .then(url => {
//         // Set the retrieved URL to the state variable
//         setImageUrl(url);
//       })
//       .catch(error => {
//         console.error('Error getting download URL: ', error);
//       });
  }, []);

  return (
    <div>
      {/* {imageUrl ? (
        <img src={imageUrl} alt="Uploaded" />
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
}

export default ImageComponent;
