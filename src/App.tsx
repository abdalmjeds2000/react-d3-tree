import WorkflowDiagram from "./components/WorkflowDiagram";
import data from "./data.json";
import "./App.css";

function App() {

  return (
    <div>
      <WorkflowDiagram initData={data} />
    </div>
  )
}

export default App
