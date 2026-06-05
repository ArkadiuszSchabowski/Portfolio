import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp } from 'ngx-animate';

export const scrollFadeLeft = trigger('scrollLeft', [
  transition('hidden => visible', useAnimation(fadeInLeft, { params: { timings: '600ms ease-out' } }))
]);

export const scrollFadeRight = trigger('scrollRight', [
  transition('hidden => visible', useAnimation(fadeInRight, { params: { timings: '600ms ease-out' } }))
]);

export const scrollFadeCenter = trigger('scrollCenter', [
  transition('hidden => visible', useAnimation(fadeIn, { params: { timings: '800ms ease-out' } }))
]);

export const scrollFadeDown = trigger('scrollDown', [
  transition('hidden => visible', useAnimation(fadeInDown, {
    params: { timings: '600ms ease-out' }
  }))
]);

export const scrollFadeUp = trigger('scrollUp', [
  transition('hidden => visible', useAnimation(fadeInUp, {
    params: { timings: '600ms ease-out' }
  }))
]);