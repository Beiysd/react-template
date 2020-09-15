/**
 * @name Title
 * @description 标题名
 */
import React, { Component } from "react";
import styles from "./styles.module.less";

export default class Title extends Component {
  static defaultProps = {
    text: "暂无"
  };
  render() {
    return <h2>{this.props.text}</h2>;
  }
}
