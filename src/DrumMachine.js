import React from "react";
import { Box as Base, Flex as BaseFlex } from "rebass";
import ReactFCCtest from "react-fcctest";
import { minHeight } from "styled-system";
import styled from "styled-components";
import Sound from "react-sound";

import Heater1 from "./audio/bankOne/Heater-1.mp3";
import Heater_2 from "./audio/bankOne/Heater-2.mp3";
import Heater_3 from "./audio/bankOne/Heater-3.mp3";
import Heater_4 from "./audio/bankOne/Heater-4_1.mp3";
import Heater_6 from "./audio/bankOne/Heater-6.mp3";
import Cev_H2 from "./audio/bankOne/Cev_H2.mp3";
import Dsc_Oh from "./audio/bankOne/Dsc_Oh.mp3";
import Kick_n_Hat from "./audio/bankOne/Kick_n_Hat.mp3";
import RP4_KICK_1 from "./audio/bankOne/RP4_KICK_1.mp3";

import { bankOne } from "./bankOne";

const Box = styled(Base)`
  ${minHeight}
`;
const Flex = styled(BaseFlex)`
  ${minHeight}
`;

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    // this.handleClick = this.handleClick.bind(this);
    // this.audio = new Audio();
  }
  state = {
    power: "is_on", // is_off : String
    bank: "smooth_piano_kit", // heater_kit : String
    volume: 33, // 0 - 100 : int
    keyPressed: "", // Q W E   A S D   Z X C : String
    clearInput: "",
    playStatus: Sound.status.PAUSED,
    currentSong: ""
  };

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  handleInput = text => {
    this.setState(() => ({ content: text }));
  };

  handleChange = () => {
    this.setState(() => ({ clearInput: "" }));
  };
  handleSongFinishedPlaying = () => {
    // this.setState(() => ({ playStatus: Sound.status.PAUSED }));
  };

  handleKeyPress = event => {
    event.preventDefault();
    console.log("yaaay");
    console.log(event);
    // let key = event.key.toUpperCase();
    let { keyCode, key } = event;
    // let songToPlay = bankOne
    //   .filter(sound => sound.keyCode === event.keyCode)
    //   .map(item => {
    //     console.log(item);
    //     return item.name;
    //   });
    // let newSound = this.audio(heater_1);
    // newSound.play();
    switch (key.toUpperCase()) {
      case "Q":
        this.setState(
          (prevState, props) => ({
            keyPressed: key,
            currentSong: Heater1,
            playStatus: Sound.status.PLAYING
          }),
          () => {
            this.audioRef.currentTime = 0;
            this.audioRef.play().catch(error => console.log(error.message));
          }
        );
        break;
      case "W":
        this.setState(() => ({
          keyPressed: key,
          currentSong: Heater_2,
          playStatus: Sound.status.PLAYING
        }));
        break;
      case "E":
        this.setState(() => ({
          keyPressed: key,
          currentSong: Heater_3,
          playStatus: Sound.status.PLAYING
        }));
        break;
      case "A":
        this.setState((state, props) => ({
          keyPressed: key,
          currentSong: Heater_4,
          playStatus: Sound.status.PLAYING
        }));
        break;
      case "S":
        this.setState((state, props) => ({
          keyPressed: key,
          currentSong: Heater_6,
          playStatus: Sound.status.PLAYING
        }));
        break;
      case "D":
        this.setState(() => ({
          keyPressed: key,
          currentSong: Cev_H2,
          playStatus: Sound.status.PLAYING
        }));
        break;
      case "Z":
        this.setState(() => ({
          keyPressed: key,
          currentSong: Dsc_Oh,
          playStatus: Sound.status.PLAYING
        }));
        break;
      case "X":
        this.setState(() => ({
          keyPressed: key,
          currentSong: Kick_n_Hat,
          playStatus: Sound.status.PLAYING
        }));
        break;
      case "C":
        this.setState(() => ({
          keyPressed: key,
          currentSong: RP4_KICK_1,
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

  // componentWillMount deprecated in React 16.3
  componentDidMount() {
    document.addEventListener("click", this._handleDocumentClick, false);
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._handleDocumentClick, false);
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const title = "React Drum Machine with Immer";

    return (
      <Flex flexDirection="column" width={1 / 3} mx="auto">
        <ReactFCCtest />
        <audio
          ref={input => {
            this.audioRef = input;
          }}
          crossOrigin="anonymous"
          src={this.state.currentSong}
          currentTime={0}
        />
        <Header title={title} />
        <Box>{this.state.keyPressed}</Box>
        <Box>{JSON.stringify(this.state, null, 2)}</Box>
        <Sound
          url={this.state.currentSong}
          playStatus={this.state.playStatus}
          playFromPosition={0}
          ignoreMobileRestrictions="true"
          //   onLoading={this.handleSongLoading}
          //   onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />

        <Flex
          flexDirection="row"
          name="drum-machine"
          width={(1 / 3, 1)}
          //   style={{ border: "8px red dashed" }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            {/* <input
              type="text"
              name="one"
              value={this.state.clearInput}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            /> */}
            Q
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            W
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            E
          </Flex>
        </Flex>

        <Flex
          flexDirection="row"
          name="drum-machine"
          width={(1 / 3, 1)}
          //   style={{ border: "8px red dashed" }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            A
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            S
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            D
          </Flex>
        </Flex>

        <Flex
          flexDirection="row"
          name="drum-machine"
          width={(1 / 3, 1)}
          //   style={{ border: "8px red dashed" }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            Z
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            X
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            minHeight={["200px", "80px"]}
            width={1 / 3}
            m={3}
            bg="pink"
            flexDirection="row"
          >
            C
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

// Default content

const defaultValue =
  "\n> Blockquote of some crummy text\n> Second Line?\n\n```javascript\nconst variable = {test: true}\n\nfunction(){\n  let help = 'maybe'\n  return help;\n}\n```\n\nHeading\n=======\n\nSub-heading\n-----------\n \n### Third level\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * sticks\n  * and\n  * stones\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/ee1172yeqyE/0.jpg)](http://www.youtube.com/watch?v=ee1172yeqyE)";

DrumMachine.defaultProps = {
  content: defaultValue
};

// Components

const Header = props => (
  <Box>
    <h1>{props.title}</h1>
  </Box>
);

export default DrumMachine;
