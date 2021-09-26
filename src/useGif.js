import axios from 'axios';
import { useEffect, useState } from 'react';

const APi_KEY = process.env.REACT_APP_API_KEY;
const url = `http://api.giphy.com/v1/gifs/random?api_key=${APi_KEY}`;

const useGif = (tag) => {

    const [gif, setGif] = useState('');


    const fetchGif = async (tag) => {

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

        const imgSrc = data.data.images.downsized_large.url;

        setGif(imgSrc);

        return () => {
            'cleanUp';
        };
    };

    useEffect(() => {
        fetchGif(tag);
    }, [tag]);



    return { gif, fetchGif }
};

export default useGif;
