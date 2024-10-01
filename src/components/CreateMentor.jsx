import React, { useState } from 'react';
import axios from 'axios';

const CreateMentor = () => {
  const [name, setName] = useState('');

  const createMentor = async () => {
    try {
      const response = await axios.post('http://localhost:3000/mentor', { name });
      alert(`Mentor ${response.data.name} created successfully!`);
    } catch (error) {
      console.error(error);
      alert('Failed to create mentor.');
    }
  };

  return (
    <div>
      <h2>Create Mentor</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Mentor Name"
      />
      <button onClick={createMentor}>Create Mentor</button>
    </div>
  );
};

export default CreateMentor;
