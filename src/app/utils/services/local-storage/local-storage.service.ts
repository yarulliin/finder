import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: string,
  ) {}

  public getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  public setItem<T>(key: string, item: T): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
