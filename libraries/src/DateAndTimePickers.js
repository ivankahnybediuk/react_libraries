import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: "20px",
    backgroundColor: "violet",
    width: "300px",
    fontSize: "30px",
    padding: "20px",
    boxShadow: "10px 10px 10px black",
    borderRadius: "10px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Choose the date"
        type="datetime-local"
        defaultValue="2020-05-11T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}