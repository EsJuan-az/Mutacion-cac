import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function MutacionTemplate({ children, audio='#' }) {
  return (
    <section className="w-3/4 pl-5 pb-2 text-xs justify-center pr-2">
      {children}
      <nav className='w-3/4 mt-5'>
        <AudioPlayer
          showJumpControls = {false}
          showDownloadProgress = {false}
          autoPlayAfterSrcChange = {false}
          src={audio}
          // other props here
        />
      </nav>

    </section>
  );
}

export default MutacionTemplate;