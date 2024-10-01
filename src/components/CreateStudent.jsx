import React, { useState } from 'react';
import axios from 'axios';

const CreateStudent = () => {
  const [name, setName] = useState('');

  const createStudent = async () => {
    try {
      const response = await axios.post('http://localhost:3000/student', { name });
      alert(`Student ${response.data.name} created successfully!`);
    } catch (error) {
      console.error(error);
      alert('Failed to create student.');
    }
  };

  return (
    <div>
      <h2>Create Student</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      />
      <button onClick={createStudent}>Create Student</button>
    </div>
  );
};

export default CreateStudent;
