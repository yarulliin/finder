import { Injectable } from '@angular/core';
import { isBrowser } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public getItem<T>(key: string): T | void {
    if (isBrowser()) {
      return JSON.parse(localStorage.getItem(key) || 'null');
    }
  }

  public setItem<T>(key: string, item: T): void {
    if (isBrowser()) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }

  public removeItem(key: string): void {
    if (isBrowser()) {
      localStorage.removeItem(key);
    }
  }
}
