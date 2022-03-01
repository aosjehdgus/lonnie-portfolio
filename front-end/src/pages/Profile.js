import React from 'react';
import useSWR from 'swr';
import { MOCK_URL } from '../configs/AppConfig';
import Spinner from '../components/common/controls/spinner';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Profile = () => {
  const { data, error } = useSWR(`${MOCK_URL}/api/v1/lonnie/profile`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;

  const { name, university, github, blog } = data;

  return (
    <div>
      <h1>Profile</h1>
      <p>{name}</p>
      <p>{university.name}</p>
      <p>
        {university.grade}/{university.totalGrade}
      </p>
      <p>{github}</p>
      <p>{blog}</p>
    </div>
  );
};

export default Profile;
