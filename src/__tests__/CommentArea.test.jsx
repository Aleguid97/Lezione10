import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import BookList from "../components/BookList";

describe("Are components mounting correctly", () => {
    it("Is Welcome Component mounting", () => {
        render(<App/>);
        const CommentArea = screen.queryAllByPlaceholderText(/recensioni/i)

        expect(CommentArea).toBeInTheDocument();
    });
});