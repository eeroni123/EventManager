import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Layout(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    if (props.loggedIn) {
      props.dispatch(logoutUser());
    } else {
      props.history.push("/login");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Event Manager
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            {props.loggedIn ? "Log out" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Events" onClick={() => props.history.push("/")} />
          <Tab
            label="Create Event"
            onClick={() => props.history.push("/submit")}
          />
          <Tab
            label="Create Location"
            onClick={() => props.history.push("/location/submit")}
          />
        </Tabs>
      </Paper>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(withRouter(Layout));
