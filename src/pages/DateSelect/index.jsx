/**
 * @name TimeList
 * @desc 日期列表
 * @author 方知有
 * @date 2020/09/03
 */
import React, { Component } from "react";
import { leaperWeek, leaperMonth, leaperDate, leaperTerm } from "@/utils/now-date";
import { DatePicker } from "antd";
import moment from "moment";
import { getSearchObject } from "@/utils";
import styles from "./styles.module.less";
const { RangePicker } = DatePicker;
const timeList = [{ code: 0, name: "全部" }, { code: 1, name: "本日" }, { code: 2, name: "本周" }, { code: 3, name: "本月" }, { code: 4, name: "本学期" }];
const dateFormat = "YYYY-MM-DD";
class Timeist extends Component {
  state = {
    timeCode: 0,
    startTime: null,
    endTime: null
  };
  /**
   * @name typeChange
   * @param code number 类型code
   */
  typeChange = (code) => {
    this.setState({ timeCode: code }, () => {
      this.times();
    });
  };

  /**
   * @name times
   * @description 时间类型所对应的时间
   * @param string YYYY-MM-DD
   */
  times = () => {
    const { timeCode } = this.state;
    let startTime = "";
    let endTime = "";
    if (timeCode === 1) {
      const time = leaperDate();
      startTime = time.today;
      endTime = time.today;
    } else if (timeCode === 2) {
      const time = leaperWeek();
      startTime = time.mondy;
      endTime = time.sundy;
    } else if (timeCode === 3) {
      const time = leaperMonth();
      startTime = time.start_month;
      endTime = time.end_month;
    } else if (timeCode === 4) {
      const time = leaperTerm();
      startTime = time.termstart;
      endTime = time.termend;
    } else {
      startTime = null;
      endTime = null;
    }
    this.setState({ startTime, endTime });
  };
  /**
   * @name getRangePikcer
   * @desc 日期选择
   * @param value 标准时间[moment,moment]
   * @param dateString 字符串[YYYY-MM-DD,YYYY-MM-DD]
   */
  getRangePikcer = (value, dateString) => {
    console.log("value===", value, dateString);
    this.setState({ startTime: dateString[0], endTime: dateString[1] }, () => {
      this.pickerTimeChange();
    });
  };

  /**
   * @name pickerTimeChange
   * @description 自选日期对按钮日期影响
   */
  pickerTimeChange = () => {
    const timeDay = leaperDate();
    const timeWeek = leaperWeek();
    const timeMonth = leaperMonth();
    const timeTerm = leaperTerm();
    const today = timeDay.today;
    const weekStart = timeWeek.mondy;
    const weekEnd = timeWeek.sundy;
    const monthStart = timeMonth.start_month;
    const monthEnd = timeMonth.end_month;
    const termStart = timeTerm.termstart;
    const termEnd = timeTerm.termend;
    const { startTime, endTime } = this.state;
    let code = "";
    if (!startTime && !endTime) {
      code = 0;
    } else if (startTime === today && endTime === today) {
      //今天
      code = 1;
    } else if (startTime === weekStart && endTime === weekEnd) {
      //本周
      code = 2;
    } else if (startTime === monthStart && endTime === monthEnd) {
      //本月
      code = 3;
    } else if (startTime === termStart && endTime === termEnd) {
      //本学期
      code = 4;
    }
    this.setState({ timeCode: code });
  };
  render() {
    const { yui, mio, ritsu, mugi, azusa, test } = getSearchObject();
    const { timeCode, startTime, endTime } = this.state;
    console.log("startTime, endTime==", startTime, endTime);
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.ul}>
            {timeList.map((v) => (
              <li key={v.code} className={`${styles.inline} ${timeCode === v.code ? styles.active : null}`} onClick={() => this.typeChange(v.code)}>
                {v.name}
              </li>
            ))}
          </div>
          <RangePicker
            style={{ minWidth: "210px", maxWidth: "15%", marginLeft: "2%" }}
            value={!startTime ? null : [moment(startTime, dateFormat), moment(endTime, dateFormat)]}
            onChange={this.getRangePikcer}
          />
        </div>
        <p>getSearchObject</p>
        <p>{yui}</p>
        <p>{mio}</p>
        <p>{ritsu}</p>
        <p>{mugi}</p>
        <p>{azusa}</p>
        <p>{test}</p>
      </div>
    );
  }
}
export default Timeist;
