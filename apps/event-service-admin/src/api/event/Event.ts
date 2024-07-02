import { JsonValue } from "type-fest";

export type Event = {
  createdAt: Date;
  id: string;
  payload: JsonValue;
  typeField: string | null;
  updatedAt: Date;
};
