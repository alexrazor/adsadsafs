import React from 'react';
import {getAllSprints} from '../dummy-data';
import SprintList from '../components/sprints/sprint-list';

const HomePage = props =>{

  const allSprints = getAllSprints();

  return (
    <SprintList sprints={allSprints}/>
  );
};

export default HomePage;