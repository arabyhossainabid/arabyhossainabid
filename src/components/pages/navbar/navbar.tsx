"use client";
import { NavMenu } from "./nav-menu";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full p-4 z-50">
      <div className="container flex flex-row items-center justify-center mx-auto gap-4">
        <div className="flex flex-row items-center gap-12 scale-[0.85] sm:scale-95 md:scale-100 lg:scale-100">
          <NavMenu style="gap-12" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
