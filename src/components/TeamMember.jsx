import React from 'react';

function TeamMember({ teamMember }) {
  const { name, avatar } = teamMember;

  return (
    <div className="checkbox-container">
      <img src={avatar} className="team-avater" />
      <p className="label">{name}</p>
    </div>
  );
}

export default TeamMember;
