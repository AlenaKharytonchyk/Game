import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import config from "../gameConfig/config";
import { gameActions } from "../actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import monsters from "../assets/monsters";

const styles = theme => ({
  card: {
    maxWidth: 250,
    minWidth: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },
  cardTitle: {
    minHeight: "3.6em",
    textAlign: "center",
    textOverflow: "ellipsis"
  },
  healthBar: {
    height: "1.5em",
    width: '14em'
  },
  media: {
    height: '5em',
  },
  monsterIdle: {
    height: '200%',
  },
  monsterAttack: {
    objectFeat: 'cover',
    objectPosition: '0 -10%',
    height: '200%'
  }
});
function getRandomMonsterName(arr) {
  const i = getRndInteger(0, arr.length - 1);
  return arr[i];
}
function getRandomMonsterType() {
  const i = getRndInteger(0, monsters.length - 1);
  return monsters[i];
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomMonster() {
  const { monsterFirstName, monsterMiddleName, monsterLastName } = config.gameDefaults;
  const monsterName = [
    getRandomMonsterName(monsterFirstName),
    getRandomMonsterName(monsterMiddleName),
    getRandomMonsterName(monsterLastName)
  ].join(" ");

  const monsterType = getRandomMonsterType();

  return { monsterName, monsterType };
}

class MonsterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monster: null, status: "idle" };
  }

  componentDidMount() {
    const monster = getRandomMonster();
    this.setState({ monster });
  }

  componentDidUpdate(prevProps) {
    const { monsterHealth, monsterAppear, round } = this.props;
    if (monsterHealth <= 0) {
      monsterAppear(config.gameDefaults.baseScore, config.gameDefaults.monsterHealth);
      this.setState({ monster: getRandomMonster() });
    }
    if (round !== prevProps.round) {
      this.attackPlayer();
    }
  }
  attackPlayer() {
    const { monsterAttack } = this.props;
    setTimeout(() => {
      monsterAttack(config.gameDefaults.monsterAttack);
      this.setState({ status: "idle" });
    }, 2000);

    this.setState({ status: "attack" });
  }
  render() {
    const { classes, monsterHealth } = this.props;
    const { monster, status } = this.state;
    const healthLine = Math.floor((monsterHealth / config.gameDefaults.monsterHealth) * 100);

    if (!monster) return null;

    const { monsterName, monsterType } = monster;
    let imgSrc = "";
    switch (status) {
      case "idle":
        imgSrc = monsterType.idle;
        break;
      case "attack":
        imgSrc = monsterType.attack;
        break;
      default:
        break;
    }
    return (
      <Card className={classes.card}>
        <CardHeader title={monsterName} className={classes.cardTitle} />
        <img src={imgSrc} className={classes.media}/>
        {/* <CardMedia className={classes.media} image={monsterType.idle} title={monsterName} /> */}
        <CardContent>
          <Typography component="div">
            Health: {monsterHealth}{" "}
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

MonsterCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const monsterHealth = state.gameReducer.monsterHealth;
  const round = state.gameReducer.round;
  return {
    monsterHealth,
    round
  };
};

const mapDispatchToProps = dispatch => {
  return {
    monsterAppear: (score, monsterHealth) => {
      dispatch(gameActions.monsterAppear(score, monsterHealth));
    },
    monsterAttack: value => {
      dispatch(gameActions.monsterAttack(value));
    }
  };
};

const MonsterCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterCard);
export default withStyles(styles)(MonsterCardContainer);
