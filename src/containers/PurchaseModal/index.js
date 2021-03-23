/* eslint-disable react/prop-types */
import React from 'react';
import Portal from 'components/common/Portal';
import WrapperForModal from 'components/common/WrapperForModal';
import CartTable from 'components/CartTable';
import Button from 'components/common/Button';
import style from './styles.module.scss';

const PurchaseModal = ({ title, cartItems, closeHandler }) => {
  return (
    <Portal>
      <WrapperForModal title={title}>
        <CartTable cartItems={cartItems} />
        <div className={style.buttonGroup}>
          <Button
            title="Close"
            extraClassName="btn-secondary"
            onClick={closeHandler}
          />
        </div>
      </WrapperForModal>
    </Portal>
  );
};

export default PurchaseModal;
