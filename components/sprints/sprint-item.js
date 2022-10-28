import Link from 'next/link';
import Button from '../ui/Button';
import classes from './sprint-item.module.css';
import ArrowIcon from '../icons/arrow-right-icon';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';

const SprintItem = props => {

    const {title, image, date, location, id} = props;
    const time = new Date(date).toLocaleDateString('en-US', {
        day:"numeric",
        month:"long",
        year:"numeric"
    });
    const exploreLink = `/sprints/${id}`;

    return(
        <li className={classes.item}>
            <img src={"/"+image} alt={title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
						<DateIcon/>
                        <time>{time}</time>
                    </div>
                    <div className={classes.address}>
						<AddressIcon/>
                        <address>{location}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
						<span>Homework solution</span>
						<span className={classes.icon}><ArrowIcon/></span>
					</Button>
                </div>
            </div>
        </li>
    );
}

export default SprintItem;