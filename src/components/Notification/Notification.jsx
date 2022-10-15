import css from './Notification.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return <p className={css.notification}>{this.props.message}</p>;
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
