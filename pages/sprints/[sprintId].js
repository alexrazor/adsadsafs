import React, {Fragment} from 'react';
import {useRouter} from 'next/router';
import {getSprintById} from '../../dummy-data';
import SprintSummary from '../../components/sprint-detail/sprint-summary';
import SprintLogistics from '../../components/sprint-detail/sprint-logistics';
import SprintContent from '../../components/sprint-detail/sprint-content';

const SprintPage = props =>{
	const router = useRouter();
	const sprintId = router.query.sprintId;
	const sprint = getSprintById(sprintId);
	
	if (!sprint){
		return <p>No such sprint found</p>
	}
	
  return (
    <Fragment>
		  <SprintSummary title={sprint.title}/>
		  <SprintLogistics 
			  date={sprint.date}
			  address={sprint.location}
			  image={sprint.image}
			  imageAlt={sprint.title} />
		  <SprintContent>
		  	<p>{sprint.description}</p>
		  </SprintContent>
	</Fragment>
  );
};

export default SprintPage;