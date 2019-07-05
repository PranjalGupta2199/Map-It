import React, {Component} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavbarBrand} from "react-bootstrap";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import config from "react-global-configuration";
import NavBrand from './NavBrand';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar(props) {  
  const classes = useStyles();
  const [open] = React.useState(false);

  function handleLogin()
  {
    if (config.get('isLoggedIn'))
      return (<div> {config.get('userName')}<Button href='/' color="inherit">Logout</Button></div>)
    else {
//      config.set({'isLoggedIn':false, 'userName':null})
      return (<Button href='/login' color="inherit">Login</Button>)
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        position="sticky" 
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavBrand />
          </Typography>
          {handleLogin()}
        </Toolbar>     
      </AppBar>
    </div>
  );
}


class Header extends Component{
  render(){
    return(
      <div> 
        <ButtonAppBar />
      </div>
    )
  }
}

export default Header;