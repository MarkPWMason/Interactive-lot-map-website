import React, { useState } from 'react';
import styles from './LotModalExpanded.module.css';
import LotInfo from './LotInfo';

const LotModalExpanded = ({
  id,
  setShowModalExpId,
}: {
  id: number;
  setShowModalExpId: any;
}) => {
  const lot = LotInfo.find((lot) => lot.id === id);

  return (
    <>
      {lot && (
        <div id={styles.lotModalExpandedContainer}>
          <img id={styles.lotImg} src="/images/placeholderLot.png" alt="" />
          <div id={styles.infoContainer}>
            <p id={styles.lotTitle}>{lot?.title}</p>
            <p id={styles.description}>{lot?.descriptionExp}</p>
            <p id={styles.size}>Size: {lot?.size}</p>
            <p id={styles.price}>Cost: {lot?.price}</p>
          </div>
          <button
            id={styles.modalBtn}
            onClick={() => {
              setShowModalExpId(-1);
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default LotModalExpanded;
