import { CSSProperties } from "react";

/** A style passed to further processing, before applied. */
export type InputStyle = CSSProperties | false | undefined | InputStyle[];

/** A processed style ready to be applied. */
export type OutputStyle = CSSProperties;
/** A processed static style sheet. */
export type OutputStyles<T extends string> = Record<T, OutputStyle>;

export interface IStyleSheet {
  /** The (minimum) width of a hairline stroke. */
  hairlineWidth: number;

  /** Merges down multiple css class names into one string usable by React's className prop. */
  className(...styles: (string | false | undefined)[]): string | undefined;
  /** Transforms the given styles to be used by the style attribute. */
  style(...styles: InputStyle[]): OutputStyle | undefined;
}
