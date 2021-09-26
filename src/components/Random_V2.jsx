import React from 'react';
import useGif from '../useGif';

const Tag = () => {
  // custom hook
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img src={gif} alt="Random Gif" width="300" />
      <button onClick={() => fetchGif()}>Click for new</button>
    </div>
  );
};

export default Tag;
