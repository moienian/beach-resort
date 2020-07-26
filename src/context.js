import React, { Component } from "react";
import data from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
  };

  formatData = (data) => {
    const rooms = data.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      return { ...item.fields, id, images };
    });
    return rooms;
  };
  componentDidMount() {
    let rooms = this.formatData(data);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
    });
  }
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
