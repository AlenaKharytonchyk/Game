import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HealButton from "./HealButton";
import AttackButton from "./AttackButton";
import ExitButton from "./ExitButton";
import MagicDialog from "./MagicDialog";
import config from '../gameConfig/config';
import { gameActions } from "../actions";
import UserCard from "./UserCard";
import {connect} from 'react-redux';
import MonsterCard from "./MonsterCard";

export const USER_ACTIONS = {
  ATTACK: 'ATTACK',
  HEAL: 'HEAL',
  IDLE: 'IDLE'
}
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "10px 0"
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center"
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  versus: {
    fontSize: '3em',
    color: '#f50057',
  }
});

class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMagicDialog: false
    }
  }

  handleOpenDialog(userActionType) {
    this.setState({displayMagicDialog: true, userActionType})
  }

  handleCloseDialog(isCorrect, userActionType) {
    const {updateUserState} =this.props;
    updateUserState({userActionStatus: userActionType, userActionResult: isCorrect});

    this.setState({displayMagicDialog: false});
  }

  componentDidMount(){
    const {startGame} = this.props;
    startGame(config.gameDefaults.userHealth, config.gameDefaults.monsterHealth)
  }

  render() {
    const { classes, userName, score, gameEnd } = this.props;
    const { displayMagicDialog, userActionType } = this.state;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.cardContainer}>
            <UserCard/>
            <Typography component="p" className={classes.versus}>
              VS
            </Typography>
            <MonsterCard/>
          </Typography>
          <div className={classes.actionContainer}>
            <AttackButton onClick={()=> this.handleOpenDialog(USER_ACTIONS.ATTACK)}/>
            <HealButton onClick={()=> this.handleOpenDialog(USER_ACTIONS.HEAL)}/>
            <ExitButton onClick={()=>gameEnd(userName, score)}/>
          </div>
        </Paper>
        <MagicDialog open = {displayMagicDialog} handleClose={(isCorrect,userActionType) => this.handleCloseDialog(isCorrect,userActionType)} userActionType={userActionType}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userName =
    state.userLoginReducer.userName;
  const score = state.gameReducer.totalScore;
  return {
    userName,
    score
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserState: e => dispatch(gameActions.updateUserState(e)),
    startGame: (userHealth, monsterHealth) => {
      dispatch(gameActions.gameStart(userHealth, monsterHealth));
    },
    gameEnd: (userName, score) => {
      dispatch(gameActions.gameEnd(userName, score));
    }
  };
};

const GameScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);

GameScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  startGame: PropTypes.func.isRequired,
  updateUserState: PropTypes.func.isRequired,
};

export default withStyles(styles)(GameScreenContainer);
