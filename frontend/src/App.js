
import './App.css';
import {Context} from "./auth/Context";
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
     <Context>
        <AppRouter/>
      </Context>
    </div>
  );
}

export default App;
