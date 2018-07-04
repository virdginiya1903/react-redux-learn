import React, { Component } from "react";

class Header extends Component {
  render() {
    // чтобы работать с данными мы используем this.props
    console.log("items", this.props.items); //выведет в console, что items - является массивом, который пробросили из App
    return (
      <div>
        <h1>Header</h1>
        <div>
          {this.props.items.map((item, index) => (
            <a href={item.link} key={index}>
              {item.label}
            </a> //key={index} - уникальный атрибут
            // элемент a href=рендерятся из массива menu от родителя
          ))}
        </div>
      </div>
    );
  }
}

export default Header;

// Если мы хотим пробросить какие то данные из Parent компонента в child, как например мы пробрасывали
// из App в Header  то нужно использовать атрибуты items={menu} в Parent компоненте
// и внутри child использовать this.props.переменнная в которую все записали (items) в нашем случае
