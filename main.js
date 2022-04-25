'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize,
    this.newElement = () => {
      if (this.selector.startsWith('.', 0)) {
        const div = document.createElement('div');
        div.classList = this.selector;
        div.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      fontSize: ${this.fontSize};
      `;
        div.textContent = 'Господа, существующая теория обеспечивает широкому кругу (специалистов) участие в формировании анализа существующих паттернов поведения. А ещё предприниматели в сети интернет объективно рассмотрены соответствующими инстанциями.';
        document.body.prepend(div);
      }
      if (this.selector.startsWith('#', 0)) {
        const paragraph = document.createElement('p');
        paragraph.id = this.selector;
        paragraph.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      fontSize: ${this.fontSize};
      `;
        paragraph.textContent = 'Господа, постоянный количественный рост и сфера нашей активности, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для модели развития. Но стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, указаны как претенденты на роль ключевых факторов.';
        document.body.prepend(paragraph);
      }
    };

};

const newDomElement = new DomElement();
newDomElement.selector = '.block';
newDomElement.newElement();