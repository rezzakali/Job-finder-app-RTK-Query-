import React from 'react';

function Project({ project }) {
  const { projectName, colorClass } = project;

  const handleClick = (project) => {};

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={colorClass}
        defaultChecked
        onClick={() => handleClick(project)}
      />
      <p className="label">{projectName}</p>
    </div>
  );
}

export default Project;
