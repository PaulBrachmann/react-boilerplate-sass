import { className, style } from "./style";
import { InputStyle } from "./types";

describe("className", () => {
  it("should return undefined when no class name is given", () => {
    expect(className()).toBe(undefined);
  });

  it("should return a class name", () => {
    expect(className("class1")).toBe("class1");
  });

  it("should merge multiple class names", () => {
    expect(className("class1", "class2", "class3 class4")).toBe(
      "class1 class2 class3 class4",
    );
  });
});

describe("style", () => {
  let style1: InputStyle;
  let style2: InputStyle;

  beforeEach(() => {
    style1 = { color: "#fff" };
    style2 = { background: "#000" };
  });

  it("should return undefined when no style is given", () => {
    expect(style()).toBe(undefined);
  });

  it("should return a style", () => {
    expect(style(style1)).toBe(style1);
    expect(style1).toEqual({ color: "#fff" });
  });

  it("should merge multiple styles", () => {
    expect(style(style1, style2)).toEqual({
      background: "#000",
      color: "#fff",
    });

    expect(style1).toEqual({ color: "#fff" });
    expect(style2).toEqual({ background: "#000" });
  });

  it("should merge multiple styles in nested arrays", () => {
    expect(
      style(
        style1,
        [style2],
        [],
        [{}, [{}, { borderColor: "#f00", borderWidth: 1 }], { margin: 12 }],
      ),
    ).toEqual({
      background: "#000",
      borderColor: "#f00",
      borderWidth: 1,
      color: "#fff",
      margin: 12,
    });
  });
});
