/**
 * @name Home
 * @description 主页
 * @author 方知有
 * @date 2020/08/10
 */
import React, { Component } from "react";
import { Button, Input, Spin, Empty } from "antd";
import { encrypt, decrypt } from "@/utils/aes";
import { objectToSearch, randomNum } from "@/utils";
import { testGet } from "@/api/test";
import miment from "@/utils/miment";
import Title from "@/component/Title";
import styles from "./styles.module.less";

const palpitation = "有人住高楼，有人在深沟；有人光万丈，有人一身锈；世人万千种，浮云莫去求；斯人若彩虹，遇上方知有";
class Home extends Component {
  state = {
    encryptStr: "",
    decryptStr: "",
    weath: "",
    loading: false,
    area: "",
    random: ""
  };

  /**
   * @name init
   * @description 初始化请求数据
   */
  init = async (area) => {
    console.log("area===", area);
    try {
      this.setState({ loading: true, area }); //加载状态
      const { type, res } = await testGet(area);
      if (type) {
        this.setState({ weath: res.result });
      } else {
        this.setState({ weath: "" });
      }
    } catch (error) {
      this.setState({ weath: "" });
    } finally {
      this.setState({ loading: false });
    }
  };

  /**
   * @name onChange
   * @param {String} 输入内容
   */
  onChange = async (val) => {
    if (!val) {
      return;
    }
    const encryptStr = await encrypt(val);
    this.setState({ encryptStr });
  };

  /**
   * @name decrypts
   * @desc 解密操作
   */
  decrypts = async () => {
    const { encryptStr } = this.state;
    const decryptStr = await decrypt(encryptStr);
    this.setState({ decryptStr });
  };

  /**
   * @name pageChange
   * @desc 页面间传值
   */
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
  /**
   * @name randoms
   * @desc 随机数生成
   */
  randoms = () => {
    const random = randomNum();
    this.setState({ random });
  };
  render() {
    const config = window.APP_CONFIG;

    const { weath, loading, random } = this.state;
    return (
      <div className={styles.btn}>
        <div>
          <Button type="primary">按钮</Button>
        </div>
        {/**全局样式 */}
        <div className={styles.block}>
          <Title text="全局样式" />
          <p className={styles.over} title={palpitation}>
            {palpitation}
          </p>
        </div>
        {/**加密解密 */}
        <div className={styles.block}>
          <Title text="加密解密" />
          <div className={styles.flex}>
            输入框
            <Input onChange={(e) => this.onChange(e.target.value)} />
          </div>
          <div className={styles.flex}>加密：{this.state.encryptStr}</div>
          <Button onClick={this.decrypts}>解密</Button>
          <div className={styles.flex}>解密：{this.state.decryptStr}</div>
        </div>
        {/**页面跳转传参 */}
        <div className={styles.block}>
          <Title text="页面跳转传参" />
          <Button onClick={this.pageChange}>url-search</Button>
        </div>
        {/**随机数 */}
        <div className={styles.block}>
          <Title text="随机数" />
          <div className={styles.flex}>
            <Button onClick={this.randoms}>生成</Button>：{random}
          </div>
        </div>

        {/**天气 */}
        <div className={styles.block}>
          <Title text="天气" />
          <Input placeholder="输入地区,回车查看天气" onPressEnter={(e) => this.init(e.target.value)} />
          <Spin spinning={loading}>
            {!weath ? (
              <Empty />
            ) : (
              <div>
                <p>城市：{weath.city}</p>
                {weath.future.map((item) => (
                  <div className={styles.flex} key={item.date}>
                    时间：{item.date}---周{miment(item.date).format("WW")}；温度：{item.temperature}；天气：{item.weather}；风向：{item.direct}；
                  </div>
                ))}
              </div>
            )}
          </Spin>
        </div>
      </div>
    );
  }
}

export default Home;
