import "./App.css";
import ExpandMultiple from "./features/ExpandMultiple";
import useEffectAfterMounted from "./hooks/useEffectAfterMounted";
import useExpand from "./hooks/useExpand";

function App() {
	const { expanded, getTogglerProps, reset } = useExpand();
	const onClickHandler = () => {
		console.log("on click handler ");
	};
	useEffectAfterMounted(() => {
		console.log("Button was clicked!");
	}, [expanded]);

	return (
		<div className='App'>
			<ExpandMultiple />
			<button {...getTogglerProps({ onClick: onClickHandler })}>Click to view awesomeness...</button>
			{expanded && <div>hello world</div>}
			<button onClick={reset}>reset</button>
		</div>
	);
}

export default App;
