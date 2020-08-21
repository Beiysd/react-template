/**
 * @name Home
 * @description 主页
 * @author 方知有
 * @date 2020/08/10
 */
import React, { Component } from "react";
import { Button, Input } from "antd";

import styles from "./styles.module.less";

const palpitation = "有人住高楼，有人在深沟；有人光万丈，有人一身锈；世人万千种，浮云莫去求；斯人若彩虹，遇上方知有";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className={styles.btn}>
        <div>
          <Button type="primary">按钮</Button>
        </div>
        <p className={styles.over} title={palpitation}>
          {palpitation}
        </p>
        <div>
          输入框
          <Input />
        </div>
      </div>
    );
  }
}

export default Home;
