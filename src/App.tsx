import recordingsData from './data/recordings.json';
import { useVideoPlayer } from './hooks/useVideoPlayer';
import { useTotalDuration } from './hooks/useTotalDuration';
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
		<div className="w-screen h-screen flex flex-col items-center justify-center p-4">
			<div className="size-fit relative">
				<VideoPlayer
					url={recordings[currentVideoIndex].url}
					isPlaying={isPlaying}
					onEnded={handleVideoEnded}
					onProgress={progress => setPlayedSeconds(elapsedTime + progress.playedSeconds)}
					videoPlayerRef={videoPlayerRef}
				/>
			</div>

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
	);
};

export default App;