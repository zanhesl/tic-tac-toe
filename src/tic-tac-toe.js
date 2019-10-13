const FIELD_DIMENSION = 3;

class TicTacToe {
    constructor() {
      this._player = `x`;
      this._field = [(new Array(FIELD_DIMENSION)).fill(null), (new Array(FIELD_DIMENSION)).fill(null), (new Array(FIELD_DIMENSION)).fill(null)];
    }

    getCurrentPlayerSymbol() {
      return this._player;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this._field[rowIndex][columnIndex] == null){
        this._field[rowIndex][columnIndex] = this._player;
        this._player = (this._player === `x`) ? `o` : `x`;
      }
    }

    isFinished() {
      if (this.getWinner()||this.noMoreTurns()) {
        return true;
      }
      return false;
    }

    getWinner() {
      for (let row of this._field) {
        if ((row[0] === row[1])&&(row[1] === row[2])) {
          return row[0];
        }
      }

      for (let i = 0; i < this._field.length; i++) {
        if ((this._field[0][i] === this._field[1][i])&&(this._field[1][i] === this._field[2][i])) {
          return this._field[0][i]
        }
      }

      let prev = this._field[0][0];
      let flag = true;
      for (let i = 1; i < this._field.length; i++) {
        if (this._field[i][i] !== prev) {
          flag = false;
        }
      }
      if (flag) {
        return prev;
      }

      let prevReverse = this._field[0][2];
      let flagReverse = true;
      for (let i = 1; i < this._field.length; i++) {
        if (this._field[i][this._field.length - i - 1] !== prevReverse) {
          flagReverse = false;
        }
      }
      if (flagReverse) {
        return prevReverse;
      }

      return null;
    }

    noMoreTurns() {
      for (let row of this._field) {
        if (row.indexOf(null) >= 0) {
          return false
        }
      }
      return true;
    }

    isDraw() {
      if (this.noMoreTurns()&&(!this.getWinner())){
        return true;
      }
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this._field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
