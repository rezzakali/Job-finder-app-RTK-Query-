import React from 'react';
import ProjectsList from './ProjectsList';
import TeamMembers from './TeamMembers';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* projects list */}
      <ProjectsList />
      {/* <!-- Team Members --> */}
      <TeamMembers />
    </div>
  );
}

export default Sidebar;
