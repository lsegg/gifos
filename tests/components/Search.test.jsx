import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../../src/components/Search";
describe("Search", () => {
  const func = () => {}; // If I just type it directly into the prop it throws this error "value.ensureFunctionName is not a function"
  test("should change the value of the card", () => {
    const event = { target: { value: "Dragon Ball" } };

    render(<Search onNewCategory={func} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, event);

    expect(input.value).toBe("Dragon Ball");
  });

  test("should call onNewCategory if the input has a value", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<Search onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should NOT call onNewCategory if the input is empty", () => {
    const onNewCategory = jest.fn();

    render(<Search onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
