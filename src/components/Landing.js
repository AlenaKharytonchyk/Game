import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './TabContainer';
import PlayButtonContainer from '../containers/PlayButton';
import Divider  from '@material-ui/core/Divider';
import ScoreBoard from './ScoreBoard';
import '../styles/landingComponent.less';

const styles = {
  root: {
    flexGrow: 1,
    margin: '10px 0'
  },
};

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange (event, value) {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={(event,value)=>this.handleChange(event,value)}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Ну давай уже начнём уже!" />
          <Tab label="Что тебя ждёт" />
          <Tab label="Стена Славы" />
          <Tab label="Я это сделала!" />
        </Tabs>
        <Divider variant="middle" />
        {value === 0 && <TabContainer><PlayButtonContainer /></TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer><ScoreBoard/></TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
      </Paper>

    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
