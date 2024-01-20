import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: string,
  ) {}

  public getItem<T>(key: string): T | null {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(key) || 'null');
    }

    return null;
  }

  public setItem<T>(key: string, item: T): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }

  public removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
}
