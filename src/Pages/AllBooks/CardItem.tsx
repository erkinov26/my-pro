import img from "../../assets/fitrat.png";
export default function CardItem() {
  return (
    <li className="card-item">
      <img className="card-img" src={img} alt="img" />
      <h3 className="card-name">Book Name</h3>
      <p className="card-years">2004</p>
      <div className="books">
        <div>
          <i className="bx bxs-book"></i>
          <span className="book-number">245</span>
        </div>
        <div>
          <i className="bx bx-headphone"></i>
          <span className="audioBook">Link</span>
        </div>
      </div>
    </li>
  );
}
