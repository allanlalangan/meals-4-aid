import PostsFeed from '../../components/PostsFeed';

const DashboardPage = () => {
  return (
    <main className='flex flex-col w-full p-4'>
      <h2>Dashboard</h2>
      <PostsFeed />
    </main>
  );
};
export default DashboardPage;
