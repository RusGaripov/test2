import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: [
        {
          opp1: "Соперник 51",
          opp2: "Соперник 52",
          dateNumber: 30,
          dateMonth: "Сентября",
          stadium: "Стадион 5",
          time: "17:00",
        },
        {
          opp1: "Соперник 41",
          opp2: "Соперник 42",
          dateNumber: 16,
          dateMonth: "Июля",
          stadium: "Стадион 4",
          time: "15:00",
        },
        {
          opp1: "Соперник 31",
          opp2: "Соперник 32",
          dateNumber: 26,
          dateMonth: "Июня",
          stadium: "Стадион 3",
          time: "19:00",
        },
        {
          opp1: "Соперник 21",
          opp2: "Соперник 22",
          dateNumber: 17,
          dateMonth: "Июня",
          stadium: "Стадион 2",
          time: "12:00",
        },
        {
          opp1: "Соперник 11",
          opp2: "Соперник 12",
          dateNumber: 30,
          dateMonth: "Мая",
          stadium: "Стадион 1",
          time: "11:00",
        },
      ],
    };
  }

  wheel = () => {
    let dataObj2 = this.state.dataObj;
    dataObj2.unshift(dataObj2[4]);
    dataObj2.pop(dataObj2[4]);
    this.setState({
      dataObj: dataObj2,
    });
  };

  render() {
    return (
      <div id="wrapper" onWheel={this.wheel}>
        <div class="header">
          <div class="header__left_part">
            <a class="header_link" href="#">
              Билеты и абонементы
            </a>
          </div>
          <div class="header__menu">
            <ul>
              <li>
                <a class="header_link" href="#">
                  Как купить?
                </a>
              </li>
              <li>
                <a class="header_link" href="#">
                  Правила
                </a>
              </li>
              <li>
                <a class="header_link" href="#">
                  Возврат билетов
                </a>
              </li>
            </ul>
          </div>
          <div class="header__right_part">
            <ul>
              <li>
                <a class="header_link enter_link" href="#">
                  <i class="icon icon-login-hight"></i>
                  <span> Войти</span>
                </a>
              </li>
              <li>
                <a class="header_link sidebar_link" href="#">
                  <i class="icon icon-hamburger"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="circle_section">
          <div class="circle circle_section__big"></div>
          <div class="circle circle_section__medium"></div>
        </div>
        <div class="events_blocks">
          <div class="events_block_left">
            <div class="events_block event_left">
              <span>{this.state.dataObj[2].opp1}</span>
            </div>
          </div>
          <div class="events_block_right">
            <div class="events_block event_right">
              <span>{this.state.dataObj[2].opp2}</span>
            </div>
          </div>
        </div>
        <div class="hexagon_overlay" id="hexagon">
          <div class="hexagon_block_overlay left2">
            <div class="hexagon_block">
              <span class="hexagon_block__inner hexagon_block__title show_center"></span>
              <div class="hexagon_block__inner hexagon_block__data">
                <span class="date">{this.state.dataObj[0].dateNumber}</span>
                <span class="month">{this.state.dataObj[0].dateMonth}</span>
              </div>
              <span class="hexagon_block__inner hexagon_block__time show_center"></span>
              <a
                class="hexagon_block__inner hexagon_block__link show_center"
                href="#"
              >
                {" "}
                Купить билет
              </a>
            </div>
          </div>
          <div class="hexagon_block_overlay left1">
            <div class="hexagon_block">
              <span class="hexagon_block__inner hexagon_block__title show_center"></span>
              <div class="hexagon_block__inner hexagon_block__data">
                <span class="date">{this.state.dataObj[1].dateNumber}</span>
                <span class="month">{this.state.dataObj[1].dateMonth}</span>
              </div>
              <span class="hexagon_block__inner hexagon_block__time show_center"></span>
              <a
                class="hexagon_block__inner hexagon_block__link show_center"
                href="#"
              >
                {" "}
                Купить билет
              </a>
            </div>
          </div>
          <div class="hexagon_block_overlay center">
            <div class="hexagon_block">
              <span class="hexagon_block__inner hexagon_block__title show_center">
                {this.state.dataObj[2].stadium}
              </span>
              <div class="hexagon_block__inner hexagon_block__data">
                <span class="date">{this.state.dataObj[2].dateNumber}</span>
                <span class="month">{this.state.dataObj[2].dateMonth}</span>
              </div>
              <span class="hexagon_block__inner hexagon_block__time show_center">
                {this.state.dataObj[2].time}
              </span>
              <a
                class="hexagon_block__inner hexagon_block__link show_center show_center"
                href="#"
              >
                {" "}
                Купить билет
              </a>
            </div>
          </div>
          <div class="hexagon_block_overlay right1">
            <div class="hexagon_block">
              <span class="hexagon_block__inner hexagon_block__title show_center"></span>
              <div class="hexagon_block__inner hexagon_block__data">
                <span class="date">{this.state.dataObj[3].dateNumber}</span>
                <span class="month">{this.state.dataObj[3].dateMonth}</span>
              </div>
              <span class="hexagon_block__inner hexagon_block__time show_center"></span>
              <a
                class="hexagon_block__inner hexagon_block__link show_center"
                href="#"
              >
                {" "}
                Купить билет
              </a>
            </div>
          </div>
          <div class="hexagon_block_overlay right2">
            <div class="hexagon_block">
              <span class="hexagon_block__inner hexagon_block__title show_center"></span>
              <div class="hexagon_block__inner hexagon_block__data">
                <span class="date">{this.state.dataObj[4].dateNumber}</span>
                <span class="month">{this.state.dataObj[4].dateMonth}</span>
              </div>
              <span class="hexagon_block__inner hexagon_block__time show_center"></span>
              <a
                class="hexagon_block__inner hexagon_block__link show_center"
                href="#"
              >
                {" "}
                Купить билет
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
