import React from "react";
import { UserLayout } from "../../../layout";
import { ProjectDetailPage } from "../../../component";

interface props {}

const ProjectPages: React.FC<props> = () => {
  return (
    <div>
      <UserLayout>
        <ProjectDetailPage />
      </UserLayout>
    </div>
  );
};

export default ProjectPages;
