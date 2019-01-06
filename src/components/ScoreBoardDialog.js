import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {connect} from 'react-redux';
import { DialogContent } from "@material-ui/core";
import ScoreBoard from "./ScoreBoard";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ScoreBoardDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDisplayed: false };
  }

  onClose() {
    this.setState({isDisplayed:false})
  }
  componentDidUpdate(prevProps){
    const {scoreBoard} = this.props;
    if (prevProps.scoreBoard.length < scoreBoard.length) {
      this.setState({isDisplayed: true})
    }
  }
  render() {
    const { isDisplayed } = this.state;

    return (
      <Dialog
        open={isDisplayed}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          this.onClose();
        }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{` Игра окончена :(`}</DialogTitle>
        <DialogContent><ScoreBoard/></DialogContent>
      </Dialog>
    );
  }
}
const mapStateToProps = (state) => {
  const scoreBoard =
    state.scoreBoardReducer.scoreBoard;
  return {
    scoreBoard
  };
};

const ScoreBoardDialogContainer = connect(
  mapStateToProps,
)(ScoreBoardDialog);

export default ScoreBoardDialogContainer;
