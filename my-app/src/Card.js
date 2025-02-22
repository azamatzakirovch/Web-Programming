import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => (
    <div className="card mx-auto shadow-sm" style={{ width: '18rem' }}>
        <img src="https://picsum.photos/536/354" className="card-img-top" alt="Random" />
        <div className="card-body">
            <h5 className="card-title text-primary">My Photo is here</h5>
            <p className="card-text text-muted">
                I donno why but here i choose randomly photo. This photo is came from somewhere. I wont tell you. Just joke 😀
            </p>
            <a href="#" className="btn btn-primary">Close This Page ASAP</a>
        </div>
    </div>
);

export default Card;