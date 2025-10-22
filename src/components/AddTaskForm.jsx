import {useContext} from 'react'
import Field from "./Field";
import Button from "./Button";
import {TasksContext} from "../context/TasksContext";

const AddTaskForm = () => {
    const {
        addTask,
        newTaskInputRef,
        newTaskTitle,
        setNewTaskTitle
    } = useContext(TasksContext);

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label="New task title"
                id="new-task"
                value={newTaskTitle}
                onInput={({target}) => setNewTaskTitle(target.value)}
                ref={newTaskInputRef}
            />
            <Button type='submit'>Add</Button>
        </form>
    )
}

export default AddTaskForm