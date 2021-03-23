/* eslint-disable react/prop-types */
import React from 'react';
import Portal from 'components/common/Portal';
import WrapperForModal from 'components/common/WrapperForModal';
import CartTable from 'components/CartTable';
import Button from 'components/common/Button';

const PurchaseModal = ({ title, cartItems, closeHandler }) => {
  return (
    <Portal>
      <WrapperForModal title={title}>
        <CartTable cartItems={cartItems} />
        <Button
          title="Close"
          extraClassName="btn-secondary"
          onClick={closeHandler}
        />
      </WrapperForModal>
    </Portal>
  );
};

export default PurchaseModal;
