import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import dashboardImg from '../../assets/icons/dashboard.png';
import checkListImg from '../../assets/icons/checklist.png';
import contactImg from '../../assets/icons/contact.png';
import callLogImg from '../../assets/icons/call-log.png';
import supportImg from '../../assets/icons/support.png';
import settingsImg from '../../assets/icons/settings.png';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <img src={dashboardImg} style={{width: 21}}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img src={checkListImg} style={{width: 21}}/>
      </ListItemIcon>
      <ListItemText primary="Todo List" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img src={contactImg} style={{width: 21}}/>
      </ListItemIcon>
      <ListItemText primary="Contacts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img src={callLogImg} style={{width: 21}}/>
      </ListItemIcon>
      <ListItemText primary="Call Logs" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <img src={supportImg} style={{width: 21}}/>
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img src={settingsImg} style={{width: 21}}/>
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);