import React, { useCallback, useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/college-video.mp4'



const Videoplayer = ({playState, setplayState}) => {

  const player = useRef(null);

  const closePlayer=(e)=> {
    if(e.target === player.current){
      setplayState(false);
    }
  }
  return (
    <div className={ `videoplayer  ${playState?'': 'hide'}`} ref={player} onClick={closePlayer} >
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
export default Videoplayer