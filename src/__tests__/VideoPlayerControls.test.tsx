import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoPlayerControls from '../components/VideoPlayerControls';

describe('VideoPlayerControls', () => {
    it('should match the snapshot', () => {
        const { asFragment } = render(
            <VideoPlayerControls
                isPlaying={false}
                isCompleted={false}
                playedSeconds={0}
                totalDuration={0}
                togglePlayPause={() => {}}
                handleSeek={() => {}}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
