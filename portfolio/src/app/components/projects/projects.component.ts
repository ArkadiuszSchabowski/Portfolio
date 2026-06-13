import { Component } from '@angular/core';
import { scrollFadeCenter, scrollFadeDown, scrollFadeLeft, scrollFadeRight, scrollFadeUp } from '../../animations/scroll.animations';
import { MatCardModule } from '@angular/material/card';
import { ScrollShowDirective } from '../../directives/scroll-show.directive';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, ScrollShowDirective],
  animations: [
    scrollFadeLeft,
    scrollFadeRight,
    scrollFadeCenter,
    scrollFadeDown,
    scrollFadeUp,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
