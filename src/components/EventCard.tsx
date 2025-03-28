import { MdOutlineLocationOn } from "react-icons/md";

const EventCard = ({ event }: any) => {
  return (
    <article className="event-card">
      <img src={event.image} alt="A picture of an event" />
      <div className="event-body">
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <MdOutlineLocationOn className="md-location-dot" />
      </div>
    </article>
  );
};

export default EventCard;
