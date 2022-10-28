import classes from './sprint-content.module.css';

function SprintContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default SprintContent;
