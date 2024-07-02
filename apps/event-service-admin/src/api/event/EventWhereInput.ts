import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  payload?: JsonFilter;
  typeField?: StringNullableFilter;
};
