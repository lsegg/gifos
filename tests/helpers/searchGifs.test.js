import { searchGifs } from "../../src/helpers/searchGifs";
describe("searchGifs", () => {
  test("should return a gif array", async () => {
    const gifs = await searchGifs("One Punch");

    // FIXME: NOT WORKING BECAUSE OF ENV VARIABLE --> SyntaxError: Cannot use 'import.meta' outside a module
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
