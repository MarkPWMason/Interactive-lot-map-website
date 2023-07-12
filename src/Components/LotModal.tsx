import React from 'react';
import styles from './LotModal.module.css';
import LotInfo from './LotInfo';

const LotModal = ({ id, modalPos }: { id: number; modalPos: any }) => {
  const lot = LotInfo.find((lot) => lot.id === id);

  return (
    <>
      {lot && (
        <div
          id={styles.modalContainer}
          style={{ left: modalPos.left, top: modalPos.top }}
        >
          <img src="/images/placeholderLot.png" alt="" />
          <div id={styles.infoContainer}>
            <p>{lot?.title}</p>
            <p>{lot?.description}</p>
            <p>{lot?.size}</p>
            <p>{lot?.price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LotModal;
