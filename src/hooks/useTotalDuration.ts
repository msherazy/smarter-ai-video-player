import { useMemo } from 'react';
import { Recording } from '../types/video.ts';

export const useTotalDuration = (recordings: Recording[]) => {
	return useMemo(() => {
		return Math.floor(
			recordings.reduce(
				(acc, video) =>
					acc + (video.endTimestamp - video.startTimestamp) / 1000,
				0,
			),
		);
	}, [recordings]);
};
