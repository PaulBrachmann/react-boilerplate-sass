import i18n, { init } from ".";

describe("translate", () => {
  it("should translate text", async () => {
    await init();
    expect(i18n.translate("__tests__:key")).toBe("It works!");
  });

  it("should fall back for non-existent keys", async () => {
    await init();
    expect(i18n.translate("__tests__:noKey")).toBe("noKey");
  });
});
