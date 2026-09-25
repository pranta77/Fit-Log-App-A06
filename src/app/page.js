import Banner from '@/components/Banner/Banner';
import React from 'react';
import WorkoutPage from './workout/page';

const page = () => {
  return (
    <div>
      <Banner/>
       <section id="library">
        <WorkoutPage/>
      </section>
      
    </div>
  );
};

export default page;