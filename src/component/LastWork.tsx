import React from 'react'
import TitleSections from './TitleSections';
import assets, { teamData } from '../assets/assets';
import Container from './Container';

type typeLastWorks = {
  image:string ;
  name: string;
  description: string;
};

export default function LastWork() {
  const lastWorks: typeLastWorks[] = [
    {
      image: assets?.work_fitness_app,
      name: 'Mobile app marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
    },
    {
      image: assets?.work_dashboard_management,
      name: 'Dashboard management',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
    },
    {
      image: assets?.work_fitness_app,
      name: 'Fitness app promotion',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
    },
  ];
  return (
    <section id="last-work" className="overflow-hidden pt-20  pb-20">
      <Container>
        <TitleSections
          title={'Our latest work'}
          description={
            'Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.'
          }
        />
        <div className=" grid grid-cols-1 md:grid-cols-3   gap-3.5">
          {lastWorks?.map((laWork, index) => (
            <div
              key={index}
              className=" p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-300 dark:text-white text-black "
            >
              <img src={laWork?.image} className="w-full" />
              <h3 className="my-4 text-lg">{laWork?.name}</h3>
              <p className="text-sm text-gray-400 dark:text-white/70 ">{laWork?.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
