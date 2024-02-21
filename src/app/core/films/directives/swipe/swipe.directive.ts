import {
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { filter, fromEvent, map, merge, switchMap, takeUntil, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UpdateFilmMethod } from '../../utils/interfaces/films.interfaces';
import { bind } from '../../../../utils/decorators/bind.decorator';
import { ANGLE } from '../../../../utils/consts/swipe.consts';

@Directive({
  selector: '[faSwipe]',
  standalone: true,
})
export class SwipeDirective {
  @Output() private readonly emitSwipe: EventEmitter<UpdateFilmMethod> = new EventEmitter<UpdateFilmMethod>();

  constructor(
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2,
    private readonly destroyRef: DestroyRef,
  ) {
    const start$ = merge(
      fromEvent<MouseEvent>(this.elementRef.nativeElement, 'mousedown').pipe(map(this.mouseMapper)),
      fromEvent<TouchEvent>(this.elementRef.nativeElement, 'touchstart').pipe(map(this.touchMapper)),
    );
    const move$ = merge(
      fromEvent<MouseEvent>(this.document, 'mousemove').pipe(map(this.mouseMapper)),
      fromEvent<TouchEvent>(this.document, 'touchmove').pipe(map(this.touchMapper)),
    );
    const up$ = merge(
      fromEvent<MouseEvent>(this.document, 'mouseup'),
      merge(
        fromEvent<TouchEvent>(this.document, 'touchend'),
        fromEvent<TouchEvent>(this.document, 'touchcancel'),
      )
    );

    start$
      .pipe(
        switchMap((clientX: number) => move$
          .pipe(
            map((moveClientX: number) => moveClientX - clientX),
            tap((offsetX: number) => this.handleMove(offsetX)),
            filter((offsetX: number) => Math.abs(offsetX) > this.elementRef.nativeElement.clientWidth * 0.25),
            takeUntil(
              merge(
                up$,
                this.emitSwipe
              )
            ),
          )
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((offsetX: number) => this.emitSwipe.emit(offsetX > 0 ? 'like' : 'unlike'));

    up$
      .pipe(
        tap(this.setTransform.bind(this, '')),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

   private handleMove(offsetX: number): void {
    const rotate = offsetX * ANGLE;
    this.setTransform(`translate(${offsetX}px, 0px) rotate(${rotate}deg)`);
  }

  private setTransform(value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', value);
  }

  @bind
  private mouseMapper(event: MouseEvent): number {
    event.preventDefault();
    return event.clientX;
  }

  @bind
  private touchMapper(event: TouchEvent): number {
    return event.changedTouches[0].clientX;
  }
}
