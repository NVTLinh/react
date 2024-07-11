export default function Todo(props) {
    const { todo, handleFinish, handleDelete, handleNew } = props;
    return <div>
        <div className="d-flex justify-content-between align-items-center">
            <span>08:04 06/07/2024</span>
            <div className="d-flex justify-content-between align-items-center">
                {
                    todo.status_id === 1 ?
                        <button onClick={()=>{handleFinish(todo.id)}}><i className="fa-regular fa-trash-can" ></i>HT</button>
                        : null
                }
                {
                    todo.status_id !== 3 ?
                        <button onClick={()=>{handleDelete(todo.id)}}><i className="fa-regular fa-trash-can" ></i>HỦY</button>
                        : null
                }
                {
                    todo.status_id === 3 ?
                        <button onClick={()=>{handleNew(todo.id)}}><i className="fa-regular fa-trash-can"></i>Làm mới</button>
                        : null
                }
            </div>
        </div>
        <p className="fs-3 mb-0">
            {todo.content}
        </p>
    </div>
}