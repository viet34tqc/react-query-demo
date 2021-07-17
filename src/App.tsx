import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import BasicQuery from './pages/BasicQuery';
import InfiniteQuery from './pages/InfiniteQuery';
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
						<Route path="/" exact>
							<InfiniteQuery />
						</Route>
					</Switch>
				</QueryClientProvider>
			</main>
		</>
	);
}

export default App;
