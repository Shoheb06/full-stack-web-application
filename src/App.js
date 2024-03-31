import logo from './logo.svg';
import './App.css';
// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, createTeam } from './features/users/usersSlice'; // Adjust the path as necessary
import UserCard from './components/UserCard';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import TeamCreation from './components/TeamCreation';
import TeamDetails from './components/TeamDetails';

// Your App component code here
const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const teams = useSelector((state) => state.teams);
 
  useEffect(() => {
     dispatch(fetchUsers());
  }, [dispatch]);
 
  const handlePageChange = (page) => {
     dispatch(fetchUsers(page));
  };
 
  const handleFilterChange = (filterType, value) => {
     // Implement filter logic here
  };
 
  const handleTeamCreate = (selectedUsers) => {
     // Implement team creation logic here
  };
 
  return (
     <div>
       <SearchBar onSearch={handleFilterChange} />
       <Filter options={['Option 1', 'Option 2']} selectedOption="" onFilterChange={handleFilterChange} />
       <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
       {users.map((user) => (
         <UserCard key={user.id} user={user} />
       ))}
       <TeamCreation users={users} onTeamCreate={handleTeamCreate} />
       {teams.map((team) => (
         <TeamDetails key={team.id} team={team} />
       ))}
     </div>
  );
 };
 
 export default App;


