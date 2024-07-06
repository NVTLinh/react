

export default function TodoList() {
    return (
        <div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="d-plex row mt-3 mb-3">
                <div className="col-4">
                    <h3 className="text-xl bg-primary text-white rounded text-center py-2">Mới</h3>
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