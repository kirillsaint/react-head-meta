import React from "react";

export interface DescriptionProps {
	description: string;
}

export default function Description({ description }: DescriptionProps) {
	React.useEffect(() => {
		try {
			const meta = document.querySelector('meta[name="description"]');
			if (meta) {
				meta.setAttribute("content", description);
			} else {
				const newMeta = document.createElement("meta");
				newMeta.name = "description";
				newMeta.content = description;

				document.getElementsByTagName("head")[0].appendChild(newMeta);
			}
		} catch (e) {
			console.error(`react-head-meta error: ${e}`);
		}
	}, [description]);

	return null;
}
