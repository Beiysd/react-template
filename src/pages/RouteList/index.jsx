/**
 * @name RouteList
 * @description 路由
 * @date
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import routes from "@/router";
import styles from "./styles.module.less";

const { SubMenu } = Menu;

class RouteList extends Component {
  /**
   * @name pageChange
   * @description 页面跳转
   */
  pageChange = (path) => {
    this.props.history.push(path);
  };
  pathSelect = () => {
    const path = window.location ? window.location.pathname : "/";
    return path;
  };
  render() {
    return (
      <div className={styles.content}>
        <Menu selectedKeys={[this.pathSelect()]} mode="inline" theme="dark" className={styles.menu}>
          {routes.map((v) =>
            v.children && v.children.length > 0 ? (
              <SubMenu title={v.name} key={v.name}>
                {v.children.map((item) => (
                  <Menu.Item key={item.path} onClick={() => this.pageChange(item.path)}>
                    {item.name}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={v.path} onClick={() => this.pageChange(v.path)}>
                {v.name}
              </Menu.Item>
            )
          )}
        </Menu>
      </div>
    );
  }
}
export default withRouter(RouteList);
