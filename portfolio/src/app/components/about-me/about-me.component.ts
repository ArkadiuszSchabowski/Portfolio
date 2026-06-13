import { Component } from '@angular/core';
import {
  scrollFadeCenter,
  scrollFadeDown,
  scrollFadeLeft,
  scrollFadeRight,
  scrollFadeUp,
} from '../../animations/scroll.animations';
import { ScrollShowDirective } from '../../directives/scroll-show.directive';

@Component({
  selector: 'app-about-me',
  imports: [ScrollShowDirective],
  animations: [scrollFadeCenter, scrollFadeLeft, scrollFadeRight, scrollFadeUp, scrollFadeDown],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
