import React from 'react'

export async function getStaticProps({ params }) {
  const eventId = params.eventId;
  const events = await fetch('http://localhost:3001/event'); // Replace this with your code to fetch events from a local file
  const event = events.find(event => event.id === eventId);

  return {
    props: { event }
  }
}


export default details