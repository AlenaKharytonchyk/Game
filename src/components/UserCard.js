import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import { connect } from "react-redux";
import { gameActions } from "../actions";
import { LinearProgress } from "@material-ui/core";
import config from "../gameConfig/config";
import lady from '../assets/Curie.gif';

const styles = theme => ({
  card: {
    maxWidth: 250,
    minWidth: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    minHeight: '3.6em',
    textAlign: 'center',
    textOverflow: 'ellipsis',

  },
  healthBar: {
    height: "1.5em",
    width: '14em'
  },
  media: {
    height: '5em',
  }
});

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: "idle" };
  }

  componentDidUpdate(prevProps) {
    const { userHealth, gameEnd, userName, score, monsterHealth } = this.props;
    if (userHealth <= 0) {
      gameEnd(userName, score);
    }
    if (monsterHealth < prevProps.monsterHealth) {
      this.attackMonster();
    }
  }
  attackMonster() {
    // const { monsterAttack } = this.props;
    setTimeout(() => {
      // monsterAttack(config.gameDefaults.monsterAttack);
      this.setState({ status: "idle" });
    }, 2000);

    this.setState({ status: "attack" });
  }
  render() {
    const { classes, userName, userHealth } = this.props;
    const healthLine = Math.floor((userHealth / config.gameDefaults.userHealth) * 100);

    return (
      <Card className={classes.card}>
        <CardHeader title={userName} className={classes.cardTitle}/>
        <img src={lady} className={classes.media}/>

        <CardContent>
          <Typography component="p">
            Health: {userHealth}{" "}
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

const mapStateToProps = (state, ownProps) => {
  const userName = state.userLoginReducer.userName;
  const userHealth = state.gameReducer.userHealth;
  const score = state.gameReducer.totalScore;
  const monsterHealth = state.gameReducer.monsterHealth;
  return {
    userName,
    userHealth,
    score,
    monsterHealth,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gameEnd: (userName, score) => {
      dispatch(gameActions.gameEnd(userName, score));
    }
  };
};
const UserCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);
export default withStyles(styles)(UserCardContainer);
