import { TimelineMax, Power3, Power0 } from 'gsap';
import {
  sportsBg,
  sportsPlayer,
  sportsText,
  sportsDetails,
  eventBlue,
  eventContent,
  sports,
  eventDetails
} from '../variables';

import detailsHoverTL from './details-hover';

const detailsClickTL = new TimelineMax();

sportsDetails.addEventListener('click', () => {
  detailsClickTL
    .to(sportsBg, 0.7, {
      scale: 1,
      rotation: '0',
      ease: Power3.easeInOut,
      clearProps: 'roatation'
    })
    .to(sportsDetails, 1, { scaleY: 0, ease: Power3.easeInOut }, '-=0.3')
    .to(
      sportsBg,
      1,
      {
        scaleY: 0,
        ease: Power3.easeInOut
      },
      '-=0.5'
    )
    .to(
      sportsText,
      0.8,
      { y: -100, autoAlpha: 0, ease: Power3.easeInOut },
      '-=0.5'
    )
    .to(
      sportsPlayer,
      0.8,
      { y: -200, autoAlpha: 0, ease: Power3.easeInOut },
      '-=0.8'
    )
    .set(sports, { display: 'none' })
    .to(eventBlue, 0.6, { top: '-100%', ease: Power3.easeInOut })
    .to(eventContent, 0.6, { top: '-100%', ease: Power3.easeInOut })
    .from(eventDetails, 0.7, { y: 40, autoAlpha: 0, ease: Power0.easeIn });

  if (detailsClickTL.isActive()) {
    sportsDetails.addEventListener('mouseleave', () => {
      detailsHoverTL.stop();
    });
  }
});

export default detailsClickTL;
