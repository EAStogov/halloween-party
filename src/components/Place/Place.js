import "./Place.css";
import point from "../../images/point.svg"

function Place() {
  return (
    <section className="place">
      <h2 className="page__title place__title">WHERE?</h2>
      <div className="place__container">
        <img className="place__image" src={point} alt="место"/>
        <p className="place__adress">
          Люберцы,<br/>
          Летчика Ларюшина, 4к2, под.3, кв.512
        </p>
      </div>
    </section>
  )
}

export default Place;