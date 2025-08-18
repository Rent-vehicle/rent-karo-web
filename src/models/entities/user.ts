import { Entity } from "@/models/entity";

export interface User extends Entity {
  firstName: string;
  lastName: string;
  email: string;
}
