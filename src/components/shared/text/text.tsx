import React from "react";
import i18n from "../../../i18n";
import { StyleSheet } from "../../../lib";
import TextProps from "./text.props";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React (Native) one.
 */
const Text: React.StatelessComponent<TextProps> = (props) => {
  const { data, tx, text, children, style, ...rest } = props;

  // Figure out which content to use
  const i18nText =
    tx && (data ? i18n.translateWithVars(tx, data) : i18n.translate(tx));
  const content = i18nText || text || children;

  return (
    <span {...rest} style={StyleSheet.style(style)}>
      {content}
    </span>
  );
};

export default Text;
