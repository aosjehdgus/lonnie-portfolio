import React from 'react';
import useSWR from 'swr';
import { MOCK_URL } from '../configs/AppConfig';

const Profile = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error } = useSWR(`${MOCK_URL}/api/v1/lonnie/profile`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      <h1>Profile</h1>
      <p>{data.name}</p>
    </div>
  );
};

export default Profile;
