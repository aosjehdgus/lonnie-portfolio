import useSWR from 'swr';

export default () => {
  const { data, error } = useSWR('/api/project');
  // console.log('data :', data);
  return {
    project: data,
    isLoading: !error && !data,
    isError: error,
  };
};
