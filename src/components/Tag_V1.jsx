import axios from 'axios';
import React, { useEffect, useState } from 'react';

const APi_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState('');
  const [tag, setTag] = useState('dogs');

  const fetchGif = async (tag) => {
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${APi_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);

    const imgSrc = data.data.images.downsized_large.url;

    setGif(imgSrc);

    return () => {
      'cleanUp';
    };
  };
  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img src={gif} alt="Random Gif" width="300" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Tag;
