import React from 'react'
import { mainListItems, secondaryListItems } from "./listItems";
import { Divider, Drawer, IconButton, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ClassNameMap } from '@mui/material';
import clsx from 'clsx';
import { useStyles } from '../styles';

interface ToggleProps {
    handleDrawerClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Sidebarr = (open: boolean, event: ToggleProps | null) => {
  const classes = useStyles();
  return (
    <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          {/* <div className={classes.toolbarIcon}>
            <IconButton onClick={event.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div> */}
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
  )
}

export default Sidebarr