import React, {useState} from "react";
import Todo from "../component/todo";

export default function TodoList() {

    const [listTodo, setlistTodo] = useState([]);
    const [todoContent, settodoContent] = useState('');

    const listNewTodo = listTodo.filter(item => item.status_id === 1)
    const listFinishedTodo = listTodo.filter(item => item.status_id === 2)
    const listCanelledTodo = listTodo.filter(item => item.status_id === 3)

    const handleSaveTodoContent = (event)=>{
        settodoContent(event.target.value);
    }

    const handleCreaterTodo = (event) =>{
        event.preventDefault();
        if(!todoContent.trim()){
            alert('Vui lòng nhập kế hoạch của bạn')
            return
        }
    }

    const obj = {
        id: new Date().getTime(),
        content: todoContent,
        status_id: 1,
        created_at: new Date().getTime(),
    }
    settodoContent('')
    setlistTodo([...listTodo, obj])

    return (
        <div>
            <form className="d-flex" role="search" onSubmit={handleCreaterTodo}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Lưu</button>
            </form>
            <div className="d-plex row mt-3 mb-3">
                <div className="col-4">
                    <h3 className="text-xl bg-primary text-white rounded text-center py-2">Mới</h3>
                    <Todo/>
                </div>
                <div className="col-4">
                    <h3 className="text-xl bg-success text-white rounded text-center py-2">Đã hoàn thành</h3>
                </div>
                <div className="col-4">
                    <h3 className="text-xl bg-danger text-white rounded text-center py-2">Đã hủy</h3>
                </div>
            </div>
        </div>
    )
}