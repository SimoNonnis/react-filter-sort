import React from 'react';
import classNames from 'classnames/bind';

import HotelData from './HotelData';

import styles from './hotelList.css';

let cx = classNames.bind(styles);


class HotelList extends React.Component {
  render() {
    let rowClasses = cx('cell', 'header');

    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={rowClasses} >Name</th>
            <th className={rowClasses} >Stars</th>
            <th className={rowClasses} >Facilities</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.hotels.map((el) => {
            return <HotelData key={el.id} hotel={el} />;
          })
        }
        </tbody>
      </table>
    );
  }
}


HotelList.propTypes = {
  hotels: React.PropTypes.any
}


export default HotelList;
