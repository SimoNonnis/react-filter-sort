import React from 'react';

import HotelData from './HotelData';

import styles from './hotelList.css';






class HotelList extends React.Component {
  render() {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.cell} >Name</th>
            <th className={styles.cell} >Stars</th>
            <th className={styles.cell} >Facilities</th>
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
