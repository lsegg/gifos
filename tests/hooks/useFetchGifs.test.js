import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("useFetchGifs", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return gifs array and isLoading set to false ", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
