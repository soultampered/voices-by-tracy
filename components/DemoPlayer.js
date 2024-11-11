'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/AudioPlayer.module.css";
import { FaPlay, FaPause, FaDownload } from "react-icons/fa";

const DemoPlayer = ({audioSample, filterState, setFilterState}) => {

    // State
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isDownloadDisabled, setIsDownloadDisabled] = useState(false);

    //references
    const audioPlayer = useRef(); //reference for audio component
    const progressBar = useRef(); //reference to progress bar
    const animationRef = useRef(); //reference for animations

    useEffect(() => {
        onLoadedMetadata();
    }, [audioPlayer?.current?.readyState]);

    useEffect(() => {
            setFilterState(() => {
                return false;
            });
    }, [filterState, setFilterState]);

    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    };

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
        progressBar.current.style.setProperty('seek-before-width',`${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    const handleDownloadClick = () => {
        setIsDownloadDisabled(true);
        setTimeout(()=> {
            setIsDownloadDisabled(false);
        }, 5000);
    }

    return (
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer} src={audioSample} preload="metadata" onLoadedMetadata={onLoadedMetadata}></audio>
            <button onClick={togglePlayPause} className={styles.playPause}>
                {isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
            <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar}
                   onChange={changeRange}/>
            <button onClick={handleDownloadClick} className={styles.downloadButton}>
                <a href={audioSample} download>
                    { <FaDownload/> }
                </a>
            </button>
        </div>
        )
}

export default DemoPlayer;