import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { gameActions } from "../actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import config from "../gameConfig/config";
import ladyIdle from "../assets/CurieIdle.gif";
import ladyAttack from "../assets/CurieAttack.gif";
import manIdle from "../assets/EinsteinIdle.gif";
import manAttack from "../assets/EinsteinAttack.gif";
import { USER_ACTIONS } from "./GameScreen";

const styles = theme => ({
  card: {
    maxWidth: 250,
    minWidth: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },
  cardTitle: {
    minHeight: "4em",
    maxHeight: "4em",
    textAlign: "center",
    textOverflow: "ellipsis"
  },
  healthBar: {
    height: "1.5em",
    width: "14em"
  },
  media: {
    height: "5em"
  },
  healthText: {
    textAlign: "center",
    fontFamily: '"Press Start 2P", cursive',
    color: "#f50057"
  },
  bitText: {
    textAlign: "center",
    fontFamily: '"Press Start 2P", cursive'
  }
});

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: USER_ACTIONS.IDLE };
  }

  componentDidUpdate(prevProps) {
    const {
      userHealth,
      gameEnd,
      userName,
      score,
      userActionStatus,
      userAttack,
      userHeal
    } = this.props;
    if (userHealth <= 0) {
      return gameEnd(userName, score);
    }

    if (
      userActionStatus !== USER_ACTIONS.IDLE &&
      prevProps.userActionStatus === USER_ACTIONS.IDLE
    ) {
      switch (userActionStatus) {
        case USER_ACTIONS.ATTACK:
          setTimeout(() => {
            userAttack();
          }, 2000);
          break;
        case USER_ACTIONS.HEAL:
          userHeal();
          break;
        default:
          break;
      }
    }
  }

  getImgSrc() {
    const { gender, userActionStatus } = this.props;
    switch (gender) {
      case "male":
        return userActionStatus === USER_ACTIONS.ATTACK ? manAttack : manIdle;
      case "female":
        return userActionStatus === USER_ACTIONS.ATTACK ? ladyAttack : ladyIdle;
      default:
        return null;
    }
  }

  render() {
    const { classes, userName, userHealth } = this.props;
    const healthLine = Math.floor((userHealth / config.gameDefaults.userHealth) * 100);

    return (
      <Card className={classes.card}>
        <CardHeader
          title={<p className={classes.bitText}>{userName}</p>}
          className={classes.cardTitle}
        />
        <img src={this.getImgSrc()} className={classes.media} />
        <CardContent>
          <Typography component="div" className={classes.healthText}>
            Health: {userHealth}
            <LinearProgress
              className={classes.healthBar}
              variant="determinate"
              color="secondary"
              value={healthLine}
            />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const {
    totalScore: score,
    userHealth,
    userState: { userActionStatus, userActionResult }
  } = state.gameReducer;
  const { userName, gender } = state.userLoginReducer;
  return {
    userName,
    userHealth,
    score,
    userActionStatus,
    userActionResult,
    gender
  };
};

const mapDispatchToProps = dispatch => {
  const { userAttack, userHeal } = config.gameDefaults;
  return {
    gameEnd: (userName, score) => {
      dispatch(gameActions.gameEnd(userName, score));
    },
    userAttack: () => dispatch(gameActions.userAttack(userAttack)),
    userHeal: () => dispatch(gameActions.userHeal(userHeal))
  };
};

const UserCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);

export default withStyles(styles)(UserCardContainer);
