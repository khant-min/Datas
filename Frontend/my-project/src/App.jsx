import Nav from "./Nav";
import ImgSec from "./ImgSec";
import Login from "./Login";
import SideNav from "./SideNav";
import { useState } from "react";

const App = () => {
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <div className="min-h-screen h-[2000px] min-w-full">
      <header className="border border-slate-600">
        {openSideNav && <SideNav setOpenSideNav={setOpenSideNav} />}
        <Nav setOpenSideNav={setOpenSideNav} />
      </header>
      {/* <Login /> */}
      <ImgSec />
    </div>
  );
};

export default App;

// https://www.cambounlock.com/?fbclid=IwAR1RHy8_fQn8rlu0HukBQ15GPJmxJsf_MwHViJI2nKmA7bSesorPmP650nk
