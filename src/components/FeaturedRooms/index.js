import React, { Component } from "react";
import { RoomContext } from "../../context";
import Title from "../Title";
import Room from "../Room";
import Loading from "../Loading";

import "./FeaturedRooms.scss";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
