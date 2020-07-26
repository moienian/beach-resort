import React, { Component } from "react";
import { RoomContext } from "../../context";
import Title from "../Title";
import Room from "../Room";
import "./FeaturedRooms.scss";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms } = this.context;
    return (
      <section className="featured-rooms">
        <Title title="featured room" />
        <div className="featured-rooms-center">
          {rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </div>
      </section>
    );
  }
}
