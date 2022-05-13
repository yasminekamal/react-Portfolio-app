import { useDispatch, useSelector } from 'react-redux';
import ToDoForm from '../components/ToDo/ToDoForm'
import ToDoList from '../components/ToDo/ToDoList'
import {AddItem,RemoveItem} from '../store/actions/todosActions'
const ToDo = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();
    function AddToDoItem(item) {
        dispatch(AddItem(item))
    }
    function RemoveToDoItem(index) {
          dispatch(RemoveItem(index))
    }
    return (
        <section style={{
            background: "#f9f9fa", paddingTop: "60px"
        }}>
            <ToDoForm addtodo={AddToDoItem} />
            <ToDoList todolist={todos} removetodo={RemoveToDoItem}/>

        </section>
    );
}
export default ToDo