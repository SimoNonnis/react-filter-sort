import React from 'react';


import styles from './filterBar.css';


class FilterBar extends React.Component {
  constructor() {
    super();
    this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChangeInputHandler(e) {
    this.props.filterHotels(e.target.value);
  }

  handleClick() {
    this.props.sortByStar();
  }

  render() {
    let buttonText = this.props.state.sortDir ? 'Desc' : 'Asc';
    return (
      <div className={styles.header}>
        <div className={styles.filterBlock} >
          <p className={styles.filterBy} >filter by facilities</p>
          <span className={styles.field} >
            <input
              type="text"
              className={styles.input}
              placeholder="Enter name here"
              onChange={this.onChangeInputHandler}
            />
          </span>
        </div>
        <div className={styles.filterBlock} >
          <p className={styles.filterBy} >sort by stars</p>
          <button
            className={styles.sortBtn}
            onClick={this.handleClick}
          >{buttonText}</button>
        </div>
      </div>
    );
  }
}


FilterBar.propTypes = {
  filterHotels: React.PropTypes.func,
  sortByStar: React.PropTypes.func,
  state: React.PropTypes.any
}



export default FilterBar;
