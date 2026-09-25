import Banner from '@/components/Banner/Banner';
import React from 'react';
import WorkOut from '@/components/workout/WorkOut';

const page = () => {
  return (
    <div>
      <Banner/>
       <section id="library">
        <WorkOut/>
      </section>
    </div>
  );
};

export default page;