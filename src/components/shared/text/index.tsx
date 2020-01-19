import React from "react";
import i18n from "../../../i18n";
import { StyleSheet } from "../../../lib";
import TextProps from "./text.props";

import presets from "./text.module.scss";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React (Native) one.
 */
const Text: React.StatelessComponent<TextProps> = (props) => {
  const {
    children,
    className,
    data,
    preset = "default",
    style,
    text,
    tx,
    ...rest
  } = props;

  // Figure out which content to use
  const i18nText =
    tx && (data ? i18n.translateWithVars(tx, data) : i18n.translate(tx));
  const content = i18nText || text || children;

  return (
    <span
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
    >
      {content}
    </span>
  );
};

export default Text;
