import React from 'react';
import poster from '../assets/poster.jpg';

export function EpisodePlayer({ src, title }: { src: string; title: string }) {
    return <video controls playsInline preload="none" poster={poster} src={src} aria-label={title} />;
}
