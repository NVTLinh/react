import React, { useState } from "react";
import Todo from "../component/todo";

export default function TodoList() {
    const [listTodo, setListTodo] = useState([]);
    const [todoContent, setTodoContent] = useState('');

    const handleSaveTodoContent = (event) => {
        setTodoContent(event.target.value);
    }

    const handleCreateTodo = (event) => {
        event.preventDefault();
        if (!todoContent.trim()) {
            alert('Vui lòng nhập nội dung công việc');
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            content: todoContent,
            status_id: 1,
            created_at: new Date().getTime(),
        };

        setListTodo([...listTodo, newTodo]);
        setTodoContent('');
    }

    const handleFinish = (todoID) => {
        const listTodoClone = [...listTodo];
        listTodoClone.forEach((item)=>{
            if(item.id === todoID){
                item.status_id = 2
            }
        })
        setListTodo(listTodoClone);
    }

    const handleDelete = (todoID) => {
        const listTodoClone = [...listTodo];
        listTodoClone.forEach((item)=>{
            if(item.id === todoID){
                item.status_id = 3
            }
        })
        setListTodo(listTodoClone);
    }

    const handleNew = (todoID) => {
        const listTodoClone = [...listTodo];
        listTodoClone.forEach((item)=>{
            if(item.id === todoID){
                item.status_id = 1
            }
        })
        setListTodo(listTodoClone);
    }
    
    const listNewTodo = listTodo.filter(item => item.status_id === 1);
    const listFinishedTodo = listTodo.filter(item => item.status_id === 2);
    const listCancelledTodo = listTodo.filter(item => item.status_id === 3);
    
    const renderListTodo = (listTodoTarget) => {
        return listTodoTarget.map((item) => (
            <Todo key={item.id} todo={item} handleFinish={handleFinish} handleDelete={handleDelete} handleNew={handleNew}/>
            ));
        }
        console.log(listTodo);

    return (
        <div>
            <form className="d-flex" role="search" onSubmit={handleCreateTodo}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Nhập công việc của bạn"
                    aria-label="Search"
                    onChange={handleSaveTodoContent}
                    value={todoContent}
                />
                <button className="btn btn-outline-success" type="submit">Lưu</button>
            </form>

            <div className="d-flex row mt-3 mb-3">
                <div className="col-4">
                    <h3 className="text-xl bg-primary text-white rounded text-center py-2">Mới</h3>
                    {renderListTodo(listNewTodo)}
                </div>
                <div className="col-4">
                    <h3 className="text-xl bg-success text-white rounded text-center py-2">Đã hoàn thành</h3>
                    {renderListTodo(listFinishedTodo)}
                </div>
                <div className="col-4">
                    <h3 className="text-xl bg-danger text-white rounded text-center py-2">Đã hủy</h3>
                    {renderListTodo(listCancelledTodo)}
                </div>
            </div>
        </div>
    )
}
