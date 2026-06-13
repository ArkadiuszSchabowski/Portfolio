import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import {
  scrollFadeLeft,
  scrollFadeRight,
  scrollFadeCenter,
  scrollFadeDown,
  scrollFadeUp,
} from '../../animations/scroll.animations';
import { ScrollShowDirective } from '../../directives/scroll-show.directive';

@Component({
  selector: 'app-skills',
  imports: [MatCardModule, ScrollShowDirective],
  animations: [
    scrollFadeLeft,
    scrollFadeRight,
    scrollFadeCenter,
    scrollFadeDown,
    scrollFadeUp,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
