import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function MutacionTemplate({ children, audio='#', title, author }) {
  return (
    <section className="w-3/4 pl-5 pb-2 text-xs justify-center pr-2">
      <h2 className="paladark text-xl">{title}:</h2>
      <h4 className="paladark text-xs mt-[-3px]">Por { author }</h4>

      <span className=" mt-2 inline-block max-h-32 p-2 border-slate-500 border-[2px] rounded-tl-2xl rounded-bl-2xl overflow-y-scroll py-4">
        {children}
      </span>
      <nav className='w-3/4 mt-2'>
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