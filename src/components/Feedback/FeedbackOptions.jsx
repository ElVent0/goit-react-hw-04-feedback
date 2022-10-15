import css from './FeedbackOptions.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  getCapitalize = word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

  getArrayOfData = () => {
    const separateObject = obj => {
      const res = [];
      const keys = Object.keys(obj);
      keys.map(key => {
        res.push({
          name: key,
          value: obj[key],
        });
        return key;
      });
      return res;
    };
    const arrayOfData = separateObject(this.props.options);
    return arrayOfData;
  };

  render() {
    return (
      <>
        <ul className={css.list}>
          {this.getArrayOfData().map(item => {
            return (
              <li key={item.name} className={css.item}>
                <button
                  name={item.name}
                  className={css.button}
                  onClick={this.props.onLeaveFeedback}
                >
                  {this.getCapitalize(item.name)}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedbac: PropTypes.func,
};
