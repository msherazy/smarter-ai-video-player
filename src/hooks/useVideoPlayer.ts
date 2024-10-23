import { useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Recording } from '../types/video.ts';

export const useVideoPlayer = (recordings: Recording[]) => {
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [playedSeconds, setPlayedSeconds] = useState(0);
	const [elapsedTime, setElapsedTime] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);
	const [preloadNext, setPreloadNext] = useState(true);

	const videoPlayerRef = useRef<ReactPlayer>(null);
	const preloadVideoRef = useRef<ReactPlayer>(null);

	const handleVideoEnded = useCallback(() => {
		const currentVideoDuration =
			(recordings[currentVideoIndex].endTimestamp -
				recordings[currentVideoIndex].startTimestamp) /
			1000;

		if (currentVideoIndex < recordings.length - 1) {
			setElapsedTime(prev => prev + currentVideoDuration);
			setCurrentVideoIndex(prev => prev + 1);
		} else {
			setIsPlaying(false);
			setIsCompleted(true);
		}
	}, [currentVideoIndex, recordings]);


	useEffect(() => {
		if (currentVideoIndex < recordings.length - 1) {
			const currentVideoDuration =
				(recordings[currentVideoIndex].endTimestamp -
					recordings[currentVideoIndex].startTimestamp) /
				1000;
			if (playedSeconds > elapsedTime + currentVideoDuration - 5) {
				setPreloadNext(true);
			} else {
				setPreloadNext(false);
			}
		}
	}, [playedSeconds, currentVideoIndex, recordings, elapsedTime]);

	// Toggle Play/Pause
	const togglePlayPause = useCallback(() => {
		if (isCompleted) {
			setCurrentVideoIndex(0);
			setElapsedTime(0);
			setPlayedSeconds(0);
			setIsCompleted(false);
		}
		setIsPlaying(prev => !prev);
	}, [isCompleted]);

	// Seek handling
	const handleSeek = useCallback(
		(seekTime: number) => {
			let accumulatedTime = 0;
			let targetVideoIndex = 0;
			let targetVideoSeekTime = 0;

			for (let i = 0; i < recordings.length; i++) {
				const videoDuration =
					(recordings[i].endTimestamp - recordings[i].startTimestamp) / 1000;
				if (
					seekTime >= accumulatedTime &&
					seekTime < accumulatedTime + videoDuration
				) {
					targetVideoIndex = i;
					targetVideoSeekTime = seekTime - accumulatedTime;
					break;
				}
				accumulatedTime += videoDuration;
			}

			setCurrentVideoIndex(targetVideoIndex);
			setElapsedTime(accumulatedTime);
			setPlayedSeconds(Math.floor(seekTime));

			setTimeout(() => {
				videoPlayerRef.current?.seekTo(targetVideoSeekTime, 'seconds');
			}, 100);
		},
		[recordings],
	);

	return {
		currentVideoIndex,
		isPlaying,
		playedSeconds,
		preloadNext,
		togglePlayPause,
		handleSeek,
		handleVideoEnded,
		videoPlayerRef,
		preloadVideoRef,
		isCompleted,
		setIsCompleted,
		setPlayedSeconds,
		elapsedTime,
	};
};
