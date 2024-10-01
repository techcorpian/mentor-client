import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignStudents = () => {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mentorResponse = await axios.get('http://localhost:3000/mentor');
      const studentResponse = await axios.get('http://localhost:3000/students/no-mentor');
      setMentors(mentorResponse.data);
      setStudents(studentResponse.data);
    };
    fetchData();
  }, []);

  const handleAssign = async () => {
    try {
      await axios.post('http://localhost:3000/assign-student', {
        mentorId: selectedMentor,
        studentIds: selectedStudents,
      });
      alert('Students assigned successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to assign students.');
    }
  };

  return (
    <div>
      <h2>Assign Students to Mentor</h2>
      <select onChange={(e) => setSelectedMentor(e.target.value)}>
        <option value="">Select Mentor</option>
        {mentors.map((mentor) => (
          <option key={mentor._id} value={mentor._id}>
            {mentor.name}
          </option>
        ))}
      </select>

      <h3>Select Students:</h3>
      {students.map((student) => (
        <div key={student._id}>
          <input
            type="checkbox"
            value={student._id}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedStudents([...selectedStudents, student._id]);
              } else {
                setSelectedStudents(selectedStudents.filter((id) => id !== student._id));
              }
            }}
          />
          {student.name}
        </div>
      ))}

      <button onClick={handleAssign}>Assign</button>
    </div>
  );
};

export default AssignStudents;
