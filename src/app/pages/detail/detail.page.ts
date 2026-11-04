import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonProgressBar,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import type { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs';

import type { Character } from '../../models/character.model';
import { SailorService } from '../../services/sailor.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    IonProgressBar,
    IonButton,
    IonSpinner,
  ],
})
export class DetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly sailorService = inject(SailorService);

  readonly character$: Observable<Character | undefined> = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    switchMap((id) => this.sailorService.getCharacterById(id)),
  );

  toPercent(value: number): number {
    return Math.round(value * 100);
  }

  handleImageError(event: Event, symbol: string): void {
    const target = event.target as HTMLElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent && !parent.querySelector('.symbol-fallback-large')) {
      const fallback = document.createElement('div');
      fallback.className = 'symbol-fallback-large';
      fallback.innerText = symbol;
      parent.appendChild(fallback);
    }
  }
}
