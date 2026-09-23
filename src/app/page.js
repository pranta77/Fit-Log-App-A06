import Banner from '@/components/Banner/Banner';
import React from 'react';
import WorkoutPage from './workout/page';

const page = () => {
  return (
    <div>
      <Banner/>
      <WorkoutPage/>
    </div>
  );
};

export default page;