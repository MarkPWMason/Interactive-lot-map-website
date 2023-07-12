import React, { useEffect, useRef, useState } from 'react';
import styles from './Image.module.css';
import ILot from '../Interfaces/ILot';

import lots from './Bounds';
import LotModal from './LotModal';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const ImgComponent = ({
  showModalId,
  setShowModalId,
  modalPos,
  setModalPos
}: {
  showModalId: any;
  setShowModalId: any;
  modalPos: any
  setModalPos: any
}) => {
  const DEFAULT_IMAGE_WIDTH = 850;
  const DEFAULT_IMAGE_HEIGHT = 774;

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let scale = 1;

  if (windowDimensions.width > 2000) {
    scale = 1;
  }

  return (
    <>
      <img
        ref={imgRef}
        src="images/Lots.png"
        alt=""
        useMap="#map"
        style={{
          width: DEFAULT_IMAGE_WIDTH * scale,
          height: DEFAULT_IMAGE_HEIGHT * scale,
        }}
        onClick={(e) => {
          console.log('X ', e.clientX, 'Y: ', e.clientY);
        }}
      />
      <map id={styles.map} name="map">
        {lots.map((lot: ILot) => {
          return (
            <area
              key={lot.id}
              shape="poly"
              coords={`${lot.bound.P1.x * scale},${lot.bound.P1.y * scale},${
                lot.bound.P2.x * scale
              },${lot.bound.P2.y * scale},${lot.bound.P3.x * scale},${
                lot.bound.P3.y * scale
              },${lot.bound.P4.x * scale},${lot.bound.P4.y * scale}`}
              alt={`Lot Id: ${lot.id}`}
              onMouseOver={() => {
                setShowModalId(lot.id);
                console.log(modalPos);
                if(imgRef.current){
                  setModalPos({ left: lot.bound.P4.x + imgRef.current?.offsetLeft, top: lot.bound.P4.y + imgRef.current?.offsetTop });
                }
                
                console.log(imgRef.current?.offsetTop);
              }}
              onMouseLeave={() => {
                setShowModalId(-1);
                setModalPos({ left: 0, top: 0 });
              }}
            />
          );
        })}
      </map>
    </>
  );
};

export default ImgComponent;
