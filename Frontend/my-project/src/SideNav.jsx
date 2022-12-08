const SideNav = ({ setOpenSideNav }) => {
  return (
    <nav className="fixed w-[20rem] min-h-full bg-slate-400 z-10">
      <button onClick={() => setOpenSideNav(false)}>
        <i className="fa-sharp fa-solid fa-arrow-left"></i>
      </button>
      Hello World
    </nav>
  );
};

export default SideNav;
