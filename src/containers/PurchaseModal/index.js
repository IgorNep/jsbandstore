/* eslint-disable react/prop-types */
import React from 'react';
import Portal from 'components/common/Portal';
import WrapperForModal from 'components/common/WrapperForModal';
import CartTable from 'components/CartTable';
import Button from 'components/common/Button';

const PurchaseModal = ({ cartItems, closeHandler }) => {
  return (
    <Portal>
      <WrapperForModal title="You successfully placed an order!">
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
