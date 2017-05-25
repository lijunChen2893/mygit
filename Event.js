'use strict';

let Event = {

};

let Status = {
    //视频正在播放
    VIDEO_PLAYING: 'VIDEO_PLAYING',
    //视频停止播放
    VIDEO_STOP: 'VIDEO_STOP',
    //视频正在缓冲（开播后出现卡顿，进行缓冲）
    VIDEO_CACHING: 'VIDEO_CACHING',
    //视频正在加载（还未开播，加载中）
    VIDEO_LOADING: 'VIDEO_LOADING',

    //音频正在播放
    AUDIO_START: 'AUDIO_START',
    //音频停止播放
    AUDIO_STOP: 'AUDIO_STOP'
};

export default Event;
export { Event, Status };
