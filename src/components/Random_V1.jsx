import axios from 'axios';
import React, { useEffect, useState } from 'react';

const APi_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');

  const fetchGif = async () => {
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${APi_KEY}`;

    const { data } = await axios.get(url);

    const imgSrc = data.data.images.downsized_large.url;

    setGif(imgSrc);

    return () => {
      'cleanUp';
    };
  };
  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img src={gif} alt="Random Gif" width="300" />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Random;
