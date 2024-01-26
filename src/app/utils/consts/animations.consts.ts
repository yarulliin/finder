import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', query('@*', animateChild(), { optional: true }))
]);

export const slideAnimation = trigger('slide', [
  state('*', style({ transform: 'translateX(0)', opacity: 1 })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
  ]),
  transition(':leave',
    animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
      transform: 'translateX(100%)',
      opacity: 0
    }))
  )
]);

export const fadeAnimation = trigger('fade', [
  state('*', style({ transform: 'translateX(0)', opacity: 1 })),
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.5s ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('.25s ease-in-out', style({ opacity: 0 }))
  ]),
]);
