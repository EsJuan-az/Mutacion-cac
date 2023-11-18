
function MainSection({ children }) {
  return (
    <section className='absolute bottom-0 right-0 w-9/12 h-1/2 flex gap-1 justify-around items-end'>
        { children }
    </section>
  );
}

export default MainSection;