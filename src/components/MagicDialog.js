import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import QuestionTypeSelection from "./QuestionTypeSelection";
import Question from "./Questions";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MagicDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questionType: "" };
  }
  handleSelection(questionType) {
    this.setState({ questionType });
  }
  onClose(isCorrect, dialogType) {
    const { handleClose } = this.props;
    this.setState({ questionType: "" });
    handleClose(isCorrect, dialogType);
  }
  onResponseSubmit(isCorrect) {
    const { dialogType } = this.props;
    this.onClose(isCorrect, dialogType);
  }
  render() {
    const { open, handleClose, dialogType } = this.props;
    const { questionType } = this.state;
    let content;
    if (questionType === "") {
      content = (
        <QuestionTypeSelection
          handleSelection={q => {
            this.handleSelection(q);
          }}
        />
      );
    } else {
      content = (
        <Question questionType={questionType} onResponseSubmit={e => this.onResponseSubmit(e)} />
      );
    }
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          this.onClose();
        }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{`Use ${dialogType} magic`}</DialogTitle>
        {content}
      </Dialog>
    );
  }
}
export default MagicDialog;
