'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/AudioPlayer.module.css";
import { FaPlay, FaPause, FaDownload } from "react-icons/fa";
import Waveform from "@components/Waveform";

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

const DemoPlayer = ({audioSample, filterState = false, setFilterState = () => {}, title, onPlayStateChange, hideDownload = false, showTime = false, waveformHeight = 32}) => {

    // State
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isDownloadDisabled, setIsDownloadDisabled] = useState(false);

    //references
    const audioPlayer = useRef(); //reference for audio component
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
    };

    const togglePlayPause = () => {
        const prevValue = isPlaying;

        setIsPlaying(!prevValue);
        onPlayStateChange?.(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        setCurrentTime(audioPlayer.current.currentTime);
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const handleSeek = (fraction) => {
        if (!duration) return;
        const seekTime = fraction * duration;
        audioPlayer.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    }

    const handleDownloadClick = () => {
        setIsDownloadDisabled(true);
        setTimeout(()=> {
            setIsDownloadDisabled(false);
        }, 5000);
    }

    const progress = duration ? currentTime / duration : 0;

    return (
        <div>
            <div className={styles.audioPlayer}>
                <audio ref={audioPlayer} src={audioSample} preload="metadata" crossOrigin="anonymous" onLoadedMetadata={onLoadedMetadata}></audio>
                <button onClick={togglePlayPause} className={styles.playPause} aria-label={isPlaying ? "PauseButton" : "PlayButton"}>
                    {isPlaying ? <FaPause/> : <FaPlay/>}
                </button>
                <Waveform src={audioSample} progress={progress} onSeek={handleSeek} height={waveformHeight} className="flex-1 mx-2" />
                {!hideDownload && (
                    <a href={audioSample} download onClick={handleDownloadClick} className={styles.downloadButton} aria-label={`${title} download button`}>
                            <FaDownload/>
                    </a>
                )}
            </div>
            {showTime && (
                <div className="flex justify-between text-xs text-neutral-400 font-mono mt-1.5">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            )}
        </div>
    )
}

export default DemoPlayer;
