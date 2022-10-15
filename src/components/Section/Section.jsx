import css from './Section.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    return (
      <section className={css.section}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
