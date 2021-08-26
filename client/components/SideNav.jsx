import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GradeIcon from '@material-ui/icons/Grade';
import MoodIcon from '@material-ui/icons/Mood';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import FormDialog from './name-dialogs';
import { Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    background: '#540062',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    background: '#484040',
    width: drawerWidth
  },
  listItem: {
    color: '#DDE0EF',
    textDecoration: 'none'
  },
  toolbar: theme.mixins.toolbar
}));

const navLinks = [
  {
    text: 'How To Play',
    icon: <GradeIcon />,
    href: '/how-to-play'
  },
  {
    text: 'Developers',
    icon: <MoodIcon />,
    href: '/about-us'
  },
  {
    text: 'Find a Game',
    icon: <VideogameAssetIcon />,
    href: '/games'
  }
];

export default function SideNav(props) {
  const classes = useStyles();
  // const username = window.localStorage.getItem('username');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mint Bean Hackathon!
          </Typography>
        </Toolbar>
        </AppBar>
        <nav aria-label="sidenav">
          <Hidden>
            <Drawer
              container={container}
              className={classes.drawer}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true
              }}
              // anchor="left"
              >
              <div className={classes.toolbar} />
              <Divider light={true} />
              <List>
                <Link to="/">
                  <ListItem button>
                    <ListItemIcon className={classes.listItem}>
                      <AccountCircleIcon />
                      </ListItemIcon>s
                    {/* <ListItemText primary={username} className={classes.listItem}/> */}
                  </ListItem>
                </Link>
              </List>
              <Divider light={true} />
              <List>
                {
                navLinks.map(link => (
                  <Link to={link.href} key={link.text}>
                    <ListItem button>
                      <ListItemIcon className={classes.listItem}>
                        {link.icon}
                      </ListItemIcon>
                      <ListItemText primary={link.text} className={classes.listItem}/>
                    </ListItem>
                  </Link>
                ))
                }
              </List>
              <List>
                <FormDialog/>
              </List>
            </Drawer>
          </Hidden>
        </nav>
    </div>
  );
}
