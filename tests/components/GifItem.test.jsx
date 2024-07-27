import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";
describe("GifItem", () => {
  const title = "Title";
  const url = "https://url.com/";
  test("should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the gif with the right url and alt props", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
