import SprintItem from './sprint-item';
import classes from './sprint-list.module.css';

const SprintList = props => {
    
    const {sprints} = props;
    
    return(
        <ul className={classes.list}>
            {sprints.map(sprint=><SprintItem
                                 key = {sprint.id}
                                 id={sprint.id}
                                 title={sprint.title}
                                 image={sprint.image}
                                 location={sprint.location}
                                 date={sprint.date}/>)}
        </ul>
    );
}

export default SprintList;