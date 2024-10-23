import ReactPlayer from 'react-player';
import recordingsData from './data/recordings.json';
import { useVideoPlayer } from './hooks/useVideoPlayer';
import { formatTime } from './utils/time.ts';
import { useTotalDuration } from './hooks/useTotalDuration.ts';

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
				<ReactPlayer
					ref={videoPlayerRef}
					url={recordings[currentVideoIndex].url}
					playing={isPlaying}
					controls={false}
					onEnded={handleVideoEnded}
					onProgress={progress => {
						setPlayedSeconds(elapsedTime + progress.playedSeconds);
					}}
				/>
			</div>

			{preloadNext && currentVideoIndex < recordings.length - 1 && (
				<ReactPlayer
					ref={preloadVideoRef}
					url={recordings[currentVideoIndex + 1].url}
					playing={false}
					controls={false}
					style={{ display: 'none' }}
				/>
			)}

			<div className="w-full flex items-center justify-between mt-4">
				<div className="text-sm">{formatTime(playedSeconds)}</div>
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
				<div className="text-sm">{formatTime(totalDuration)}</div>
			</div>
		</div>
	);
};

export default App;
