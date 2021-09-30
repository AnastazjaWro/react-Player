import React from "react";
const LibrarySong = ({
  isPlaying
  ,song,songs,
  setCurrentSong,
  audioRef,
  setSongs
}) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    await setCurrentSong(selectedSong[0]);
    const newSongs = songs.map((newSong) =>{
      if(newSong.id === song.id){
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
    if(isPlaying) audioRef.current.play();
  };
  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected': ''}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-info">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
}

export default LibrarySong;
