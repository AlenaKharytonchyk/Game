import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

function QuestionTypeSelection(props) {
  const {handleSelection} = props;
  return (
    <div>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Chose your action:
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>{handleSelection('math')}} color="primary">
          Disagree
        </Button>
        <Button onClick={()=>{handleSelection('spelling')}} color="primary">
          Agree
        </Button>
      </DialogActions>
    </div>
  );
}
export default QuestionTypeSelection;
