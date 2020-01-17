import React from "react";

import { StyleSheet } from "../../../lib";
import ViewProps from "./view.props";

/**
 * A general purpose container.
 *
 * This component is a HOC over the built-in React (Native) one.
 */
const View: React.StatelessComponent<ViewProps> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <div {...rest} style={StyleSheet.style(style)}>
      {children}
    </div>
  );
};

export default View;
