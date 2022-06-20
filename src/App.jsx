import "./App.css";
import ExpandMultiple from "./features/ExpandMultiple";
import useEffectAfterMounted from "./hooks/useEffectAfterMounted";
import useExpand from "./hooks/useExpand";

function App() {
	const { expanded, togglerProps } = useExpand();

	useEffectAfterMounted(() => {
		console.log("Button was clicked!");
	}, [expanded]);

	return (
		<div className='App'>
			<ExpandMultiple />
			<button {...togglerProps}>Click to view awesomeness...</button>
			// user 2.
			<div {...togglerProps}>Burn the place down 🔥</div>
			// user 3.
			<img {...togglerProps} alt='first image in carousel' />
		</div>
	);
}

export default App;
