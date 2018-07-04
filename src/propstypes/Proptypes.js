import React, { Component } from "react"; // Component (в данном случае класс) импортировали с помощью
// деструктуризации, это одно из значений пакета  React
import Header from "./Header";

// эти данные как-будто получили из бекенда НАШ КОМПОНЕНТ УМНЫЙ оди на страницу
// (ОСТАЛЬНЫЕ ТУПЫЕ Heder им пробрасывается данные от Parent, и что-то рендерят)
const menu = [
  {
    link: "/articles",
    label: "Articles"
  },
  {
    link: "/contacts",
    label: "Contacts"
  },
  {
    link: "/posts",
    label: "Posts"
  }
];
class Proptypes extends Component {
  // Мы создали класс App относледовали его от Component и через
  // export default App  экспортировали
  state = {};
  render() {
    return (
      <div>
        <Header items={menu} />
        {/* Хотим данные из бекенда пробросить в Header, 
        для этого указываем атрибут items и туда передаем menu - это просто значения в компаненте */}
      </div>
    );
  }
}

export default Proptypes;
// Если мы хотим пробросить какие то данные из Parent компонента в child, как например мы пробрасывали
// из App в Header  то нужно использовать атрибуты items={menu} в Parent компоненте
// и внутри child использовать this.props.переменнная в которую все записали (items) в нашем случае
