import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

import './dashboard.css';
import { Button, Icon, Input, AutoComplete, Tabs, Table } from 'antd';

import logo from '../../assets/the-hari-logo.png';
import logoSquare from '../../assets/the-hari-logo-square.png';
import todoImg from '../../assets/to-do-list.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        StayPlease
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
const { TabPane } = Tabs;
const { Option, OptGroup } = AutoComplete;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
    //paddingLeft: 16 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  smallPaper: {
    padding: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  callLogPaper:{
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 570,
  },
  callConsoleHeight: {
    height: 80,
  },
  callStatusHeight: {
    height: 273,
  }
}));

const dataSource = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'AntDesign UI',
        count: 60100,
      },
      {
        title: 'AntDesign',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'AntDesign design language',
        count: 100000,
      },
    ],
  },
];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
}

const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} people</span>
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        View all results
      </a>
    </Option>,
  ]);

const columns = [
  {
    title: 'AGENT',
    dataIndex: 'agent',
  },
  {
    title: 'NAME',
    dataIndex: 'name',
  },
  {
    title: 'EXT',
    dataIndex: 'ext',
  },
];

const data = [
  {
    key: '1',
    agent: 'Restaurant',
    name: 'Nathan Russel',
    ext: '402',
  },
  {
    key: '2',
    agent: 'Spa',
    name: 'Wade Mccoy',
    ext: '212',
  },
  {
    key: '3',
    agent: 'Engineer',
    name: 'Eduardo Wilson',
    ext: '602',
  },
  {
    key: '4',
    agent: 'Manager',
    name: 'Greg Hawkins',
    ext: '889',
  },
  {
    key: '5',
    agent: 'Restaurant',
    name: 'Darlene Fox',
    ext: '405',
  },
  {
    key: '6',
    agent: 'Sale',
    name: 'Irma Mckinney',
    ext: '102',
  },
  {
    key: '7',
    agent: 'Spa',
    name: 'Minami Kojima',
    ext: '666',
  },
  {
    key: '8',
    agent: 'Manager',
    name: 'Darlene Fox',
    ext: '405',
  }
];

const callStatusColumns = [
  {
    title: 'NUMBER',
    dataIndex: 'number',
  },
  {
    title: 'NAME',
    dataIndex: 'name',
  },
  {
    title: 'DURATION',
    dataIndex: 'duration',
  },
];

const callStatusData = [
  {
    key: '1',
    number: 'Rm 402',
    name: 'Mr. Wang Lee',
    duration: '00:16:43',
  },
  {
    key: '2',
    number: '(808) 555-0111',
    name: 'Tyrone Nguyen',
    duration: '00:01:30',
  },
  {
    key: '3',
    number: '108',
    name: 'Arlene Mccoy',
    duration: '00:02:40',
  }
];

const callLogColumns = [
  {
    title: 'DATE TIME',
    dataIndex: 'datetime',
  },
  {
    title: 'FROM',
    dataIndex: 'from',
  },
  {
    title: 'TO',
    dataIndex: 'to',
  },
];

const callLogData = [
  {
    key: '1',
    datetime: '11:56 PM',
    from: 'You',
    to: 'Rm 402',
  },
  {
    key: '2',
    datetime: '3:00 AM',
    from: 'Jennie Simmons',
    to: 'Rm 402',
  },
  {
    key: '3',
    datetime: '3:41 PM',
    from: 'Rm 402',
    to: 'You',
  }
];

export default function DashboardPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const callConsoleHeightPaper = clsx(classes.smallPaper, classes.callConsoleHeight);
  const callStatusHeightPaper = clsx(classes.callLogPaper, classes.callStatusHeight);

  const callback = (key) => {
    console.log(key);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <img src={logo} className="App-logo" alt="logo" style={{height: 17}}/>
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div style={{
          display:"flex", 
          flexDirection:"row", 
          flexWrap:"wrap", 
          height:"100%", 
          alignContent:"space-between"}}>
            <List>{mainListItems}</List>
            <List>{secondaryListItems}</List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={callConsoleHeightPaper}>
                <img src={logoSquare} className="App-logo" alt="logo" style={{width: 120, height: 120, marginTop: -15, marginLeft: 20}}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <div style={{fontWeight:"bold", marginBottom:10}}>Directory</div>
                <div className="certain-category-search-wrapper" style={{ width: "100%", marginBottom:10 }}>
                  <AutoComplete
                    className="certain-category-search"
                    dropdownClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 300 }}
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={options}
                    placeholder="Search Contact"
                    optionLabelProp="value"
                  >
                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                  </AutoComplete>
                </div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="All" key="1">
                    <Table columns={columns} dataSource={data} size="small" />
                  </TabPane>
                  <TabPane tab="Restaurant" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Spa" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                  <TabPane tab="Engineer" key="4">
                    Content of Tab Pane 4
                  </TabPane>
                </Tabs>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <div style={{fontWeight:"bold"}}>Activity</div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper className={callStatusHeightPaper}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="Current (3)" key="1">
                        <Table columns={callStatusColumns} dataSource={callStatusData} size="small" />
                      </TabPane>
                      <TabPane tab="Call Park (4)" key="2">
                        Content of Tab Pane 2
                      </TabPane>
                      <TabPane tab="Call Back (1)" key="3">
                        Content of Tab Pane 3
                      </TabPane>
                    </Tabs>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper className={callStatusHeightPaper}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="Call Log" key="1">
                        <Table columns={callLogColumns} dataSource={callLogData} size="small" />
                      </TabPane>
                    </Tabs>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <img src={todoImg} className="App-logo" alt="logo" style={{width: '100%', height: '100%'}}/>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}