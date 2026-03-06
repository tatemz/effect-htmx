import * as Schema from "effect/Schema";

/**
 * Type for all values required by the layout view.
 */
export type LayoutModel = typeof LayoutModel.Type;
/**
 * Runtime schema for layout view model values.
 */
export const LayoutModel = Schema.TaggedStruct("LayoutModel", {
  title: Schema.String,
  stylesheetHref: Schema.String,
  scriptSrc: Schema.String,
});
