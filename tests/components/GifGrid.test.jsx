import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("GifGrid", () => {
  const category = "One Punch";
  test("should initially show loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("should show items when the gifs are loaded", () => {
    //FIXME: Not sure why this fails
    const gifs = [
      {
        id: "ABC",
        title: "Title",
        url: "https://url.com/",
      },
      {
        id: "123",
        title: "AnotherTitle",
        url: "https://url.com/2",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    screen.debug();
    const expected = screen.getAllByRole("img").length;

    expect(expected).toBe(gifs.length);
  });
});
