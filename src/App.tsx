import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import BasicQuery from './pages/BasicQuery';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import PaginatedQuery from './pages/PaginatedQuery';

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<Header />
			<main className="container mx-auto p-4">
				<QueryClientProvider client={queryClient}>
					<Switch>
						<Route path="/" exact>
							<BasicQuery />
						</Route>
						<Route path="/paginated">
							<PaginatedQuery />
						</Route>
						<Route path="/user/create">
							<CreateUser />
						</Route>
						<Route path="/users/edit/:id">
							<EditUser />
						</Route>
					</Switch>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</main>
		</>
	);
}

export default App;
