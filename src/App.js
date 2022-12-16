import "./App.css";
import { Table } from "react-bootstrap";
import Child from "./Child";

function App()
{

  return (
    <div className="App">
      <Table>
        <tbody>
          <tr>
            <Child />
          </tr>
        </tbody>
      </Table>
    </div>
  )

}

export default App;
