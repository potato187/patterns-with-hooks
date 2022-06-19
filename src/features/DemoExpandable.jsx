import React from "react";
import { Expandable } from "../components";

const information = [
	{
		header: "Why everyone should live forever",
		note: "This is highly sensitive information ... !!!!",
	},
	{
		header: "The internet disappears",
		note: "I just uncovered the biggest threat...",
	},
	{
		header: "The truth about Elon musk and Mars!",
		note: "Nobody tells you this...",
	},
];

function DemoExpandable() {
	return (
		<>
			{information.map(({ header, note }, index) => (
				<Expandable key={index}>
					<Expandable.Header>{header}</Expandable.Header>
					<Expandable.Icon />
					<Expandable.Body>{note}</Expandable.Body>
				</Expandable>
			))}
		</>
	);
}

export default DemoExpandable;
