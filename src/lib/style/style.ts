import { InputStyle, OutputStyle } from "./types";

export const hairlineWidth = 1;

export const className = (...classNames: string[]) => classNames.join(" ");

export const style = (...styles: InputStyle[]): OutputStyle =>
  styles.reduce(
    (previous: OutputStyle, current) =>
      // tslint:disable-next-line prefer-object-spread
      Object.assign(
        previous,
        Array.isArray(current) ? style(...current) : current,
      ),
    {},
  );
