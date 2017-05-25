'use strict';

let Event = {
    PLAY_STATUS: 'PLAY_STATUS',
    //video playing
    VIDEO_PLAY: 'VIDEO_PLAY',
    //video stop
    VIDEO_STOP: 'VIDEO_STOP',
    //multi videos
    MULTI_VIDEOS: 'MULTI_VIDEOS',
    //stop stream
    ANCHOR_STOP: 'ANCHOR_STOP',
    //no video
    NO_VIDEO: 'NO_VIDEO',
    //flv url unavailable
    FLV_URL_UNAVAILABLE: 'FLV_URL_UNAVAILABLE',
    //html5 player error
    H5_PLAYER_ERROR: 'H5_PLAYER_ERROR'
};

let Status = {
    //视频正在播放
  
};

export default Event;
export { Event, Status };
