import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

export default function AppRouter() {
	return (
		<Router>
			{/* <AuthButton /> */}
			<Switch>
				<Route path="/public">
					<PublicPage />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<PrivateRoute path="/protected">
					<ProtectedPage />
				</PrivateRoute>
			</Switch>
		</Router>
	);
}

const valiateAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		valiateAuth.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	signout(cb) {
		valiateAuth.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

function AuthButton() {
	let history = useHistory();

	return valiateAuth.isAuthenticated ? (
		<p>
			Welcome!{' '}
			<button
				onClick={() => {
					valiateAuth.signout(() => history.push('/'));
				}}
			>
				Sign out
			</button>
		</p>
	) : (
		<p>You are not logged in.</p>
	);
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				valiateAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
}

function PublicPage() {
	return <h3>Public</h3>;
}

function ProtectedPage() {
	return <h3>Protected</h3>;
}
