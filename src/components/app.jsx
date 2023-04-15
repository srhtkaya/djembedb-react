import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import { SongsData } from "../songsData";
import SongCard from "./songCard";
import Topbar from "./topbar";
import SettingsSheet from "./settingsSheet";
import LogoBig from "./logoBig";
import Button from "@material-ui/core/Button";
import { Howl, Howler } from "howler";
import { hotjar } from "react-hotjar";
import FullStory from "react-fullstory";
// import { FixedSizeList as List } from "react-window";
import { VariableSizeList as List } from "react-window";

//import Djembe Sounds
import gunAudioDjembe from "../sounds/djembe/gun.mp3";
import dunAudioDjembe from "../sounds/djembe/dun.mp3";
import goAudioDjembe from "../sounds/djembe/go.mp3";
import gosAudioDjembe from "../sounds/djembe/gos.mp3";
import doAudioDjembe from "../sounds/djembe/do.mp3";
import dosAudioDjembe from "../sounds/djembe/dos.mp3";
import paAudioDjembe from "../sounds/djembe/pa.mp3";
import taAudioDjembe from "../sounds/djembe/ta.mp3";
import caAudioDjembe from "../sounds/djembe/ca.mp3";

//import Cajon Sounds
import gunAudioCajon from "../sounds/cajon/gun.mp3";
import dunAudioCajon from "../sounds/cajon/dun.mp3";
import gosAudioCajon from "../sounds/cajon/gos.mp3";
import dosAudioCajon from "../sounds/cajon/dos.mp3";
import paAudioCajon from "../sounds/cajon/pa.mp3";
import taAudioCajon from "../sounds/cajon/ta.mp3";

import gsap from "gsap";
import ReactGA from "react-ga";
ReactGA.initialize("UA-30988885-14");
ReactGA.pageview(window.location.pathname + window.location.search);

var volume = 1;
const howlerGunDjembe = new Howl({ src: [gunAudioDjembe], volume: volume });
const howlerDunDjembe = new Howl({ src: [dunAudioDjembe], volume: volume });
const howlerGoDjembe = new Howl({ src: [goAudioDjembe], volume: volume });
const howlerGosDjembe = new Howl({ src: [gosAudioDjembe], volume: volume / 4 });
const howlerDoDjembe = new Howl({ src: [doAudioDjembe], volume: volume });
const howlerDosDjembe = new Howl({ src: [dosAudioDjembe], volume: volume / 4 });
const howlerPaDjembe = new Howl({ src: [paAudioDjembe], volume: volume });
const howlerTaDjembe = new Howl({ src: [taAudioDjembe], volume: volume });
const howlerCaDjembe = new Howl({ src: [caAudioDjembe], volume: volume });

const howlerGunCajon = new Howl({ src: [gunAudioCajon], volume: volume });
const howlerDunCajon = new Howl({ src: [dunAudioCajon], volume: volume });
const howlerGosCajon = new Howl({ src: [gosAudioCajon], volume: volume / 8 });
const howlerDosCajon = new Howl({ src: [dosAudioCajon], volume: volume / 12 });
const howlerPaCajon = new Howl({ src: [paAudioCajon], volume: volume });
const howlerTaCajon = new Howl({ src: [taAudioCajon], volume: volume });

var domainName;

const Row = ({ index, style, data }) => (
  <div style={style}>
    <SongCard
      key={index}
      songId={index}
      songName={data[index].songName}
      song={data[index].song}
      timeSignature={data[index].timeSignature}
      suggestedBpm={data[index].bpm}
      OnBpmChange={data.OnBpmChange}
      feel={data[index].feel}
      src={data[index].src}
      OnPlayPause={data.OnPlayPause}
      isPlaying={data.isPlaying(index)}
    />
  </div>
);

const getItemSize = (index) => {
  // Calculate the height of the item based on the song data
  // For example, you could use the number of lines in the song as an indicator of the height
  const numberOfLines = SongsData[index].song.length;

  const baseHeight = 126;
  const lineHeight = 88;
  return baseHeight + lineHeight * numberOfLines;
};

var uniqid = require("uniqid");
var bpm = 90;
var swing = 0;
var step;
var notes;

hotjar.initialize(2655002, 6);
const ORG_ID = "GR09Q";

class App extends React.PureComponent {
  state = {
    SongsData: SongsData,
    playing: false,
    step: 0,
    songPlaying: 999,
    // instrument: "cajon",
    instrument: "djembe",
    isBottomSheetOpen: false,
  };

  componentDidMount() {
    window.addEventListener("load", this.handleWindowLoad);
    document.addEventListener("keydown", this._handleKeyDown);

    // --- debug switch

    document.body.classList.add("debug");
    // ---
  }

  handleWindowLoad = () => {
    this.checkIfSystemDarkTheme();
    this.domainSpecificChanges();
  };

  checkIfSystemDarkTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.toggle("dark-theme");
    }
  }

  domainSpecificChanges() {
    domainName = window.location.hostname;
    // console.log(domainName);
    if (domainName == "www.djembedb.com" || "djembedb.com") {
      console.log("website is djembedb");
      this.setState(() => ({
        instrument: "djembe",
      }));
    } else {
      this.setState(() => ({
        instrument: "cajon",
      }));
    }
  }

  handleBpmChange = (e, t) => {
    if (t > 10) {
      bpm = t;
    } else {
      bpm = 90;
    }
    // clearTimeout(this.timeout);
    // if (this.state.playing) {
    //   this.playNote(step, notes);
    // }
  };

  handleSwingChange = (e, s) => {
    swing = s;
    // clearTimeout(this.timeout);
    // if (this.state.playing) {
    //   this.playNote(step, notes);
    // }
  };

  handleVolumeChange = (e, v) => {
    volume = v / 100;
    Howler.volume(volume);
  };

  handleInstrumentChange = () => {
    if (this.state.instrument == "cajon") {
      this.setState(() => ({
        instrument: "djembe",
      }));
    } else {
      this.setState(() => ({
        instrument: "cajon",
      }));
    }
  };

  _handleKeyDown = (e) => {
    // console.log("keypressed: " + e.key);
    if (e.key === "d") {
      alert("Debug mode enabled");
      document.body.classList.add("debug");
    }

    // if (e.keyCode == 32) {
    //   e.preventDefault();
    //   // alert("Paused mode enabled");
    //   clearTimeout(this.timeout);
    //   if (this.state.playing) {
    //     this.setState(() => ({
    //       playing: false,
    //       // songPlaying: songId,
    //     }));
    //   } else {
    //     this.setState(() => ({
    //       playing: true,
    //     }));
    //     this.startLoop(step, notes);
    //   }
    // }
  };

  handlePlayPause = (e, songId) => {
    //stop the music and reset the step
    clearTimeout(this.timeout);
    step = 0;

    if (this.state.playing && this.state.songPlaying == songId) {
      this.setState(() => ({
        playing: false,
        songPlaying: 9999,
      }));
      return;
    }

    this.setState(() => ({
      playing: true,
      songPlaying: songId,
    }));

    // get the song data and play
    let songString = "";
    this.state.SongsData[songId].song.forEach(
      (element) => (songString += element + " ")
    );
    notes = songString.split(" ");

    this.playNote(songId, step, notes);
  };

  playNote(song, step, notes) {
    this.playNoteSound(notes[step]);
    this.animateNote(song, step);
    step = step < notes.length - 2 ? step + 1 : 0;
    var baseNoteTime = (60 * 1000) / bpm / 4;
    if (step % 2 == 0) {
      // ODD
      var noteTime = baseNoteTime - baseNoteTime * (swing / 100);
    } else {
      // EVEN
      var noteTime = baseNoteTime + baseNoteTime * (swing / 100);
    }
    this.timeout = setTimeout(() => {
      this.playNote(song, step, notes);
    }, noteTime);
    return step;
  }

  animateNote(songPlaying, step) {
    let animatedNoteId = "note-" + songPlaying + "-" + step;
    let animatedNoteIdHashtag = "#" + animatedNoteId;

    var tl = gsap.timeline();
    tl.to(animatedNoteIdHashtag, {
      scale: 1.8,
      duration: 0.05,
    });
    tl.to(animatedNoteIdHashtag, {
      scale: 1,
      duration: 0.2,
    });
  }

  playNoteSound(note) {
    switch (note) {
      case "Gun":
        switch (this.state.instrument) {
          case "djembe":
            howlerGunDjembe.play();
            break;
          case "cajon":
            howlerGunCajon.play();
            break;
        }
        break;

      case "Dun":
        switch (this.state.instrument) {
          case "djembe":
            howlerDunDjembe.play();
            break;
          case "cajon":
            howlerDunCajon.play();
            break;
        }
        break;

      case "go":
        switch (this.state.instrument) {
          case "djembe":
            howlerGoDjembe.play();
            break;
          case "cajon":
            howlerPaCajon.play();
            break;
        }
        break;

      case "do":
        switch (this.state.instrument) {
          case "djembe":
            howlerDoDjembe.play();
            break;
          case "cajon":
            howlerTaCajon.play();
            break;
        }
        break;

      case "gos":
        switch (this.state.instrument) {
          case "djembe":
            howlerGosDjembe.play();
            break;
          case "cajon":
            howlerGosCajon.play();
            break;
        }
        break;

      case "dos":
        switch (this.state.instrument) {
          case "djembe":
            howlerDosDjembe.play();
            break;
          case "cajon":
            howlerDosCajon.play();
            break;
        }
        break;

      case "Pa":
        switch (this.state.instrument) {
          case "djembe":
            howlerPaDjembe.play();
            break;
          case "cajon":
            howlerPaCajon.play();
            break;
        }
        break;

      case "Ta":
        switch (this.state.instrument) {
          case "djembe":
            howlerTaDjembe.play();
            break;
          case "cajon":
            howlerTaCajon.play();
            break;
        }
        break;

      case "Ca":
        switch (this.state.instrument) {
          case "djembe":
            howlerCaDjembe.play();
            break;
          case "cajon":
            howlerPaCajon.play();
            break;
        }
        break;

      default:
        break;
    }
  }
  setOpen = (isOpen) => {
    this.setState({ open: isOpen });
  };

  toggleBottomSheet = () => {
    this.setState((prevState) => ({
      isBottomSheetOpen: !prevState.isBottomSheetOpen,
    }));
  };

  onDismiss = () => {
    this.setOpen(false);
  };

  render() {
    const { open } = this.state;
    const { isBottomSheetOpen } = this.state;
    return (
      <React.Fragment>
        <div className="app debug">
          <FullStory org={ORG_ID} />
        </div>
        {/* <Topbar
          OnSwingChange={this.handleSwingChange}
          defaultSwing={0}
          OnBpmChange={this.handleBpmChange}
          defaultBpm={bpm}
          OnVolumeChange={this.handleVolumeChange}
          defaultVolume={volume * 100}
          OnInstrumentChange={this.handleInstrumentChange}
          instrument={this.state.instrument}
        ></Topbar> */}
        {/* <LogoBig></LogoBig> */}
        <button
          className="button-open-settings"
          onClick={() => this.setOpen(true)}
        >
          Settings
        </button>
        {/* <Button
          aria-label="Open settings"
          className="btn-volume btn-topbar btn-rounded "
          onClick={() => this.setOpen(true)}
        >
          Open
        </Button> */}
        <BottomSheet
          open={open}
          className={"settings-card"}
          onDismiss={() => this.setOpen(false)}
          // snapPoints={({ maxHeight }) => [
          //   maxHeight - maxHeight / 10,
          //   maxHeight / 4,
          //   maxHeight * 0.6,
          // ]}
        >
          <SettingsSheet
            ToggleBottomSheet={() => this.setOpen(false)}
            defaultTempo={bpm}
            OnTempoChange={this.handleBpmChange}
            defaultSwing={0}
            OnSwingChange={this.handleSwingChange}
            defaultVolume={volume * 100}
            OnVolumeChange={this.handleVolumeChange}
            instrument={this.state.instrument}
            OnInstrumentChange={this.handleInstrumentChange}
          ></SettingsSheet>
        </BottomSheet>
        <List
          className={"song-list preload"}
          height={900} // Set an appropriate height for the list
          itemCount={SongsData.length}
          itemSize={getItemSize}
          itemData={{
            ...SongsData,
            OnBpmChange: this.handleBpmChange,
            OnPlayPause: this.handlePlayPause,
            isPlaying: this.isPlaying.bind(this),
          }}
          width={"100%"}
        >
          {Row}
        </List>
        {/* </div> */}
      </React.Fragment>
    );
  }

  isPlaying(songId) {
    return this.state.songPlaying == songId ? true : false;
  }
}

export default App;
