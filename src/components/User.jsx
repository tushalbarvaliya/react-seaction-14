import classes from './Users.module.css';

const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
