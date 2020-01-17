import React from "react";

import { init } from "../../i18n";
import { View } from "../shared";

export default class Story extends React.Component<{}, { ready: boolean }> {
  protected isCurrentlyMounted = false;

  public async componentDidMount() {
    this.isCurrentlyMounted = true;

    await init();
    if (this.isCurrentlyMounted) this.setState({ ready: true });
  }

  public componentWillUnmount() {
    this.isCurrentlyMounted = false;
  }

  public render() {
    if (!this.state || !this.state.ready) return null;

    return <View style={{ flex: 1 }}>{this.props.children}</View>;
  }
}
