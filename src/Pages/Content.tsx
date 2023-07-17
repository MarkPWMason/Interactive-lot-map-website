import React, { useState } from 'react';
import styles from './Content.module.css';
import ImgComponent from '../Components/ImgComponent';
import LotModal from '../Components/LotModal';
import LotModalExpanded from '../Components/LotModalExpanded';

const Content = () => {
  const [modalPos, setModalPos] = useState({ left: 0, top: 0 });
  const [showModalId, setShowModalId] = useState(-1);
  const [showModalExpId, setShowModalExpId] = useState(-1);

  return (
    <div id={styles.contentContainer}>
      <div id={styles.contentInformationContainer}>
        <div id={styles.borderImgTop}></div>
        <div id={styles.contentInformation}>
          <h1 id={styles.infoHeader}>Lorem ipsum dolor sit amet.</h1>
          <p id={styles.infoPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            fermentum orci, eu molestie felis. Mauris in ultrices mi. Nullam
            volutpat, nibh eget congue ultrices, felis purus tristique ligula,
            eu vulputate tellus neque sed massa. Sed maximus justo at turpis
            iaculis, a euismod mi laoreet. In malesuada diam dui, ac feugiat
            ligula maximus quis. Cras tempus nunc vitae ultricies ornare. Sed
            quis rutrum sapien. Mauris condimentum, nibh tristique facilisis
            fermentum, est velit fermentum velit, placerat auctor massa tellus
            et ex. Cras cursus, tellus vel maximus interdum, ipsum lorem iaculis
            orci, eget tempus justo nisi id ipsum. Morbi sit amet pulvinar erat,
            sit amet auctor diam.
          </p>
        </div>
        <div id={styles.borderImgBottom}> </div>
      </div>

      <div id={styles.imgContainer}>
        <ImgComponent
          showModalExpId={showModalExpId}
          setShowModalExpId={setShowModalExpId}
          showModalId={showModalId}
          setShowModalId={setShowModalId}
          modalPos={modalPos}
          setModalPos={setModalPos}
        />
      </div>
      {showModalId !== -1 && <LotModal modalPos={modalPos} id={showModalId} />}
      {showModalExpId !== -1 && (
        <LotModalExpanded
          setShowModalExpId={setShowModalExpId}
          id={showModalExpId}
        />
      )}
      <div id={styles.contentContact}>
        <div id={styles.borderImgTopC}></div>
        <h1>Donec ac lobortis.</h1>
        <h1>Nam neque neque, suscipit quis.</h1>
        <h1>Aenean tristique lobortis dolor eget congue.</h1>
        <h1>(000) 000-0000</h1>
        <a href="/">
          <img src="/images/instaLogo.png" alt="" />
        </a>
        <a href="/">
          <img src="/images/fbLogo.png" alt="" />
        </a>
        <div id={styles.borderImgBottomC}> </div>
      </div>
    </div>
  );
};

export default Content;
