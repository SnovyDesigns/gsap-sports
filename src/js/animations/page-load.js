import { TimelineMax, Power3, TweenLite, Power0, Back } from 'gsap';
import {
  cover,
  navLogo,
  socialItems,
  sportsBg,
  sportsText,
  sportsPlayer,
  sportsDetails
} from '../variables';

const timeline = new TimelineMax();

window.onload = () => {
  timeline
    .to(cover, 1, {
      left: '110%',
      ease: Power3.easeInOut,
      onComplete: function() {
        TweenLite.set(this.target, { display: 'none' });
      }
    })
    .from(navLogo, 0.7, { y: 20, autoAlpha: 0, ease: Power0.easeIn })
    .staggerFrom(
      socialItems,
      0.5,
      { y: 20, autoAlpha: 0, ease: Power0.easeIn },
      0.2,
      '-=0.2'
    )
    .from(
      sportsBg,
      1.2,
      { scale: 0, autoAlpha: 0, ease: Back.easeInOut.config(1.1) },
      '-=0.9'
    )
    .from(
      sportsText,
      0.8,
      { x: -100, autoAlpha: 0, ease: Power0.easeIn },
      '-=0.3'
    )
    .from(
      sportsPlayer,
      0.8,
      { x: 150, autoAlpha: 0, ease: Power0.easeIn },
      '-=0.3'
    )
    .from(sportsDetails, 0.5, {
      scaleY: 0,
      ease: Power0.easeIn
    }),
    '-=0.3';
};
