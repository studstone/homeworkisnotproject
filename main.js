'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize,
    this.newElement = () => {
      let div = {};
      if (this.selector.startsWith('.', 0)) {
        div = document.createElement('div');
        div.classList = this.selector;
        div.textContent = 'Господа, существующая теория обеспечивает широкому кругу (специалистов) участие в формировании анализа существующих паттернов поведения. А ещё предприниматели в сети интернет объективно рассмотрены соответствующими инстанциями.';
      }
      if (this.selector.startsWith('#', 0)) {
        div = document.createElement('p');
        div.id = this.selector;
        div.textContent = 'Господа, постоянный количественный рост и сфера нашей активности, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для модели развития. Но стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, указаны как претенденты на роль ключевых факторов.';
      }
      div.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      font-size: ${this.fontSize};
      `;
      document.body.prepend(div);
    };

};

const newDomElement = new DomElement();
newDomElement.selector = '#block';
newDomElement.newElement();