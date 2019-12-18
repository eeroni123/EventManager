import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Route, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components/layouts/Home";
import About from "./components/layouts/About";
import EventContainer from "./components/containers/EventContainer";
import EventForm from "./components/containers/EventForm";
import LocationForm from "./components/containers/LocationForm";
import Login from "./components/presentation/Login";
import Register from "./components/presentation/Register";
import PrivateRoute from "./components/PrivateRoute";
import TopNav from "./components/layouts/TopNav";
import LeftDrawer from "./components/layouts/LeftDrawer";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Events from "./components/containers/Events";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  toolbar: theme.mixins.toolbar
}));

export default function App() {
  const classes = useStyles();
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const handleDrawerToggle = () => setMobileDrawer(!mobileDrawer);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <TopNav handleDrawerToggle={handleDrawerToggle} />
            <LeftDrawer
              mobileOpen={mobileDrawer}
              handleDrawerToggle={handleDrawerToggle}
            />
            <main className={classes.content}>
              <div className={classes.toolbar} />

              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/events" component={Events} />
              <PrivateRoute exact path="/about" component={About} />
              <PrivateRoute path="/events/:id" component={EventContainer} />
              <PrivateRoute path="/submit" component={EventForm} />
              <PrivateRoute path="/location/submit" component={LocationForm} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </main>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}
