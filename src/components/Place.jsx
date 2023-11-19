import img from "../assets/Fill 219.png"

function Place(props) {

  return (
    <div className="place">

      <div className="place-img">
        <img src={props.imageUrl} />
      </div>

      <div className="place-details">
        <div className="location">
          <img src={img} className="location-img" />
          <p className="location-text">{props.location}</p>
        </div>
        <h1 className="place-title">{props.title}</h1>
        <p className="place-date">{props.startDate} - {props.endDate}</p>
        <p className="place-describtion">{props.description }</p>
      </div>

    </div>
  )
}

export default Place
