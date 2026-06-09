import React from "react";
import { Footer, NavbarMain } from "../../component";

interface props {
  children: any;
}

const UserLayout: React.FC<props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-primary selection:text-white">
      <NavbarMain />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default UserLayout;
