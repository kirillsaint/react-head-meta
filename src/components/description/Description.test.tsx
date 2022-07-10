import React from "react";
import { render } from "@testing-library/react";

import Description from "./Description";

describe("Description", () => {
	test("renders the Description component", () => {
		render(<Description description="Hello world!" />);
	});
});
