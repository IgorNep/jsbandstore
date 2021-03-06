import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const WrapperForModal = ({ title, children }) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperHeader}>
      <h4 className={styles.title}>{title}</h4>
    </div>
    <div className={styles.wrapperChildren}>{children}</div>
  </div>
);

WrapperForModal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WrapperForModal;
