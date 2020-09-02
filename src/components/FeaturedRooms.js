import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const value = this.context;
    console.log(value);
    return <p>hello from featured rooms</p>;
  }
}
