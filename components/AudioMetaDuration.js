'use client'
import { useState } from 'react';

function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

export default function AudioMetaDuration({ src }) {
    const [duration, setDuration] = useState(null);

    return (
        <>
            <audio
                src={src}
                preload="metadata"
                className="hidden"
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            />
            <span>{duration ? formatDuration(duration) : '—'}</span>
        </>
    );
}
