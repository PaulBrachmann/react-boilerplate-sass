import { InputStyle } from "../../lib/style/types";

/**
 * Properties all (most) shared components should implement to provide a
 * unified interface for common customizations.
 */
export interface BasicProps {
  /**
   * Additional classNames.
   * Class names will be appended to the list of class names already used by the component.
   */
  className?: string;

  /**
   * Additional styles.
   * Object styles will be used as an optional override, useful for e.g. padding & margin.
   */
  style?: InputStyle;
}

export type ApplyBasicProps<Props> = Omit<Props, keyof BasicProps> & BasicProps;
