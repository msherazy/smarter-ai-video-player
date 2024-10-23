import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    url: string;
    isPlaying: boolean;
    onEnded?: () => void;
    onProgress?: (progress: { playedSeconds: number }) => void;
    videoPlayerRef: React.RefObject<ReactPlayer>;
    isPreload?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
                                                     url,
                                                     isPlaying,
                                                     onEnded,
                                                     onProgress,
                                                     videoPlayerRef,
                                                     isPreload = false
                                                 }) => {
    return (
        <div className="flex justify-center items-center bg-gray-800">
            <ReactPlayer
                ref={videoPlayerRef}
                url={url}
                playing={isPlaying}
                controls={false}
                onEnded={onEnded}
                onProgress={onProgress}
                style={isPreload ? {display: 'none'} : {}}
            />
        </div>
    );
};

export default VideoPlayer;