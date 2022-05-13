import { useState } from 'react';
import './ToDo.css'
const ToDoForm = ({addtodo}) => {
    const [title , setTitle] = useState('')
    const [desc , setDesc] = useState('')

    function setTaskTitle(task_title){
        setTitle(task_title)
    }
    function setTaskDesc(description){
        setDesc(description)
    }
    const handleSubmission = (e) => {
        e.preventDefault();
        addtodo({ title, desc });
        setTitle("");
        setDesc("");
      };
    return (
       <form onSubmit={handleSubmission}>
        <section className="my-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 add-list-block py-3">
                        <h1 className="text-info">Add Task</h1>
                        <div className="form-group">
                            <label htmlFor="task-Title"></label>
                            <input type="text" value={title} onChange={(e)=>setTaskTitle(e.target.value)} className="form-control" id="task-Title" placeholder="Add your task Title"></input>
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="task-content"></label>
                            <textarea className="form-control" value={desc} onChange={(e)=>setTaskDesc(e.target.value)} id="task-content" rows="4" placeholder="Add your task"></textarea>
                        </div>
                        <button type="submit" className="btn btn-info w-25 add-task">Save</button>
                    </div>
                </div>
            </div>
        </section>
        </form>
    );
}
export default ToDoForm;