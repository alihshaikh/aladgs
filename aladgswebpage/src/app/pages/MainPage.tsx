import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const MainPage: NextPage = () => {
  return (
    <div>

      <div className='flex flex-col md:flex-row justify-center mx-auto h-auto md:h-16 space-y-4 md:space-y-0 md:space-x-8 p-12'>
        <Card
          imageFile={"/images/magglass.png"}
          description="Analyze your business' digital presence and identify areas for improvement"
        />
        <Card
          imageFile={"/images/linechart.png"}
          description="Gain higher rates of customer engagement through modern digital designs"
        />
        <Card
          imageFile={"/images/linechart.png"}
          description="Gain higher rates of customer engagement through modern digital designs"
        />
      </div>
    </div>
  );
};

export default MainPage;
