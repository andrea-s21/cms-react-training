import Details from '../components/Details/Details';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Details", () => {
    it("renders comic details", () => {
      render(<Details />);
      // check if all components are rendered
      expect(screen.getByTestId("title")).toBeInTheDocument();
      expect(screen.getByTestId("issue")).toBeInTheDocument();
      expect(screen.getByTestId("published")).toBeInTheDocument();
      expect(screen.getByTestId("creators")).toBeInTheDocument();
    });
  });