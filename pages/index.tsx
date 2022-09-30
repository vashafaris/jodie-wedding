import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex flex-col min-h-screen flex-1 items-center justify-center">
      <h1 className="text-4xl font-bold">
        Welcome to <a href="https://nextjs.org">Next.js Starter Template!</a>
      </h1>
    </main>
  );
};

export default Home;
