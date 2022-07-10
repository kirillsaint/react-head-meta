import React from "react";

export interface TitleProps {
	title: string;
}

export default function Title({ title }: TitleProps) {
	React.useEffect(() => {
		document.title = title;
	}, [title]);

	return null;
}
