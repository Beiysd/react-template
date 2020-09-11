/**
 * @name Home
 * @description 主页
 * @author 方知有
 * @date 2020/08/10
 */
import React, { Component } from "react";
import { Button, Input } from "antd";
import { encrypt, decrypt } from "@/utils/aes";
import { objectToSearch } from "@/utils";
import styles from "./styles.module.less";

const palpitation = "有人住高楼，有人在深沟；有人光万丈，有人一身锈；世人万千种，浮云莫去求；斯人若彩虹，遇上方知有";
class Home extends Component {
  state = {
    encryptStr: "",
    decryptStr: ""
  };
  onChange = async (val) => {
    if (!val) {
      return;
    }
    const encryptStr = await encrypt(val);
    this.setState({ encryptStr });
  };
  decrypts = async () => {
    const { encryptStr } = this.state;
    const decryptStr = await decrypt(encryptStr);
    this.setState({ decryptStr });
  };
  pageChange = () => {
    const searach = objectToSearch({
      yui: "唯",
      mio: "澪",
      ritsu: "律",
      mugi: "紬",
      azusa: "梓",
      test: "aaa_aaa-aaa"
    });
    this.props.history.push("/date-select" + searach);
  };

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
          <Input onChange={(e) => this.onChange(e.target.value)} />
        </div>
        <div>加密：{this.state.encryptStr}</div>
        <Button onClick={this.decrypts}>解密</Button>
        <div>解密：{this.state.decryptStr}</div>
        <p></p>
        <Button onClick={this.pageChange}>url-search</Button>
      </div>
    );
  }
}

export default Home;
