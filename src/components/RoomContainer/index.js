import React from "react";
import RoomFilter from "../RoomFilter";
import RoomList from "../RoomList";
import { RoomConsumer } from "../../context";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { rooms, sortedRooms } = value;
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
