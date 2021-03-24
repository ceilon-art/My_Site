import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>André Luiz</title>
      </Head>

      <Navbar />
    </>
  )
}

export default Home