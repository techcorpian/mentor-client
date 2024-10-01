import React from 'react';
import CreateMentor from './components/CreateMentor';
import CreateStudent from './components/CreateStudent';
import AssignStudents from './components/AssignStudents';
import ViewStudents from './components/ViewStudents';

const App = () => {
  return (
    <div>
      <h1>Mentor-Student Management System</h1>
      <CreateMentor />
      <CreateStudent />
      <AssignStudents />
      <ViewStudents />
    </div>
  );
};

export default App;
