// src/components/UserCard.js
const UserCard = ({ user }) => (
    <div className="card">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.domain}</p>
      <p>{user.gender}</p>
      <p>{user.availability}</p>
    </div>
  );
  
  export default UserCard;
  