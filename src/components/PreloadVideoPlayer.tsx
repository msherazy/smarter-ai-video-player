import React from 'react';
import ReactPlayer from 'react-player';

interface PreloadVideoPlayerProps {
    url: string;
    preloadVideoRef: React.RefObject<ReactPlayer>;
}

const PreloadVideoPlayer: React.FC<PreloadVideoPlayerProps> = ({ url, preloadVideoRef }) => {
    return (
        <ReactPlayer
            ref={preloadVideoRef}
            url={url}
            playing={false}
            controls={false}
            style={{ display: 'none' }}
        />
    );
};

export default PreloadVideoPlayer;