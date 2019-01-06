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
    justifyContent: 'space-around',
  }
});

class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMagicDialog: false
    }
  }

  handleOpenDialog(dialogType) {
    this.setState({displayMagicDialog: true, dialogType})
  }

  handleCloseDialog(isCorrect, dialogType) {
    this.setState({displayMagicDialog: false});
    this.makeAMove(isCorrect, dialogType);
  }
  makeAMove(isCorrect, dialogType){
    const {userHeal, userAttack} =this.props;

    switch (dialogType) {
      case USER_ACTIONS.ATTACK:
        const damage = isCorrect? config.gameDefaults.userAttack: 0;
        userAttack(damage);
        break;
      case USER_ACTIONS.HEAL:
        const healthIncrease = isCorrect? config.gameDefaults.userHeal: 0;
        userHeal(healthIncrease);
        break;
      default:
        break;
    }
  }
  componentDidMount(){
    const {startGame} = this.props;
    startGame(config.gameDefaults.userHealth, config.gameDefaults.monsterHealth)

  }
  render() {
    const { classes, userName, score, gameEnd } = this.props;
    const { displayMagicDialog, dialogType } = this.state;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.cardContainer}>
            <UserCard/>
            <MonsterCard/>
          </Typography>
          <div className={classes.actionContainer}>
            <AttackButton onClick={()=> this.handleOpenDialog(USER_ACTIONS.ATTACK)}/>
            <HealButton onClick={()=> this.handleOpenDialog(USER_ACTIONS.HEAL)}/>
            <ExitButton onClick={()=>gameEnd(userName, score)}/>
          </div>
        </Paper>
        <MagicDialog open = {displayMagicDialog} handleClose={(isCorrect,dialogType) => this.handleCloseDialog(isCorrect,dialogType)} dialogType={dialogType}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userName =
    state.userLoginReducer.userName;
  const score = state.gameReducer.score;
  return {
    userName,
    score
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    userAttack: (e) => {

      dispatch(gameActions.userAttack(e));
    },
    userHeal: (e) => {
      dispatch(gameActions.userHeal(e));
    },
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
  userAttack: PropTypes.func.isRequired,
  userHeal: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default withStyles(styles)(GameScreenContainer);
