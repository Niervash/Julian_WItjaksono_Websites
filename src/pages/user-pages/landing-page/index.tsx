import React from "react";
import { UserLayout } from "../../../layout";
import {
  AboutMe,
  CertificatesPage,
  ProjectsPage,
  ToolsCarousel,
} from "../../../component";
import { ContactSection } from "../../../component/contact";

interface props {}

const LandingPages: React.FC<props> = () => {
  return (
    <>
      <UserLayout>
        <AboutMe />
        <ToolsCarousel />
        <CertificatesPage />
        <ProjectsPage />
        <ContactSection />
      </UserLayout>
    </>
  );
};

export default LandingPages;
