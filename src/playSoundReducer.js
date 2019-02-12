import Sound from "react-sound";

import { bankOne } from "./bankOne";

// console.log(JSON.stringify(bankOne, null, 2));
// console.log(bankOne.filter(sound => sound.keyValue === "Q"));

export let playSoundReducer = event => {
  let keyValue = event.key.toUpperCase();
  switch (keyValue) {
    case "Q":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => {
            console.log(item);
            return item.url;
          }),
        playStatus: Sound.status.PLAYING
      }));
      break;
    case "W":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => item.url),
        playStatus: Sound.status.PLAYING
      }));
      break;
    case "E":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => item.url),
        playStatus: Sound.status.PLAYING
      }));
      break;
    case "A":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => item.url),
        playStatus: Sound.status.PLAYING
      }));
      break;
    case "S":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => item.url),
        playStatus: Sound.status.PLAYING
      }));
      break;
    case "D":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => item.url),
        playStatus: Sound.status.PLAYING
      }));
      break;
    case "Z":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => item.url),
        playStatus: Sound.status.PLAYING
      }));
      break;
    case "X":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => item.url),
        playStatus: Sound.status.PLAYING
      }));
      break;
    case "C":
      this.setState(() => ({
        keyPressed: keyValue,
        currentSong: bankOne
          .filter(sound => sound.keyValue === keyValue)
          .map(item => item.url),
        playStatus: Sound.status.PLAYING
      }));
      break;

    default:
      this.setState(() => ({
        keyPressed: "",
        currentSong: "",
        playStatus: Sound.status.PAUSED
      }));
      break;
  }
};
