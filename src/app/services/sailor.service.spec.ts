import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it } from 'vitest';

import { SailorService } from './sailor.service';

describe('SailorService', () => {
  let service: SailorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SailorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 12 characters', async () => {
    const characters = await firstValueFrom(service.getCharacters());
    expect(characters.length).toBe(12);
  });

  it('should return character by id', async () => {
    const character = await firstValueFrom(service.getCharacterById(1));
    expect(character).toBeDefined();
    expect(character?.guardianName).toBe('Sailor Moon');
  });
});
