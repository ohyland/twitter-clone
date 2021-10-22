import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
	return (
		<div className="App">
			<h1>App</h1>
			<Sidebar />
			<Feed />
			<Widgets />
		</div>
	);
}

export default App;
