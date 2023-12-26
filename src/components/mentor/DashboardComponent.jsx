import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaVideo, FaUser } from 'react-icons/fa';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const MentorDashboard = () => {
  const [classStarted, setClassStarted] = useState(false);
  const enrolledUsers = [
    {
      id: 1,
      studentName: 'Dummy User',
      enrolledClass: 'Cooking and Culinary Basics',
      scheduledTime: new Date('2023-12-24T11:44:00'), // Replace with the actual scheduled time
    },
    {
      id: 2,
      studentName: 'Jane Doe',
      enrolledClass: 'Setting Up Kitchen Skills',
      scheduledTime: new Date('2023-01-01T12:00:00'), // Replace with the actual scheduled time
    },
  ];

  const handleVideoCallClick = (user) => {
    const currentTime = new Date();

    if (!classStarted && currentTime < user.scheduledTime) {
      alert("The class hasn't started yet.");
    } else {
      const timeDifference = currentTime - user.scheduledTime;
      const minutesDifference = Math.floor(timeDifference / (1000 * 60));

      if (minutesDifference <= 15) {
        // Video call initiated within 15 minutes of the scheduled time
        alert('Video call initiated for user:', user);
      } else {
        // Video call initiated after 15 minutes, mark as completed
        alert('Video call completed for user:', user);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '-45px' }}>
        <h3 style={{ margin: 0, marginRight: '10px' }}>ENROLLED STUDENTS</h3>
        <GroupAddIcon color="black" size={20} />
      </div>

      <Table striped bordered hover style={{ width: '130%', margin: 'auto', marginTop: 45 }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Enrolled Class</th>
            <th>Student Details</th>
            <th>Time Booked</th>
            <th>Go Live</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No Students Enrolled
              </td>
            </tr>
          ) : (
            enrolledUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.studentName}</td>
                <td>{user.enrolledClass}</td>
                <td>
                  <FaUser color="black" size={15} />{' '}
                  <a href={`/user-details/${user.id}`}>View Details</a>
                </td>
                <td>{user.scheduledTime.toLocaleString()}</td>
                <td>
                  {new Date() >= user.scheduledTime && (
                    <span
                      style={{
                        fontWeight: new Date() >= user.scheduledTime + 15 * 60 * 1000 ? 'normal' : 'bold',
                        cursor: 'pointer',
                        textDecoration: new Date() >= user.scheduledTime + 15 * 60 * 1000 ? 'line-through' : 'underline',
                      }}
                      onClick={() => handleVideoCallClick(user)}
                    >
                      {new Date() >= user.scheduledTime + 15 * 60 * 1000 ? 'Cancelled' : 'Video Call'}
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default MentorDashboard;
