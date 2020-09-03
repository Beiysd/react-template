/**
 * @name Swiper
 * @version 4.5.1
 */
import React, { Component } from "react";
import { Spin, Icon } from "antd";
import styles from "./styles.module.less";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class Swipers extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    // this.setState({ loading: true }, () => {
    //   this.init();
    // });
    this.init();
  }
  init = () => {
    new window.Swiper(".swiper-container", {
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      speed: 500,
      mousewheel: true
    });
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 10);
  };

  render() {
    return (
      <Spin indicator={antIcon} spinning={this.state.loading} style={{ zIndex: "1000" }}>
        <div className="swiper-container" style={{ width: 500, height: 200, border: "1px solid #ccc" }}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className={styles.slides}>001</div>
            </div>
            <div className="swiper-slide">
              <div className={styles.slides}>002</div>
            </div>
            <div className="swiper-slide">
              <div className={styles.slides}>003</div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </Spin>
    );
  }
}
export default Swipers;
