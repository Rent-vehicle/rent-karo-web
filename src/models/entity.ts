export type EntityIdentifier = number | string;

export interface Entity {
  id: EntityIdentifier;
  createdAt: string;
  updatedAt: string;
}

export interface EntityMap<T extends Entity> {
  [key: EntityIdentifier]: T;
}
