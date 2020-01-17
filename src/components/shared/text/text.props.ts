import { HTMLAttributes } from "react";

import { ApplyBasicProps } from "../types";

export default interface TextProps
  extends ApplyBasicProps<HTMLAttributes<HTMLSpanElement>> {
  /**
   * Additional data passed for i18n processing.
   * It can only be used together with `tx` and should be immutable.
   */
  data?: { [key: string]: any };

  /**
   * The key that is looked up via i18n.
   * It takes precedenve over `text` and children.
   */
  tx?: string;

  /**
   * The text to display if not using `tx` or nested components.
   * It takes precedence over children, but not `tx`.
   */
  text?: string;

  /** The name of one of the text presets. */
  preset?: string;
}
