import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewStudents = () => {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const mentorResponse = await axios.get('http://localhost:3000/mentor');
      setMentors(mentorResponse.data);
    };
    fetchMentors();
  }, []);

  const fetchStudents = async () => {
    if (selectedMentor) {
      const response = await axios.get(`http://localhost:3000/mentor/${selectedMentor}/students`);
      setStudents(response.data);
    }
  };

  return (
    <div>
      <h2>View Students for a Mentor</h2>
      <select onChange={(e) => setSelectedMentor(e.target.value)}>
        <option value="">Select Mentor</option>
        {mentors.map((mentor) => (
          <option key={mentor._id} value={mentor._id}>
            {mentor.name}
          </option>
        ))}
      </select>
      <button onClick={fetchStudents}>View Students</button>

      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewStudents;
