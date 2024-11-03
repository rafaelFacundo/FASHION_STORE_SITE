import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import Theme from "styles/theme";
import Header from "components/Header";

describe("Header", () => {
  /* We use either the it function or the test function, doesn't make any difference */
  it("should render correctly", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByText("Masculino")).toBeInTheDocument();
    expect(screen.getByText("Feminino")).toBeInTheDocument();
    expect(screen.getByText("Infantil")).toBeInTheDocument();
    expect(screen.getByText("Sobre nós")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
