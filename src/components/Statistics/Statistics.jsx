import css from './Statistics.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  getArrayOfData = () => {
    const separateObject = obj => {
      const res = [];
      const keys = Object.keys(obj);
      keys.map(key => {
        let keyName;
        switch (key) {
          case 'good':
            keyName = 'Good';
            break;
          case 'neutral':
            keyName = 'Neutral';
            break;
          case 'bad':
            keyName = 'Bad';
            break;
          case 'total':
            keyName = 'Total';
            break;
          case 'positivePercentage':
            keyName = 'Positive feedback';
            break;
          default:
            console.log('Щось не так');
        }
        res.push({
          name: keyName,
          value: obj[key],
        });
        return key;
      });
      return res;
    };
    const arrayOfData = separateObject(this.props);
    return arrayOfData;
  };

  render() {
    return (
      <>
        <ul className={css.list}>
          {this.getArrayOfData().map(item => {
            return (
              <li key={item.name} className={css.item}>
                {item.name}: {item.value}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
