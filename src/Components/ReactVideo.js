import { FaPlayCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player/lazy';
const url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U';

const ReactVideo = () => {
    return ( 

      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={url}
          muted={true}
          controls={true}
          light='https://picsum.photos/200/300'
          playIcon={<FaPlayCircle style={{color: '#2e2ecc', fontSize: "3rem"}} />}
          width='100%'
          height='100%'
        />
      </div>
    );
}
 
export default ReactVideo;