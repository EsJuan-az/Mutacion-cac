import s1 from './scribble1.png'
import s2 from './scribble2.png'
function index() {
  return (
    <>
        <img className='w-28 absolute right-96 bottom-5' src={s2} alt="scribble" />
        <img className='w-28 absolute top-20 right-5' src={s1} alt="scribble" />
    </>
  )
}

export default index