class Button {
  constructor(text, border, color, background) {
    this.text = text;
    this.border = border;
    this.color = color;
    this.background = background;
  }

  render() {
    const btn = document.createElement('button');
    btn.textContent = this.text;
    btn.className = 'btn';
    btn.style.border = this.border;
    btn.style.color = this.color;
    btn.style.background = this.background;

    btn.addEventListener('click', () => {
      console.log(`Кнопка ${this.text} натиснута. Колір кнопки - ${this.background}`);
    });

    document.getElementById('regular-buttons').appendChild(btn);
  }
}

class RoundedButton extends Button {
  constructor(text, border, color, background, borderRadius) {
    super(text, border, color, background);
    this.borderRadius = borderRadius;
  }

  render() {
    const btn = document.createElement('button');
    btn.textContent = this.text;
    btn.className = 'btn-rounded';
    btn.style.border = this.border;
    btn.style.color = this.color;
    btn.style.background = this.background;
    btn.style.borderRadius = this.borderRadius;

    btn.addEventListener('click', () => {
      console.log(`Кнопка ${this.text} натиснута. Колір кнопки - ${this.background}`);
    });

    this.dropShadow(btn);

    document.getElementById('rounded-buttons').appendChild(btn);
  }

  dropShadow(btn) {
    btn.addEventListener('mouseenter', () => {
      btn.style.boxShadow = '4px 4px 10px rgba(0, 0, 0, 0.4)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = 'none';
    });
  }
}

const btn1 = new Button('Click me', '2px solid blue', 'blue', 'lightblue');
const btn2 = new Button('Press here', '2px solid green', 'green', 'lightgreen');
const btn3 = new Button('Click here', '2px solid steelblue', 'steelblue', 'lightskyblue');

btn1.render();
btn2.render();
btn3.render();

const rbtn1 = new RoundedButton('Rounded_1', '2px solid green', 'green', 'lightgreen', '20px');
const rbtn2 = new RoundedButton('Rounded_2', '2px solid orange', 'orange', 'orange', '20px');
const rbtn3 = new RoundedButton('Rounded_3', '2px solid teal', 'teal', 'lightcyan', '20px');

rbtn1.render();
rbtn2.render();
rbtn3.render();
