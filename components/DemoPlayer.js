import React, {useState, useRef} from 'react';
import '../../../../Desktop/old project/src/AudioPlayer.css';
import {BsArrowLeftShort} from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";
import {FaPlay} from "react-icons/fa";
import {FaPause} from "react-icons/fa";

const DemoPlayer = () => {

    // State
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    //references
    const audioPlayer = useRef(); //reference for our audio component
    const progressBar = useRef(); //reference to progress bar
    const animationRef = useRef(); //reference for animations


    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnedMinutes}:${returnedSeconds}`
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;

        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value) - 30;
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value) + 30;
        changeRange();
    }

    return (
        <div className='audioPlayer'>
            <audio ref={audioPlayer} src="/resources/audio/FightingMyself.m4a" preload="metadata" onLoadedMetadata={onLoadedMetadata}></audio>
            <button className='forwardBackward' onClick={backThirty}><BsArrowLeftShort />30</button>
            <button onClick={togglePlayPause} className='playPause'>
                {isPlaying ? <FaPause /> : <FaPlay className='play' />}
            </button>
            <button className='forwardBackward' onClick={forwardThirty}>30<BsArrowRightShort /></button>

            {/* current time */}
            <div className='currentTime'>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div>
                <input type="range" className='progressBar' defaultValue='0' ref={progressBar} onChange={changeRange} step='0.05'/>
            </div>

            {/* duration */}
            <div className='duration'>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </div>
        )
}

export default DemoPlayer;