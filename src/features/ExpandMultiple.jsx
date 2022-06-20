import React, { useState } from "react";
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

function ExpandMultiple() {
	const [activeIndex, setActiveIndex] = useState(null);
	const onExpand = (evt) => setActiveIndex(evt.target.dataset.index);
	return (
		<>
			{information.map(({ header, note }, index) => (
				<Expandable key={index} shouldExpand={index === +activeIndex} onExpand={onExpand}>
					<Expandable.Header data-index={index}>{header}</Expandable.Header>
					<Expandable.Icon />
					<Expandable.Body>{note}</Expandable.Body>
				</Expandable>
			))}
		</>
	);
}

export default ExpandMultiple;
