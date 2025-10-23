import Router from './Router'
import TasksPage from './pages/TasksPage'
import TaskPage from './pages/TaskPage'

const App = () => {
    const routes = {
        '/': TasksPage,
        '/tasks/:id': TaskPage,
        '*': () => <div>404 Page Not Found</div>
    }


    return (
        <Router routes={routes}></Router>
    )
}

export default App
