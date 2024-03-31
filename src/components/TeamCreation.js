// src/components/TeamCreation.js
import React, { useState } from 'react';

const TeamCreation = ({ users, onTeamCreate }) => {
 const [selectedUsers, setSelectedUsers] = useState([]);

 const handleUserSelect = (userId) => {
    setSelectedUsers([...selectedUsers, userId]);
 };

 const handleTeamCreate = () => {
    onTeamCreate(selectedUsers);
 };

 return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <input
            type="checkbox"
            id={`user-${user.id}`}
            checked={selectedUsers.includes(user.id)}
            onChange={() => handleUserSelect(user.id)}
          />
          <label htmlFor={`user-${user.id}`}>{user.name}</label>
        </div>
      ))}
      <button onClick={handleTeamCreate}>Create Team</button>
    </div>
 );
};

export default TeamCreation;
