import { InputStyle, OutputStyle } from "./types";

export const hairlineWidth = 1;

export const className = (...classNames: (string | false | undefined)[]) =>
  classNames.length
    ? classNames.filter((value) => Boolean(value)).join(" ")
    : undefined;

export const style = (...styles: InputStyle[]): OutputStyle | undefined =>
  styles.length
    ? styles.length === 1 && !Array.isArray(styles[0])
      ? styles[0] || undefined
      : styles.reduce(
          (previous: OutputStyle, current) =>
            current
              ? // tslint:disable-next-line prefer-object-spread
                Object.assign(
                  previous,
                  Array.isArray(current) ? style(...current) : current,
                )
              : previous,
          {},
        )
    : undefined;
