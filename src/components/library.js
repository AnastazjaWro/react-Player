import React from "react";
import LibrarySong from "./LibrarySongs";

const Library = ({isPlaying,songs,setCurrentSong,audioRef, setSongs, libraryStatus}) => {
  return(
    <div className={`library ${libraryStatus ? "active-library": ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            songs={songs}
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;