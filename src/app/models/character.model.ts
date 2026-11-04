export interface CharacterStats {
  attack: number;
  defense: number;
  magic: number;
}

export type CharacterCategory = 'Todas' | 'Inner Senshi' | 'Outer Senshi' | 'Aliados';

export interface Character {
  id: number;
  name: string;
  guardianName: string;
  civilianName: string;
  latinName?: string;
  category: 'Inner Senshi' | 'Outer Senshi' | 'Aliados';
  planet: string;
  element: string;
  symbol: string;
  role: string;
  imageUrl: string;
  quote: string;
  color: string;
  stats: CharacterStats;
}
