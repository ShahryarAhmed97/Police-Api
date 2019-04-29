import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dashboard from './components/Dashboard'
import Forces from './components/Forces';
import CrimeCategories from './components/CrimeCategories';


const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Dashboard" />
          <Tab label="Forces" />
          <Tab label="Crime Categories" />
        </Tabs>
      </Paper>

     {//if tab 0 is selected then show Dashborad compponent
       this.state.value===0 &&

     <Dashboard />
     } 
     {//if tab1 is selected then  show Forces component
       this.state.value===1 &&
       <Forces />

     }
     {//if tab2 is selected then show CrimeCategories component
       this.state.value===2 &&
       <CrimeCategories />

     }


      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
