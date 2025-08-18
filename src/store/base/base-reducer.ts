import { Entity, EntityIdentifier } from '@/models/entity';
import { EntityState } from '@/store/base/entity-state';

export const getIds = (entities: Entity[]) => entities.map((e) => e.id);

export const addOne = (draft: EntityState, entity: Entity) => {
  draft.entities[entity.id] = { ...draft.entities[entity.id], ...entity };
};

export const addMany = (draft: EntityState, entities: Entity[]) => {
  if (entities.length === 0) return draft;

  (entities || []).forEach((entity: Entity) => {
    draft.entities[entity.id] = { ...draft.entities[entity.id], ...entity };
  });
};

export const updateOne = (draft: EntityState, entity: Entity) => {
  draft.entities[entity.id] = entity;
};

export const deleteOne = (draft: EntityState, id: EntityIdentifier) => {
  delete draft.entities[id];
};

export const deleteMany = (draft: EntityState, ids: EntityIdentifier[]) => {
  ids.forEach((id) => {
    delete draft.entities[id];
  });
};
