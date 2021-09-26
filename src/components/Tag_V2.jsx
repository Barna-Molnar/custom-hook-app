import React, { useState } from 'react';
import useGif from '../useGif';

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  // custom hook
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img src={gif} alt="Random Gif" width="300" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif()}>Click for new</button>
    </div>
  );
};

export default Tag;
