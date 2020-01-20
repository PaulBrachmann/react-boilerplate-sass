import "../../index.scss";

import React from "react";

import { init } from "../../i18n";
import { View } from "../shared";
import styles from "./story.module.scss";

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

    return <View className={styles.story}>{this.props.children}</View>;
  }
}
