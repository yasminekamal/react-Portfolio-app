import myimg from '../../assets/images/delete.png';
const ToDoList = ({ todolist, removetodo }) => {
    return (

        <div className="container">
            <div >
                <h3 className="bg-secondary p-3 text-light">Tasks</h3>
            </div>
            <table id="task-list-tbl text-dark" className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>description</th>
                        <th>delete</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        todolist && todolist.length > 0
                            ?
                            (todolist.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.desc}</td>
                                        <td><button onClick={() => removetodo(index)} style={{ border: "none", outline: "none" }}><img src={myimg} width="40px" height="40px" /></button></td>
                                    </tr>
                                );
                            }))
                            :
                            (
                                <tr>
                                    <td colSpan="3">
                                        <p className="h5 mx-5 text-muted">no items on the list ..</p>

                                    </td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ToDoList;