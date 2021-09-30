// eslint-disable-next-line 
import React, {useState, useRef} from 'react';
import '../src/styles/app.scss';
import data from "./data";

import Player from './components/player';
import Song from './components/song';
import Library from './components/library';
import Nav from './components/nav';

const App = () => {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPersentage:0,
  });
  const [libraryStatus,setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent/roundedDuration)*100);
    setSongInfo({...songInfo,currentTime: current, duration, animationPersentage: animation});
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex+1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  };
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>  
    </div>
  );
}

export default App;
