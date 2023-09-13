import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/preact";
import App from "../src/index.js";

afterEach(() => cleanup());

// Failing test
it("can render the app inside the document with a custom container", () => {
  const { getByRole } = render(<App />, {
    container: document.createElement("main")
  });

  expect(getByRole("main")).toBeInTheDocument();
});
