// src/components/Filter.js
import React from 'react';

const Filter = ({ options, selectedOption, onFilterChange }) => (
 <select value={selectedOption} onChange={(e) => onFilterChange(e.target.value)}>
    <option value="">Select an option</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
 </select>
);

export default Filter;
