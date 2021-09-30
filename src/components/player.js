import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  songInfo,
  setSongInfo,
  audioRef,
  currentSong,
  setCurrentSong,
  setSongs,
  isPlaying,
  setIsPlaying,
  songs
}) => {
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((newSong) =>{
      if(newSong.id === nextPrev.id){
        return{
          ...newSong,
          active:true,
        }
      } else {
        return {
          ...newSong,
          active: false,
        }
      }
      
    });
    setSongs(newSongs);
  }
  const playSongHandler = () =>{
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }else{
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e) =>{
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value});
  };

  const getTime = (time) =>{
    return(
      Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
    );
  };
  
  const skipTrackHandler = async (diretion) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if(diretion === 'skip-forward'){
      await setCurrentSong(songs[(currentIndex+1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex+1) % songs.length]);
    } 
    else if(diretion === 'skip-back'){
      if((currentIndex-1) % songs.length === -1){
        await setCurrentSong(songs[songs.length-1]);
        if(isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex-1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex-1) % songs.length]);
    }
    if(isPlaying) audioRef.current.play();
  }
  const trackAim = {
    transform: `translateX(${songInfo.animationPersentage}%)`
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{background:`linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
          <input
            min={0}
            max={songInfo.duration || 0}
            onChange={dragHandler}
            value={songInfo.currentTime}
            type="range"
          />
          <div style={trackAim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className='skip-back'
          size="2x"
          icon = {faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          size="2x"
          icon = {isPlaying? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className='skip-forward' 
          size="2x"
          icon = {faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
