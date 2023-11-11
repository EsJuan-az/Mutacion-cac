
import colombia from './colombia.jpg'
import taxes from './taxes.jpg'
function ImageDisplay() {
  return (
    <figure className='absolute bottom-0 left-0 select-none'>
        <img className="block  w-1/4 z-[-1] grayscale " src={colombia} alt="Colombia" />
        <img className="block absolute bottom-0 left-0 w-1/4 z-[0] grayscale transition-opacity duration-500 opacity-0 hover:opacity-100" src={taxes} alt="Taxes" />
    </figure>
  )
}

export default ImageDisplay