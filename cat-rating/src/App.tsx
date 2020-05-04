import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
import Image from './Image';

export default (): JSX.Element | null => {

  const [cat1, setCat1] = useState(null as any | null);
  const [cat2, setCat2] = useState(null as any | null);

  function UpdateImages() {
    fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then(response => response.json())
    .then(response => setCat1(response[0]));

    fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then(response => response.json())
    .then(response => setCat2(response[0]));
  }

  useEffect(() => {
    UpdateImages();
  }, []);

  function voteCat1() {
    const itemsRef = firebase.database().ref('cats');
    const item = {
      id: cat1.id,
      matches: 1,
      votes: 1
    }
    itemsRef.push(item);
    UpdateImages();
  }

  function voteCat2() {
    const itemsRef = firebase.database().ref('cats');
    const item = {
      id: cat2.id,
      matches: 1,
      votes: 1
    }
    itemsRef.push(item);
    UpdateImages();
  }

  return (
    cat1 && cat2
    ? <>
        <div className='placeholder'>
          <Image src={cat1.url} />
        </div>
        <div className='placeholder' style={{left: '50%'}}>
          <Image src={cat2.url} />
        </div>
        <div className='banner'>VS</div>
        <div className='vote1' onClick={voteCat1}>Cat 1</div>
        <div className='vote2' onClick={voteCat2}>Cat 2</div>
      </>
    : null
  );
};
