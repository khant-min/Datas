import Nav from "./Nav";
import ImgSec from "./ImgSec";
import Login from "./Login";
import SideNav from "./SideNav";
import { useState } from "react";

const App = () => {
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <div className="min-h-screen h-[2000px] min-w-full">
      {openSideNav && <SideNav setOpenSideNav={setOpenSideNav} />}
      <header className="border border-slate-600 ">
        <Nav setOpenSideNav={setOpenSideNav} />
      </header>
      <Login />
      {/* <ImgSec /> */}
    </div>
  );
};

export default App;
