import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    // overflowX: 'auto',
  },
  table: {
    minWidth: '70%',
  },
});

let id = 0;
function createData(name, score) {
  id += 1;
  return { id, name, score };
}

function ScoreBoard(props) {
  const { classes, scoreBoard } = props;
  const rows = scoreBoard.map((e)=>createData(e.userName, e.score))
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Имя игрока</TableCell>
            <TableCell align="right">Счёт</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

ScoreBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  const scoreBoard =
    state.scoreBoardReducer.scoreBoard;
  return {
    scoreBoard
  };
};

const ScoreBoardContainer = connect(
  mapStateToProps
)(ScoreBoard);

export default withStyles(styles)(ScoreBoardContainer);
