import recordingsData from './data/recordings.json';
import {useVideoPlayer} from './hooks/useVideoPlayer';
import {useTotalDuration} from './hooks/useTotalDuration';
import VideoPlayer from './components/VideoPlayer';
import PreloadVideoPlayer from './components/PreloadVideoPlayer';
import VideoPlayerControls from "./components/VideoPlayerControls.tsx";

const App = () => {
    const recordings = recordingsData.recordings;
    const totalDuration = useTotalDuration(recordings);

    const {
        currentVideoIndex,
        isPlaying,
        playedSeconds,
        preloadNext,
        togglePlayPause,
        handleSeek,
        handleVideoEnded,
        setPlayedSeconds,
        isCompleted,
        videoPlayerRef,
        preloadVideoRef,
        elapsedTime,
    } = useVideoPlayer(recordings);

    return (
        <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-gray-100 rounded-lg shadow-lg px-4 sm:px-6 mx-auto">
            <div className="flex justify-center py-4">
                <img
                    src={'logo.png'}
                    alt="Smarter AI Logo"
                    className="h-10 object-contain"
                />
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
                <VideoPlayer
                    url={recordings[currentVideoIndex].url}
                    isPlaying={isPlaying}
                    onEnded={handleVideoEnded}
                    onProgress={progress => setPlayedSeconds(elapsedTime + progress.playedSeconds)}
                    videoPlayerRef={videoPlayerRef}
                />

                {preloadNext && currentVideoIndex < recordings.length - 1 && (
                    <PreloadVideoPlayer
                        url={recordings[currentVideoIndex + 1].url}
                        preloadVideoRef={preloadVideoRef}
                    />
                )}

                <VideoPlayerControls
                    isPlaying={isPlaying}
                    isCompleted={isCompleted}
                    playedSeconds={playedSeconds}
                    totalDuration={totalDuration}
                    togglePlayPause={togglePlayPause}
                    handleSeek={handleSeek}
                />
            </div>
        </div>
    );
};

export default App;