import React from 'react';
import useSWR from 'swr';
import Spinner from '../components/common/controls/spinner';
import { MOCK_URL } from '../configs/AppConfig';

export default () => {
  const { data, error } = useSWR(`${MOCK_URL}/api/v1/lonnie/profile`);

  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;

  return data;
};
