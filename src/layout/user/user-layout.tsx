import React from "react";
import { Footer, NavbarMain } from "../../component";

interface props {
  children: any;
}

const UserLayout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <NavbarMain />
      <section className="mt-10 relative min-h-screen hero-gradient overflow-hidden ">
        {children}
      </section>
      <Footer />
    </div>
  );
};
export default UserLayout;
