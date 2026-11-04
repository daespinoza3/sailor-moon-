import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import {
  IonBadge,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

import type { CharacterCategory } from '../../models/character.model';
import { SailorService } from '../../services/sailor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonBadge,
    IonSegment,
    IonSegmentButton,
    IonSpinner,
  ],
})
export class HomePage {
  private readonly sailorService = inject(SailorService);

  readonly selectedCategory = signal<CharacterCategory>('Todas');
  readonly categories: CharacterCategory[] = ['Todas', 'Inner Senshi', 'Outer Senshi', 'Aliados'];

  private readonly allCharacters = toSignal(this.sailorService.getCharacters(), { initialValue: [] });

  readonly filteredCharacters = computed(() => {
    const list = this.allCharacters();
    const category = this.selectedCategory();
    if (category === 'Todas') {
      return list;
    }
    return list.filter((char) => char.category === category);
  });

  onCategoryChange(event: CustomEvent): void {
    const value = event.detail.value as CharacterCategory;
    if (value) {
      this.selectedCategory.set(value);
    }
  }

  handleImageError(event: Event, symbol: string): void {
    const target = event.target as HTMLElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent && !parent.querySelector('.symbol-fallback')) {
      const fallback = document.createElement('div');
      fallback.className = 'symbol-fallback';
      fallback.innerText = symbol;
      parent.appendChild(fallback);
    }
  }
}
