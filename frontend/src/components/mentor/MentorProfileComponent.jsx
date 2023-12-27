import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import axiosInstance from '../../axios/mentoraxios';

export default function MentorProfile() {
  const [mentorDetails, setMentorDetails] = useState({
    fullName: '',
    email: '',
    age: '',
    address: '',
  });

  useEffect(() => {
    const userObj = Cookies.get('userDetails');
    if (userObj) {
      const { name, email, age, address } = JSON.parse(userObj);
      setMentorDetails({
        fullName: name,
        email: email,
        age: age,
        address: address,
      });
    }
  }, []);

  return (
    <BoxContainer>
      <h2>Mentor Profile</h2>
      <ProfileDetails>
        <div>
          <strong>Full Name:</strong> {mentorDetails.fullName}
        </div>
        <div>
          <strong>Email:</strong> {mentorDetails.email}
        </div>
        <div>
          <strong>Age:</strong> {mentorDetails.age}
        </div>
        <div>
          <strong>Address:</strong> {mentorDetails.address}
        </div>
      </ProfileDetails>
    </BoxContainer>
  );
}

const BoxContainer = styled.div`
  border: 2px solid black;
  padding: 100px;
  text-align: center;
  margin: 70px;
`;

const ProfileDetails = styled.div`
  margin-top: 20px;
`;
