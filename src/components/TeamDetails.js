// src/components/TeamDetails.js
import React from 'react';

const TeamDetails = ({ team }) => (
 <div>
    <h2>Team Details</h2>
    {team.users.map((user) => (
      <div key={user.id}>{user.name}</div>
    ))}
 </div>
);

export default TeamDetails;
