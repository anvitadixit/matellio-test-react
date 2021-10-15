import "./App.css";
import Dashboard from "./dashboard";
import store from "./redux";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
