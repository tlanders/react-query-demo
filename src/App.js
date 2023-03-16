import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PeopleHome from "./view/PeopleHome";
import PersonView from "./view/PersonView";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route exact path="/" element={<PeopleHome/>} />
            <Route path="/people/:personId" element={<PersonView/>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
