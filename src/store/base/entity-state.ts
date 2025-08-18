import { Entity, EntityIdentifier } from '@/models/entity';

export interface EntityState<T extends Entity = Entity> {
  entities: { [id: EntityIdentifier]: T };
  loading?: boolean;
  error?: string | null;
}
