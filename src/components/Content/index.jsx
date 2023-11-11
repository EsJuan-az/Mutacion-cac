import { BsFillPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs'
function Content({children, current=false, click}) {
  return (
    <li onClick = {click} className="h-12  flex items-center hover:cursor-pointer justify-between border-b border-b-[#e1e1e1] hover:opacity-50 p-2">
        <section className={`justify-self-start text-sm [&>p]:text-xs [&>p]:italic ${ current ? 'font-medium' : '' }`}>{children}</section>
        {
          current 
          ?
          <BsFillPlayCircleFill className='mr-3'/> 
          :
          <BsFillPauseCircleFill className='mr-3'/>
        }
    </li>
  );
}

export default Content;