import React from 'react';


import styles from './hotelList.css';


class HotelData extends React.Component {
  render() {
    let hotel = this.props.hotel;
    let facilities = hotel.facilities.join(', ').toLowerCase();

    return (
      <tr className={styles.row} >
        <td className={styles.cell} > {hotel.name} </td>
        <td className={styles.cell}> {hotel.starRating} </td>
        <td className={styles.cell}> {facilities} </td>
      </tr>
    );
  }
}


HotelData.propTypes = {
  hotel: React.PropTypes.any
}


export default HotelData;
