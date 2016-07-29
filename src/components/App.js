import React from 'react';

import FilterBar from './FilterBar';
import HotelList from './HotelList';


import styles from './app.css';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hotels: []
    }
    this.filterHotels = this.filterHotels.bind(this);
    this.sortByStar = this.sortByStar.bind(this);
  }

  componentWillMount() {
    this.setState({
      hotels: this.props.hotels.slice()
    });
  }

  filterHotels(userInput) {
    this.setState({
      hotels: this.props.hotels.filter((el) => {
        let facilities = el.facilities;

        if (facilities.includes(userInput.toLowerCase())) {
          return el;
        } else if (!userInput) {
          return el;
        }
      })
    });
  }

  sortByStar() {
    this.setState({
      hotels: this.props.hotels.sort((a, b) => {
        if (this.state.sortDir) {
          return a.starRating - b.starRating;
        } else if (!this.state.sortDir)
          return b.starRating - a.starRating;
      }),
      sortDir: !this.state.sortDir
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <h1 className={styles.title}>Find Best Hotel</h1>
        </div>
        <div className={styles.container}>
          <FilterBar
            filterHotels={this.filterHotels}
            sortByStar={this.sortByStar}
            state={this.state}
          />
          <HotelList hotels={this.state.hotels} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  hotels: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};





App.defaultProps = {
  hotels: [
    {
      id: 0,
      name: 'Hotel California',
      starRating: 4,
      facilities: ['car park', 'pool', 'wi-fi', 'bar']
    },
    {
      id: 1,
      name: 'The Reef',
      starRating: 5,
      facilities: ['car park', 'pool', 'wi-fi', 'gym', 'bar']
    },
    {
      id: 2,
      name: 'Paradise Hotel',
      starRating: 5,
      facilities: ['room service', 'pool', 'air conditioning', 'gym', 'bar']
    },
    {
      id: 3,
      name: 'Sunrise Beach',
      starRating: 3,
      facilities: ['room service', 'pool', 'air conditioning', 'bicycle hire', 'Bar']
    },
    {
      id: 4,
      name: 'Pelican Bay',
      starRating: 2,
      facilities: ['lounge with open fire', 'pool', 'wi-fi', 'bar']
    },
    {
      id: 5,
      name: 'Lighthouse Resort',
      starRating: 1,
      facilities: ['room service']
    }
  ]
};






export default App;
