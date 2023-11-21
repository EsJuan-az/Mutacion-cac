import s1 from '../../assets/scribble1.png';
import s2 from '../../assets/scribble2.png';
function index() {
  return (
    <>
        <img className='w-28 absolute right-56 bottom-10 select-none  opacity-30' src={s2} alt="scribble" />
        <img className='w-28 absolute top-44 left-64 select-none opacity-30' src={s1} alt="scribble" />
    </>
  );
}

export default index;