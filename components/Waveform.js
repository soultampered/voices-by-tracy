'use client'
import { useEffect, useRef, useState } from 'react';

const BAR_COUNT = 64;

export default function Waveform({ src, progress = 0, onSeek, height = 48, className = '' }) {
    const [peaks, setPeaks] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        let cancelled = false;
        setPeaks(null);

        async function decode() {
            let ctx;
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (!AudioContextClass) throw new Error('Web Audio API unavailable');
                ctx = new AudioContextClass();
                const response = await fetch(src, { mode: 'cors' });
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
                const channelData = audioBuffer.getChannelData(0);
                const blockSize = Math.max(1, Math.floor(channelData.length / BAR_COUNT));
                const extracted = [];
                for (let i = 0; i < BAR_COUNT; i++) {
                    const start = i * blockSize;
                    let sum = 0;
                    for (let j = 0; j < blockSize; j++) {
                        sum += Math.abs(channelData[start + j] || 0);
                    }
                    extracted.push(sum / blockSize);
                }
                const max = Math.max(...extracted, 0.0001);
                const normalized = extracted.map((v) => Math.max(0.08, v / max));
                if (!cancelled) setPeaks(normalized);
            } catch (err) {
                // Decode can fail on CORS-restricted or unsupported sources — fall back
                // to a neutral flat waveform rather than a blank/broken player.
                if (!cancelled) setPeaks(new Array(BAR_COUNT).fill(0.35));
            } finally {
                // Close regardless of success/failure — an uncaught decode error used to
                // leak the AudioContext instead of releasing it.
                ctx?.close();
            }
        }

        decode();
        return () => {
            cancelled = true;
        };
    }, [src]);

    const handleClick = (e) => {
        if (!onSeek || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const fraction = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        onSeek(fraction);
    };

    const bars = peaks || new Array(BAR_COUNT).fill(0.2);

    return (
        <div
            ref={containerRef}
            onClick={handleClick}
            className={`flex items-end gap-[2px] cursor-pointer ${className}`}
            style={{ height }}
            role="slider"
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
        >
            {bars.map((v, i) => {
                const played = i / BAR_COUNT < progress;
                return (
                    <span
                        key={i}
                        className={`flex-1 rounded-sm ${played ? 'bg-teal-400' : 'bg-neutral-700'}`}
                        style={{ height: `${Math.round(v * 100)}%` }}
                    />
                );
            })}
        </div>
    );
}
