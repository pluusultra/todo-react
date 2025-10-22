import {useContext} from 'react'
import Field from "./Field";
import {TasksContext} from "../context/TasksContext";

const SearchTaskForm = () => {
    const {
        setSearchQuery,
        searchQuery,
    } = useContext(TasksContext);

    return (
        <form
            className="todo__form"
            onSubmit={(event) => event.preventDefault()}
        >
            <Field
                className="todo__field"
                label="Search task"
                id="search-task"
                type="search"
                value={searchQuery}
                onInput={({target}) => setSearchQuery(target.value)}
            />
        </form>
    )
}

export default SearchTaskForm