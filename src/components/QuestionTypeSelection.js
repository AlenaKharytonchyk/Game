import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Typography } from "@material-ui/core";
import {QUESTION_TYPES} from './Questions';

function QuestionTypeSelection(props) {
  const {handleSelection} = props;
  return (
    <div>
      <DialogActions>
        <Button  variant="outlined" color="secondary" onClick={()=>{handleSelection(QUESTION_TYPES.MATH)}}>
          Математика
        </Button>
        <Button  variant="outlined" color="secondary" onClick={()=>{handleSelection(QUESTION_TYPES.SPELLING)}}>
          Грамматика
        </Button>
        <Button  variant="outlined" color="secondary" onClick={()=>{handleSelection(QUESTION_TYPES.TRANSLATE)}}>
          Перевод англ/русский
        </Button>
      </DialogActions>
    </div>
  );
}
export default QuestionTypeSelection;
