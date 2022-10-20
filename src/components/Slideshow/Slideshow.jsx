import React, { useRef } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import slide1 from 'images/slide1.webp';
import slide2 from 'images/slide2.webp';
import slide3 from 'images/slide3.webp';
import { ImageButton } from 'components/indexComponents';
import './Slideshow.scss';

export function Slideshow() {
  const slideshowRef = useRef(null);
  let count = 0;

  // const { firstChild, lastChild } = slideshowRef.current;
  // slideshowRef.current.insertBefore(lastChild, firstChild);

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
        <div className="slideshow-slide">
          <img className="slide__img" src={slide1} alt="" />
        </div>
        <div className="slideshow-slide">
          <img className="slide__img" src={slide2} alt="" />
        </div>
        <div className="slideshow-slide">
          <img className="slide__img" src={slide3} alt="" />
        </div>
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
