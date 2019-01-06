import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import mathQuestions from "../questions/math/mathQuestions";
import spellingQuestions from "../questions/spelling/spellingQuestions";
import translateQuestions from "../questions/translate/translateQuestions";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

export const QUESTION_TYPES = {
  MATH: "MATH",
  SPELLING: "SPELLING",
  TRANSLATE: "TRANSLATE"
};
function getRandomQuestion(questions) {
  const i = getRndInteger(0, questions.length - 1);
  return questions[i];
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function compareAnswer(expected, actual) {
  return `${expected}`.toLowerCase() === `${actual}`.toLowerCase();
}
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAnswer: "" };
  }

  inputAnswer(value) {
    this.setState({ userAnswer: value });
  }

  componentDidMount() {
    const { questionType } = this.props;
    let question;

    switch (questionType) {
      case QUESTION_TYPES.MATH:
        question = getRandomQuestion(mathQuestions);
        break;
      case QUESTION_TYPES.SPELLING:
        question = getRandomQuestion(spellingQuestions);
        break;
      case QUESTION_TYPES.TRANSLATE:
        question = getRandomQuestion(translateQuestions);
        break;
      default:
        break;
    }

    this.setState({ questionObj: question });
  }

  render() {
    const { onResponseSubmit, classes } = this.props;
    const { userAnswer, questionObj } = this.state;

    if(!questionObj)
      return null;

    const { question, formula, answer } = questionObj;

    return (
      <div>
        <DialogContent>
          <Typography className={classes.question} component="p">
            {question}
          </Typography>
          <Typography className={classes.formula} component="p">
            {formula}
          </Typography>
          <TextField onChange={event => this.inputAnswer(event.target.value)} autoFocus />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onResponseSubmit(compareAnswer(answer, userAnswer))}>
            Я знаю ответ!
          </Button>
        </DialogActions>
      </div>
    );
  }
}
const styles = theme => ({
  question: {
    fontWeight: "700"
  },
  formula: {
    fontWeight: "600",
    fontStyle: "italic"
  }
});

export default withStyles(styles)(Question);
