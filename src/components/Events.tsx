import { useEffect, useState } from "react";
import { getEvents } from "../api";
import EventCard from "./EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then((events) => {
      console.log(events);
      setEvents(events);
    });
  }, []);
  return (
    <>
      <section className="events">
        <h2>Events</h2>
        <ul>
          <div className="event-wrapper">
            {events.map((event: any) => {
              return <EventCard event={event} key={event.id} />;
            })}
          </div>
        </ul>
      </section>
    </>
  );
};

export default Events;
