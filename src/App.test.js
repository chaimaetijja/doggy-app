import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders the landing page", () => {
  render(<App />);

  //expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
 // expect(screen.getByRole("combobox")).toHaveDisplayValue("select a breed");
});

test("resets the view",  () =>{
  render(<App/>);

  const resetButton= screen.getByRole("button", {name: "Reset"});

  userEvent.click(resetButton);
  
  expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  expoect(screen.getByRole("button", {name: "Search"})).toBeDisabled();
  expect(screen.getByRole("img")).toBeInTheDocument();

})