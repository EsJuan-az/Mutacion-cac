
import Header from '../Header';
import colombia from '../../assets/colombia.jpg';
import taxes from '../../assets/taxes.jpg';
function ImageDisplay() {
  return (
    <figure className='absolute bottom-0 left-0 select-none z-[-10] w-1/4'>
        <img className="block  w-full z-[-1] grayscale " src={colombia} alt="Colombia" />
        <img className="block absolute bottom-0 left-0 w-full z-[0] grayscale transition-opacity duration-500 opacity-0 hover:opacity-100" src={taxes} alt="Taxes" />
        <Header/>
    </figure>
  );
}

export default ImageDisplay;