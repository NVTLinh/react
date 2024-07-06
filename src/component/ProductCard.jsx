export default function ProductCard(props) {

    console.log(props);

    return (
        <div className='col-3'>
            <div className="card">
            <img src={props.randomNumber.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.randomNumber.name}</h5>
                <p className="card-text">{props.randomNumber.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
    )
}