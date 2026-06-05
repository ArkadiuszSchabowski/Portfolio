import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
  HostBinding,
  inject
} from '@angular/core';

@Directive({
  selector: '[scrollShow]',
  standalone: true
})
export class ScrollShowDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  @Input() scrollShow: 'left' | 'right' | 'center' | 'up' | 'down' = 'left';

  private currentState: 'hidden' | 'visible' = 'hidden';

  @HostBinding('@scrollLeft')
  get leftState() {
    return this.scrollShow === 'left' ? this.currentState : 'void';
  }

  @HostBinding('@scrollRight')
  get rightState() {
    return this.scrollShow === 'right' ? this.currentState : 'void';
  }

  @HostBinding('@scrollCenter')
  get centerState() {
    return this.scrollShow === 'center' ? this.currentState : 'void';
  }

  @HostBinding('@scrollUp')
  get upState() {
    return this.scrollShow === 'up' ? this.currentState : 'void';
  }

  @HostBinding('@scrollDown')
  get downState() {
    return this.scrollShow === 'down' ? this.currentState : 'void';
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.currentState = 'visible';
          this.observer?.disconnect();
        }
      },
      {
        threshold: 0
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}