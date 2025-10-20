import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange
    } = props

    const hasTasks = true

    if (!hasTasks) {
        return (
            <div className="todo__empty-message"></div>
        )
    }

    return (
        <ul className="todo__list">
            {tasks.map((task) => (
                <TodoItem
                    className="todo__item"
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    key={task.id}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                    onTask
                />
            ))}
        </ul>
    )
}

export default TodoList