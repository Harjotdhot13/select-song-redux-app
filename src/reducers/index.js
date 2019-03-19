import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    {
      title: "Warining shots",
      duration: "3:43"
    },
    {
      title: "No Need",
      duration: "3:13"
    },
    {
      title: "Issa Jatt",
      duration: "4:43"
    },
    {
      title: "Underestimate",
      duration: "3:28"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer
});
