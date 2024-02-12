import { Inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  private readonly icons: Map<string, SafeHtml> = new Map<string, SafeHtml>();

  constructor(
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
  ) { }

  public define(icons: Record<string, string>): void {
    Object.keys(icons).forEach((key: string) =>
      this.icons.set(key, this.sanitize(icons[key])));
  }

  public getIcon(name: string): SafeHtml | undefined {
    return this.icons.get(name);
  }

  private sanitize(src: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(src);
  }
}
