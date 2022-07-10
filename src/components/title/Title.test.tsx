import React from "react";
import { render } from "@testing-library/react";

import Title from "./Title";

describe("Title", () => {
	test("renders the Title component", () => {
		render(<Title title="Hello world!" />);
	});
});
