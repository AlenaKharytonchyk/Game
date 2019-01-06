import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import QuestionTypeSelection from "./QuestionTypeSelection";
import Question from "./Questions";
import { USER_ACTIONS } from "./GameScreen";
import { withStyles } from "@material-ui/core/styles";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
const styles = theme => ({
  dialogTitle: {
    textAlign: "center",
    fontWeight: 700
  }
});
class MagicDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questionType: "" };
  }

  handleSelection(questionType) {
    this.setState({ questionType });
  }

  onClose(isCorrect, userActionType) {
    const { handleClose } = this.props;
    this.setState({ questionType: "" });
    handleClose(isCorrect, userActionType);
  }

  onResponseSubmit(isCorrect) {
    const { userActionType } = this.props;
    this.onClose(isCorrect, userActionType);
  }

  getDialogContent() {
    const {questionType} = this.state;
    console.warn('getDialogContent', this.state, this.props);

    return questionType !== ''
      ? <Question questionType={questionType} onResponseSubmit={e => this.onResponseSubmit(e)} />
      : <QuestionTypeSelection handleSelection={q => this.handleSelection(q)} />
  }

  getDialogTitle() {
    const { userActionType } = this.props;

    switch (userActionType) {
      case USER_ACTIONS.ATTACK:
        return "Выберите атакующее заклинание";
      case USER_ACTIONS.HEAL:
        return "Выберите заклинание для лечения";
      default:
        return "Вот это поворот!";
    }
  }

  render() {
    const { open, classes } = this.props;
    const title = this.getDialogTitle();
    const dialogContent = this.getDialogContent();

    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => this.onClose()}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" className={classes.dialogTitle}>
          {title}
        </DialogTitle>
        {dialogContent}
      </Dialog>
    );
  }
}
export default withStyles(styles)(MagicDialog);
