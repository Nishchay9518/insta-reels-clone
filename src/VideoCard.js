import React, { useRef , useState } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({url, likes,shares,avatarSrc, channel,song}) {
    const [isVideoPlaying,setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if(isVideoPlaying){
            videoRef.current.pause();
            setIsVideoPlaying(false)
        }else{
            videoRef.current.play();
            setIsVideoPlaying(true)
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader/>
            <video 
            ref={videoRef}
            onClick={onVideoPress}
            className='video-player'
            src={url}
            loop
            />
            <VideoFooter
             channel={channel}
             avatarSrc={avatarSrc}
             song={song}
             likes={likes}
             shares={shares}
             />
        </div>
    )
}

export default VideoCard

