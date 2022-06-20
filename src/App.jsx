import "./App.css";
import ExpandMultiple from "./features/ExpandMultiple";
import useEffectAfterMounted from "./hooks/useEffectAfterMounted";
import useExpand from "./hooks/useExpand";

function App() {
	const { expand, toggle } = useExpand();

	useEffectAfterMounted(() => {
		console.log("Button was clicked!");
	}, [expand]);

	return (
		<div className='App'>
			<ExpandMultiple />
			<button onClick={toggle}>Expand</button>
			{expand && <div>Hello world</div>}
		</div>
	);
}

export default App;
