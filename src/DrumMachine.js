import React from "react";
import { Box as Base, Flex as BaseFlex, Text } from "rebass";
import ReactFCCtest from "react-fcctest";
import { minHeight, minWidth } from "styled-system";
import styled from "styled-components";

import { bankOne } from "./bankOne";
import { bankTwo } from "./bankTwo";
import { DrumPad } from "./DrumPad";

const Box = styled(Base)`
  ${minHeight}
  ${minWidth}
`;
const Flex = styled(BaseFlex)`
  ${minHeight}
`;

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    // this.audioRefQ = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    // this.audio = new Audio();
  }
  state = {
    power: "is_on", // is_off : String
    bank: "bankTwo", // heater_kit : String
    volume: 0.2, // 0 - 100 : int
    soundLabel: "",
    keyPressed: "", // Q W E   A S D   Z X C : String
    clearInput: "",
    playStatus: "PAUSED",
    currentSong: "",
    display: "SHOW ME SOMETHING",
    clipToPlay: "Initial state clip"
  };

  handleInput = text => {
    this.setState(() => ({ content: text }));
  };

  handleChange = () => {
    this.setState(() => ({ clearInput: "" }));
  };
  handleSongFinishedPlaying = () => {
    // this.setState(() => ({ playStatus: Sound.status.PAUSED }));
  };

  handleClick = event => {
    let privateEventValue = event;
    console.log("privateEventValue inside handleClick");
    console.log(privateEventValue);
    let refChooser = "audioRef" + privateEventValue.toUpperCase();

    let songToPlay =
      this.state.bank === "bankOne"
        ? bankOne // filter out other letter, map out the object that's left
            .filter(
              soundInfo => soundInfo.key === privateEventValue.toUpperCase()
            )
            .map(x => x.url)
        : bankTwo
            .filter(
              soundInfo => soundInfo.key === privateEventValue.toUpperCase()
            )
            .map(x => x.url);
    let soundLabel =
      this.state.bank === "bankOne"
        ? bankOne
            .filter(
              soundInfo => soundInfo.key === privateEventValue.toUpperCase()
            )
            .map(x => x.name)
        : bankTwo
            .filter(
              soundInfo => soundInfo.key === privateEventValue.toUpperCase()
            )
            .map(x => x.name);
    console.log(soundLabel);
    this.setState(
      (prevState, props) => ({
        keyPressed: privateEventValue.toUpperCase(),
        currentSong: songToPlay,
        playStatus: "PLAYING",
        soundLabel: soundLabel[0]
      }),
      () => {
        this[refChooser].currentTime = 0;
        this[refChooser].play().catch(error => console.log(error.message));
      }
    );
  };

  handleKeyPress = event => {
    event.preventDefault();
    console.log(event.key.toUpperCase());

    // if any key pressed besides these 9 were pressed, return early,
    // meaning don't play sound or change state
    if (
      !["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(
        event.key.toUpperCase()
      )
    ) {
      return;
    }
    let refChooser = "audioRef" + event.key.toUpperCase();
    let songToPlay =
      this.state.bank === "bankOne"
        ? bankOne
            .filter(soundInfo => soundInfo.key === event.key.toUpperCase())
            .map(x => x.url)
        : bankTwo
            .filter(soundInfo => soundInfo.key === event.key.toUpperCase())
            .map(x => x.url);

    let soundLabel =
      this.state.bank === "bankOne"
        ? bankOne
            .filter(soundInfo => soundInfo.key === event.key.toUpperCase())
            .map(x => x.name)
        : bankTwo
            .filter(soundInfo => soundInfo.key === event.key.toUpperCase())
            .map(x => x.name);

    this.setState(
      (prevState, props) => ({
        keyPressed: event.key,
        currentSong: songToPlay,
        playStatus: "PLAYING",
        soundLabel: soundLabel[0]
      }),
      () => {
        this[refChooser].currentTime = 0;
        this[refChooser].play().catch(error => console.log(error.message));
      }
    );
  };

  componentDidMount() {
    let self = this;
    document.addEventListener("keydown", this.handleKeyPress);

    bankOne.forEach(soundItem =>
      this["audioRef" + soundItem.key].addEventListener("ended", function() {
        self.setState({
          playStatus: "PAUSED"
        });
      })
    );
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);

    bankOne.forEach(soundItem =>
      this["audioRef" + soundItem.key].removeEventListener("ended")
    );
  }

  render() {
    const title = "React Drum Machine with Immer";

    return (
      <Flex id="drum-machine" flexDirection="column" width={1 / 3} mx="auto">
        <ReactFCCtest />
        <Header title={title} />
        <Box id="display">
          {this.state.display}
          <Text>{this.state.bank}</Text>
          <Text>{this.state.keyPressed.toUpperCase()}</Text>
          <Text>{this.state.soundLabel}</Text>
        </Box>

        <Flex
          flexDirection="row"
          name="drum-machine"
          width={(1 / 3, 1)}
          flexWrap="wrap"
        >
          {bankOne.map(soundItem => (
            <DrumPad
              key={soundItem.key}
              handleClick={this.handleClick}
              value={soundItem.key}
              playStatus={this.state.playStatus}
              keyPressed={this.state.keyPressed.toUpperCase()}
            >
              <audio
                id={soundItem.key}
                className="clip"
                src={soundItem.url}
                ref={audio => {
                  this["audioRef" + soundItem.key] = audio;
                }}
              />
              {soundItem.key}
            </DrumPad>
          ))}
        </Flex>
      </Flex>
    );
  }
}

// Components

const Header = props => (
  <Box>
    <h1>{props.title}</h1>
  </Box>
);

export default DrumMachine;
