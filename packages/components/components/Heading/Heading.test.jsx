import { render, screen } from "@testing-library/react";
import { Heading } from "../Heading";

describe("Heading", () => {
  it("renders default tag and style", () => {
    let { container } = render(<Heading>Hello World</Heading>);
    expect(screen.getByText("Hello World").tagName).toBe("H1");
    expect(screen.getByText("Hello World").className.trim()).toBe("")
  });
  it("renders h1", () => {
    let { container } = render(<Heading level={1}>Hello World</Heading>);
    expect(screen.getByText("Hello World").tagName).toBe("H1");
  });
  it("renders h2", () => {
    let { container } = render(<Heading level={2}>Hello World</Heading>);
    expect(screen.getByText("Hello World").tagName).toBe("H2");
  });
  it("renders h3", () => {
    let { container } = render(<Heading level={3}>Hello World</Heading>);
    expect(screen.getByText("Hello World").tagName).toBe("H3");
  });
  it("renders h4", () => {
    let { container } = render(<Heading level={4}>Hello World</Heading>);
    expect(screen.getByText("Hello World").tagName).toBe("H4");
  });
  it("renders h5", () => {
    let { container } = render(<Heading level={5}>Hello World</Heading>);
    expect(screen.getByText("Hello World").tagName).toBe("H5");
  });
  it("renders h6", () => {
    let { container } = render(<Heading level={6}>Hello World</Heading>);
    expect(screen.getByText("Hello World").tagName).toBe("H6");
  });

  it("renders without children", () => {
    let { container } = render(<Heading/>);
    expect(container.querySelector("h1")).toBeInTheDocument();
  });

  it("renders with psudo classnames", () => {
    let { container } = render(<Heading level={5} style={1}>Hello World</Heading>);
    expect(screen.getByText("Hello World")).toHaveClass("h1");
    expect(screen.getByText("Hello World").tagName).toBe("H5");
  });

});
