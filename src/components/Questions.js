import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import mathQuestions from "../questions/math/mathQuestions";
import { TextField } from "@material-ui/core";
import { timingSafeEqual } from "crypto";

function getRandomQuestion(questions) {
  const i = getRndInteger(0, questions.length - 1);
  return questions[i];
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAnswer: "" };
  }
  inputAnswer(value) {
    this.setState({ userAnswer: value });
  }

  getQuestion() {
    const { questionType } = this.props;
    let { question } = this.state;
    if (question) {
      return question;
    }
    switch (questionType) {
      case "math":
        question = getRandomQuestion(mathQuestions);
        break;

      default:
        break;
    }
    this.setState({ question });
    return question;
  }
  render() {
    const {question, formula, answer} = this.getQuestion();
    const {onResponseSubmit} = this.props;
    return (
      <div>
        <DialogContent>
          <DialogContentText>
            {question}
            {formula}
          </DialogContentText>
          <TextField onChange={(event) => this.inputAnswer(event.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick = {()=>onResponseSubmit(this.state.userAnswer==answer)}>Submit</Button>
        </DialogActions>
      </div>
    );
  }
}

export default Question;
