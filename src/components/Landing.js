import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContainer from "./TabContainer";
import PlayButtonContainer from "../containers/PlayButton";
import Divider from "@material-ui/core/Divider";
import ScoreBoard from "./ScoreBoard";
import "../styles/landingComponent.less";
import Typography from "@material-ui/core/Typography";
import screenShots from "../assets/screenShots";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Hawking from '../assets/hawking.gif'

const styles = {
  root: {
    flexGrow: 1,
    margin: "10px 0"
  },
  flexTab : {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto'
  },
  galleryText: {
    fontSize: '1.1rem',
    padding: '1rem 0',
    width: '60%'
  },
  galleryContainer: {
    width: '40%'
  },
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      lightBox: false
    };
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  handleLightBoxClose() {
    return (() => this.setState({ lightBox: false }))();
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={(event, value) => this.handleChange(event, value)}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Ну давай уже начнём уже!" />
          <Tab label="Что тебя ждёт" />
          <Tab label="Стена Славы" />
          <Tab label="Я это сделала!" />
        </Tabs>
        <Divider variant="middle" />
        {value === 0 && (
          <TabContainer>
            <div className={classes.flexTab}>
            <img srcSet={Hawking} />
            <PlayButtonContainer />
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer className={classes.screenShotTab}>
            <div className={classes.flexTab}>
                <Typography component="p" className={classes.galleryText}>
                  Вы сможете окунуться в замечательный мир приключение став одинм из известнейших
                  учёных. Вы сможете сразиться с ужаснейшими созданиямия, которые перевенут картину
                  вашего мира с ног на голову. Если ты смелый ловкий умелый, то "Учёные против
                  Покемонов" ждут тебя о герой!
                </Typography>
              <div className={classes.galleryContainer}>
                <ImageGallery items={screenShots} />
              </div>
            </div>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <ScoreBoard />
          </TabContainer>
        )}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
      </Paper>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
