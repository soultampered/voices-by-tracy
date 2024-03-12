import React, {useState, useRef, useEffect} from 'react';
import styles from "../styles/AudioPlayer.module.css";
import {FaPlay,FaPause} from "react-icons/fa";

const DemoPlayer = ({audioSample, filterState, setFilterState}) => {

    // State
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    //references
    const audioPlayer = useRef(); //reference for our audio component
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
        progressBar.current.style.setProperty('seek-before-width',`${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    return (
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer} src={audioSample} preload="metadata" onLoadedMetadata={onLoadedMetadata}></audio>

            {/*progress bar*/}
            <div>
                <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange}/>
            </div>

            <div className='flex items-center'>
                <button onClick={togglePlayPause} className={styles.playPause}>
                    {isPlaying ? <FaPause /> : <FaPlay/>}
                </button>

                {/*current time*/}
                <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

                {/*duration*/}
                <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
            </div>
        </div>
        )
}

export default DemoPlayer;