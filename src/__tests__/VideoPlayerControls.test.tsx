import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoPlayerControls from '../components/VideoPlayerControls';

describe('VideoPlayerControls', () => {
    let togglePlayPauseMock: jest.Mock;
    let handleSeekMock: jest.Mock;
    let renderResult: RenderResult;

    beforeAll(() => {
        togglePlayPauseMock = jest.fn();
        handleSeekMock = jest.fn();
    });

    beforeEach(() => {
        renderResult = render(
            <VideoPlayerControls
                isPlaying={false}
                isCompleted={false}
                playedSeconds={0}
                totalDuration={100}
                togglePlayPause={togglePlayPauseMock}
                handleSeek={handleSeekMock}
            />
        );
    });

    it('should match the snapshot', () => {
        const { asFragment } = renderResult;
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call togglePlayPause when the play button is clicked', () => {
        const { getByText } = renderResult;
        fireEvent.click(getByText('Play'));
        expect(togglePlayPauseMock).toHaveBeenCalledTimes(1);
    });

    it('should call handleSeek with the correct value when the slider is changed', () => {
        const { getByRole } = renderResult;
        fireEvent.change(getByRole('slider'), { target: { value: '50' } });
        expect(handleSeekMock).toHaveBeenCalledWith(50);
    });
});
