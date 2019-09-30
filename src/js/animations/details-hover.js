import { TimelineMax, Power3 } from 'gsap';
import { sportsDetails, sportsBg } from '../variables';

const detailsHoverTL = new TimelineMax({ paused: true });
detailsHoverTL.to(sportsBg, 0.7, {
  scale: 1.3,
  rotation: '45deg',
  ease: Power3.easeInOut
});

let rev = detailsHoverTL.reversed();

sportsDetails.addEventListener('mouseenter', () => {
  if (rev) {
    detailsHoverTL.restart();
    detailsHoverTL.play();
  } else {
    detailsHoverTL.play();
  }
});

sportsDetails.addEventListener('mouseleave', () => {
  detailsHoverTL.reverse();
});

export default detailsHoverTL;
