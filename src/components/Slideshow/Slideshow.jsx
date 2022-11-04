/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useRef } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ImageButton } from 'components/indexComponents';
import './Slideshow.scss';

export function Slideshow({ imagesList }) {
  const slideshowRef = useRef(null);
  let count = 0;

  const onNext = () => {
    const widthSlide = slideshowRef.current.children.length * 100 * -1;
    if (count > widthSlide + 100) {
      count -= 100;
      slideshowRef.current.style.marginLeft = `${count}%`;
      slideshowRef.current.style.transition = 'all 1s';
    }
  };

  const onPrev = () => {
    if (count < 0) {
      count += 100;
      slideshowRef.current.style.marginLeft = `${count}%`;
      slideshowRef.current.style.transition = 'all 1s';
    }
  };

  return (
    <div className="slideshow">
      <div className="slideshow-content" ref={slideshowRef}>
        {imagesList
          ? imagesList.map((image) => (
              <div key={`project__${image}`} className="slideshow-slide">
                <img className="slide__img" src={image} alt="project" />
              </div>
            ))
          : null}
      </div>
      <div className="slideshow-controls">
        <ImageButton
          type="button"
          modifierClass="slideshow-controls__btn"
          typeIcon="FontAwesomeIcon"
          srcIcon={faAngleLeft}
          altIcon="Go to the previous image"
          onClick={onPrev}
        />
        <ImageButton
          type="button"
          modifierClass="slideshow-controls__btn"
          typeIcon="FontAwesomeIcon"
          srcIcon={faAngleRight}
          altIcon="Go to the next image"
          onClick={onNext}
        />
      </div>
    </div>
  );
}
