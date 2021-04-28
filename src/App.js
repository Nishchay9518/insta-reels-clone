import { useState,useEffect } from "react";
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const[reels, setReels] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ) 
      )
  }, [])

  return (
    <div className="app">

      <div className="top">

      <img className="app_logo" src="logo.png" alt=""/>
      <h1>Reels</h1>
      </div>
      
      <div className="app_videos">
        {reels.map(({channel , avatarSrc, song, url, likes, shares}) => 
        <VideoCard
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
        />
        )}
      </div>
    </div>
  );
}

export default App;
