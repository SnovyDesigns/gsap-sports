import { TimelineMax, Power3 } from 'gsap';
import { sportsDetails, sportsBg } from '../variables';

const detailsHoverRL = new TimelineMax({ paused: true });
detailsHoverRL.to(sportsBg, 0.7, {
  scale: 1.3,
  rotation: '45deg',
  ease: Power3.easeInOut
});

let rev = detailsHoverRL.reversed();

sportsDetails.addEventListener('mouseenter', () => {
  if (rev) {
    detailsHoverRL.restart();
    detailsHoverRL.play();
  } else {
    detailsHoverRL.play();
  }
});

sportsDetails.addEventListener('mouseleave', () => {
  detailsHoverRL.reverse();
});
