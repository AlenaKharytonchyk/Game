import { connect } from "react-redux";
import PlayButton from "../components/PlayButton";
import { loginActions } from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startGame: () => {
      dispatch(loginActions.openDialog());
    },
  };
};

const PlayButtonContainer = connect(
  ()=>({}),
  mapDispatchToProps
)(PlayButton);

export default PlayButtonContainer;
