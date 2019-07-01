import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerItem from './DrawerItem';

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


export default function MapHeader(){
  const classes = useStyles();
  const theme = useTheme();
  const[open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
      setOpen(true);
    }
  
    function handleDrawerClose() {
      setOpen(false);
    }

  return(
    <div className={classes.root} style={{width: "5%", "marginBottom" : "-50px"}}>
      <CssBaseline />
      <AppBar 
        position="sticky" 
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="default">     
        <IconButton
            color="primary"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            size="medium"
            className={clsx(classes.menuButton, open && classes.hide)}>  
          <MenuIcon />
        </IconButton>
        <DrawerItem/>
      </AppBar>
    </div>
  );
}