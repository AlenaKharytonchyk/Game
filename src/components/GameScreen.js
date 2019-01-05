import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HealButton from "./HealButton";
import AttackButton from "./AttackButton";
import ExitButton from "./ExitButton";
import MagicDialog from "./MagicDialog";

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
    this.setState({displayMagicDialog: false})

  }
  makeAMove(isCorrect, dialogType){
    const {userHeal, monsterAttack, userAttack, monsterHeal, monsterAppear, gameEnd} =this.props;

  }
  render() {
    const { classes } = this.props;
    const { displayMagicDialog, dialogType } = this.state;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
          <div className={classes.actionContainer}>
            <AttackButton onClick={()=> this.handleOpenDialog(USER_ACTIONS.ATTACK)}/>
            <HealButton onClick={()=> this.handleOpenDialog(USER_ACTIONS.HEAL)}/>
            <ExitButton />
          </div>
        </Paper>
        <MagicDialog open = {displayMagicDialog} handleClose={() => this.handleCloseDialog()} dialogType={dialogType}/>
      </div>
    );
  }
}

GameScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameScreen);
