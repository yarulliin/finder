import { afterNextRender, computed, Inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Theme } from '../../enums/theme.enums';
import { DOCUMENT } from '@angular/common';
import { bind } from '../../decorators/bind.decorator';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { WINDOW } from '../../tokens/window.token';
import { LocalStorageKeys } from '../../enums/app.enums';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public readonly theme: WritableSignal<Theme> = signal(Theme.LIGHT);

  private readonly toggledTheme: Signal<Theme> = computed(
    () => this.theme() === Theme.LIGHT
      ? Theme.DARK
      : Theme.LIGHT
  );

  constructor(
    @Inject(WINDOW) private readonly window: Window,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly localStorageService: LocalStorageService,
  ) {
    afterNextRender(this.initTheme);
  }

  public toggleTheme(): void {
    this.setTheme(this.toggledTheme());
  }

  private setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.document.body.setAttribute('theme', theme);
    this.localStorageService.setItem<Theme>(LocalStorageKeys.THEME, theme);
  }

  @bind
  private initTheme() {
    let theme = this.localStorageService.getItem<Theme>(LocalStorageKeys.THEME);

    if (!theme) {
      theme = this.window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.DARK
        : Theme.LIGHT;
    }

    this.setTheme(theme);
  }
}
