import React from 'react';
import { formatTime } from '../utils/time';

interface ControlsProps {
    isPlaying: boolean;
    isCompleted: boolean;
    playedSeconds: number;
    totalDuration: number;
    togglePlayPause: () => void;
    handleSeek: (value: number) => void;
}

const VideoPlayerControls: React.FC<ControlsProps> = ({ isPlaying, isCompleted, playedSeconds, totalDuration, togglePlayPause, handleSeek }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="text-sm text-gray-600">{formatTime(playedSeconds)}</div>
            <div className="flex items-center w-4/5 mx-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                    onClick={togglePlayPause}
                >
                    {isPlaying ? 'Pause' : isCompleted ? 'Restart' : 'Play'}
                </button>
                <input
                    type="range"
                    className="flex-grow"
                    min="0"
                    max={totalDuration}
                    value={playedSeconds}
                    onChange={e => handleSeek(parseFloat(e.target.value))}
                />
            </div>
            <div className="text-sm text-gray-600">{formatTime(totalDuration)}</div>
        </div>
    );
};

export default VideoPlayerControls;