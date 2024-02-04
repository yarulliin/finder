import { afterNextRender, AfterRenderPhase, ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmsFacadeService } from './core/films/services/films-facade.service';

@Component({
  selector: 'fa-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private readonly filmsService: FilmsFacadeService,
  ) {
    afterNextRender(
      () => {
        this.filmsService.initFilms();
        this.filmsService.initFilmsListener();
      },
      { phase: AfterRenderPhase.Write }
    );
  }
}
