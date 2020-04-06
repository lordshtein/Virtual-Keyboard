const Keyboard = {
  elements: {
    wrapper: null,
    keyboardLayout: null,
    keys: [],
    textarea: null,
  },


  properties: {
    inputValue: '',
    capslock: 0,
    language: 'ru',
    shift: 0,
  },

  keyLayout: [{
    eventCode: 'Backquote',
    ru: ['ё', 'Ё'],
    en: ['`', '~'],
  },
  {
    eventCode: 'Digit1',
    ru: ['1', '!'],
    en: ['1', '!'],
  },
  {
    eventCode: 'Digit2',
    ru: ['2', '"'],
    en: ['2', '@'],
  },
  {
    eventCode: 'Digit3',
    ru: ['3', '№'],
    en: ['3', '#'],
  },
  {
    eventCode: 'Digit4',
    ru: ['4', ';'],
    en: ['4', '$'],
  },
  {
    eventCode: 'Digit5',
    ru: ['5', '%'],
    en: ['5', '%'],
  },
  {
    eventCode: 'Digit6',
    ru: ['6', ':'],
    en: ['6', '^'],
  },
  {
    eventCode: 'Digit7',
    ru: ['7', '?'],
    en: ['7', '&'],
  },
  {
    eventCode: 'Digit8',
    ru: ['8', '*'],
    en: ['8', '*'],
  },
  {
    eventCode: 'Digit9',
    ru: ['9', '('],
    en: ['9', '('],
  },
  {
    eventCode: 'Digit0',
    ru: ['0', ')'],
    en: ['0', ')'],
  },
  {
    eventCode: 'Minus',
    ru: ['-', '_'],
    en: ['-', '_'],
  },
  {
    eventCode: 'Equal',
    ru: ['=', '+'],
    en: ['=', '+'],
  },
  {
    eventCode: 'Backspace',
    ru: ['', ''],
    en: ['', ''],
  },

  {
    eventCode: 'Tab',
    ru: ['', ''],
    en: ['', ''],
  },
  {
    eventCode: 'KeyQ',
    ru: ['й', 'Й'],
    en: ['q', 'Q'],
  },
  {
    eventCode: 'KeyW',
    ru: ['ц', 'Ц'],
    en: ['w', 'W'],
  },
  {
    eventCode: 'KeyE',
    ru: ['у', 'У'],
    en: ['e', 'E'],
  },
  {
    eventCode: 'KeyR',
    ru: ['к', 'К'],
    en: ['r', 'R'],
  },
  {
    eventCode: 'KeyT',
    ru: ['е', 'Е'],
    en: ['t', 'T'],
  },
  {
    eventCode: 'KeyY',
    ru: ['н', 'Н'],
    en: ['y', 'Y'],
  },
  {
    eventCode: 'KeyU',
    ru: ['г', 'Г'],
    en: ['u', 'U'],
  },
  {
    eventCode: 'KeyI',
    ru: ['ш', 'Ш'],
    en: ['i', 'I'],
  },
  {
    eventCode: 'KeyO',
    ru: ['щ', 'Щ'],
    en: ['o', 'O'],
  },
  {
    eventCode: 'KeyP',
    ru: ['з', 'З'],
    en: ['p', 'P'],
  },
  {
    eventCode: 'BracketLeft',
    ru: ['х', 'Х'],
    en: ['[', '{'],
  },
  {
    eventCode: 'BracketRight',
    ru: ['ъ', 'Ъ'],
    en: [']', '}'],
  },
  {
    eventCode: 'Delete',
    ru: ['Del', 'Del'],
    en: ['Del', 'Del'],
  },

  {
    eventCode: 'CapsLock',
    ru: ['', ''],
    en: ['', ''],
  },
  {
    eventCode: 'KeyA',
    ru: ['ф', 'Ф'],
    en: ['a', 'A'],
  },
  {
    eventCode: 'KeyS',
    ru: ['ы', 'Ы'],
    en: ['s', 'S'],
  },
  {
    eventCode: 'KeyD',
    ru: ['в', 'В'],
    en: ['d', 'D'],
  },
  {
    eventCode: 'KeyF',
    ru: ['а', 'А'],
    en: ['f', 'F'],
  },
  {
    eventCode: 'KeyG',
    ru: ['п', 'П'],
    en: ['g', 'G'],
  },
  {
    eventCode: 'KeyH',
    ru: ['р', 'Р'],
    en: ['h', 'H'],
  },
  {
    eventCode: 'KeyJ',
    ru: ['о', 'О'],
    en: ['j', 'J'],
  },
  {
    eventCode: 'KeyK',
    ru: ['л', 'Л'],
    en: ['k', 'K'],
  },
  {
    eventCode: 'KeyL',
    ru: ['д', 'Д'],
    en: ['l', 'L'],
  },
  {
    eventCode: 'Semicolon',
    ru: ['ж', 'Ж'],
    en: [';', ':'],
  },
  {
    eventCode: 'Quote',
    ru: ['э', 'Э'],
    en: ["'", '"'],
  },
  {
    eventCode: 'Backslash',
    ru: ['\\', '/'],
    en: ['\\', '||'],
  },
  {
    eventCode: 'Enter',
    ru: ['', ''],
    en: ['', ''],
  },

  {
    eventCode: 'ShiftLeft',
    ru: ['Shift', 'Shift'],
    en: ['Shift', 'Shift'],
  },
  {
    eventCode: 'KeyZ',
    ru: ['я', 'Я'],
    en: ['z', 'Z'],
  },
  {
    eventCode: 'KeyX',
    ru: ['ч', 'Ч'],
    en: ['x', 'X'],
  },
  {
    eventCode: 'KeyC',
    ru: ['c', 'C'],
    en: ['с', 'С'],
  },
  {
    eventCode: 'KeyV',
    ru: ['м', 'М'],
    en: ['v', 'V'],
  },
  {
    eventCode: 'KeyB',
    ru: ['и', 'И'],
    en: ['b', 'B'],
  },
  {
    eventCode: 'KeyN',
    ru: ['т', 'Т'],
    en: ['n', 'N'],
  },
  {
    eventCode: 'KeyM',
    ru: ['ь', 'Ь'],
    en: ['m', 'M'],
  },
  {
    eventCode: 'Comma',
    ru: ['б', 'Б'],
    en: [',', '<'],
  },
  {
    eventCode: 'Period',
    ru: ['ю', 'Ю'],
    en: ['.', '>'],
  },
  {
    eventCode: 'Slash',
    ru: ['.', ','],
    en: ['/', '?'],
  },
  {
    eventCode: 'ArrowUp',
    ru: ['↑', '↑'],
    en: ['↑', '↑'],
  },
  {
    eventCode: 'ShiftRight',
    ru: ['Shift', 'Shift'],
    en: ['Shift', 'Shift'],
  },

  {
    eventCode: 'ControlLeft',
    ru: ['Ctrl', 'Ctrl'],
    en: ['Ctrl', 'Ctrl'],
  },
  {
    eventCode: 'MetaLeft',
    ru: ['Win', 'Win'],
    en: ['Win', 'Win'],
  },
  {
    eventCode: 'AltLeft',
    ru: ['Alt', 'Alt'],
    en: ['Alt', 'Alt'],
  },
  {
    eventCode: 'Space',
    ru: [' ', ' '],
    en: [' ', ' '],
  },
  {
    eventCode: 'AltRight',
    ru: ['Alt', 'Alt'],
    en: ['Alt', 'Alt'],
  },
  {
    eventCode: 'ArrowLeft',
    ru: ['←', '←'],
    en: ['←', '←'],
  },
  {
    eventCode: 'ArrowDown',
    ru: ['↓', '↓'],
    en: ['↓', '↓'],
  },
  {
    eventCode: 'ArrowRight',
    ru: ['→', '→'],
    en: ['→', '→'],
  },
  {
    eventCode: 'ControlRight',
    ru: ['Ctrl', 'Ctrl'],
    en: ['Ctrl', 'Ctrl'],
  },
  ],

  init() {
    this.elements.wrapper = document.createElement('div');
    this.elements.keyboardLayout = document.createElement('div');
    this.elements.textarea = document.createElement('textarea');

    this.elements.textarea.classList.add('text-input');
    this.elements.wrapper.classList.add('wrapper');
    this.elements.keyboardLayout.classList.add('keyboard-layout');
    this.elements.keyboardLayout.appendChild(this.createLayout());

    document.body.appendChild(this.elements.textarea);
    this.elements.wrapper.appendChild(this.elements.keyboardLayout);
    document.body.appendChild(this.elements.wrapper);

    this.elements.keys = this.elements.keyboardLayout.querySelectorAll('.key-btn');
    document.addEventListener('mouseup', () => this.mouseUpEvent());
  },


  createLayout() {
    const fragment = document.createDocumentFragment();

    const createIcon = (name) => `<i class="material-icons">${name}</i>`;

    const switcher = this.properties.capslock;
    const lang = this.properties.language;

    this.keyLayout.forEach((key) => {
      const newKey = document.createElement('button');

      newKey.setAttribute('type', 'button');
      newKey.classList.add('key-btn');

      const newLine = ['Backspace', 'Delete', 'Enter', 'ShiftRight'].indexOf(key.eventCode);
      this.mouseDownEvent(newKey);


      switch (key.eventCode) {
        case 'Backspace':

          newKey.classList.add('key-btn', 'large');
          newKey.id = key.eventCode;
          newKey.innerHTML = createIcon('backspace');
          newKey.addEventListener('click', () => {
            const caretPos = document.querySelector('.text-input').selectionStart;
            this.properties.inputValue = this.properties.inputValue.substring(0,
              caretPos - 1)
              + this.properties.inputValue.substring(caretPos, this.properties.inputValue.length);
            this.refreshText();
            document.querySelector('.text-input').selectionStart = caretPos - 1;
          });
          document.addEventListener('keydown', (event) => {
            if (event.code === 'Backspace') {
              newKey.click();
            }
          });
          break;

        case 'Tab':
          newKey.classList.add('key-btn', 'half-large');
          newKey.id = key.eventCode;

          newKey.innerHTML = createIcon('tab');
          newKey.addEventListener('click', () => {
            this.properties.inputValue += '    ';
          });
          document.addEventListener('keydown', (event) => {
            if (event.code === 'Tab') {
              newKey.click();
            }
          });
          break;

        case 'Delete':
          newKey.innerText = key[lang][switcher];
          newKey.classList.add('key-btn', 'half-large');
          newKey.id = key.eventCode;
          newKey.addEventListener('click', () => {
            const caretPos = document.querySelector('.text-input').selectionStart;
            this.properties.inputValue = this.properties.inputValue.substring(0, caretPos)
            + this.properties.inputValue.substring(caretPos + 1, this.properties.inputValue.length);
            this.refreshText();
            document.querySelector('.text-input').selectionStart = caretPos;
          });
          document.addEventListener('keydown', (event) => {
            if (event.code === 'Delete') {
              newKey.click();
            }
          });
          break;


        case 'CapsLock':
          newKey.classList.add('key-btn', 'half-large');
          newKey.innerHTML = createIcon('keyboard_capslock');
          newKey.id = key.eventCode;

          newKey.addEventListener('click', () => this.toggleCaps());
          document.addEventListener('keydown', (event) => {
            if (event.code === 'CapsLock') {
              newKey.click();
            }
          });
          break;

        case 'Enter':
          newKey.classList.add('key-btn', 'half-large');
          newKey.id = key.eventCode;
          newKey.innerHTML = createIcon('keyboard_return');

          newKey.addEventListener('click', () => {
            const caretPos = document.querySelector('.text-input').selectionStart;
            this.properties.inputValue += '\n';
            this.refreshText();
            document.querySelector('.text-input').selectionStart = caretPos + 1;
          });
          document.addEventListener('keydown', (event) => {
            if (event.code === 'Enter') {
              newKey.click();
            }
          });
          break;

        case 'ShiftLeft':
          newKey.innerText = key[lang][switcher];
          newKey.id = key.eventCode;
          newKey.classList.add('key-btn', 'large');
          document.addEventListener('keydown', (event) => {
            if (event.code === 'ShiftLeft' && this.properties.shift === 0) {
              this.properties.shift = 1;
              this.toggleCaps();
            }
          });
          document.addEventListener('keyup', (event) => {
            if (event.code === 'ShiftLeft') {
              this.toggleCaps();
              this.properties.shift = 0;
            }
          });
          break;

        case 'ShiftRight':
          newKey.innerText = key[lang][switcher];
          newKey.id = key.eventCode;
          newKey.classList.add('key-btn', 'large');

          document.addEventListener('keydown', (event) => {
            if (event.code === 'ShiftRight') {
              this.toggleCaps();
            }
          });
          document.addEventListener('keyup', (event) => {
            if (event.code === 'ShiftRight') {
              this.toggleCaps();
            }
          });
          break;


        case 'ControlLeft':
          newKey.innerText = key[lang][switcher];
          newKey.id = key.eventCode;

          newKey.classList.add('key-btn', 'half-large');
          document.addEventListener('keydown', (event) => {
            if (event.code === 'ControlLeft' && event.altKey) {
              this.toggleLanguage();
            }
          });
          break;

        case 'ControlRight':
          newKey.innerText = key[lang][switcher];
          newKey.id = key.eventCode;
          newKey.classList.add('key-btn');

          break;

        case 'MetaLeft':
          newKey.innerText = key[lang][switcher];
          newKey.id = key.eventCode;
          newKey.classList.add('key-btn');

          break;

        case 'AltLeft':
          newKey.innerText = key[lang][switcher];
          newKey.id = key.eventCode;
          newKey.classList.add('key-btn');
          break;

        case 'Space':
          newKey.classList.add('key-btn', 'space');
          newKey.id = key.eventCode;
          newKey.innerHTML = createIcon('space_bar');
          newKey.addEventListener('click', () => {
            const caretPos = document.querySelector('.text-input').selectionStart;
            this.properties.inputValue += ' ';
            this.refreshText();
            document.querySelector('.text-input').selectionStart = caretPos + 1;
          });
          document.addEventListener('keydown', (event) => {
            if (event.code === 'Space') {
              newKey.click();
            }
          });
          break;

        case 'AltRight':
          newKey.innerText = key[lang][switcher];
          newKey.id = key.eventCode;
          newKey.classList.add('key-btn');
          break;

        default:
          newKey.innerText = key[lang][switcher];
          newKey.id = key.eventCode;
          newKey.addEventListener('click', () => {
            const caretPos = document.querySelector('.text-input').selectionStart;
            this.properties.inputValue += newKey.innerText;
            this.refreshText();
            document.querySelector('.text-input').selectionStart = caretPos + 1;
          });
          document.addEventListener('keydown', (event) => {
            if (event.code === key.eventCode) {
              newKey.click();
            }
          });
          break;
      }

      fragment.appendChild(newKey);

      if (newLine > -1) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  toggleCaps() {
    this.properties.capslock = this.properties.capslock === 1 ? 0 : 1;
    const switcher = this.properties.capslock;
    const lang = this.properties.language;
    for (let i = 0; i < this.elements.keys.length; i += 1) {
      const key = this.elements.keys[i];
      if (key.childElementCount === 0) {
        key.innerText = this.keyLayout[i][lang][switcher];
      }
    }
  },

  toggleLanguage() {
    this.properties.language = this.properties.language === 'en' ? 'ru' : 'en';
    const switcher = this.properties.capslock;
    const lang = this.properties.language;
    for (let i = 0; i < this.elements.keys.length; i += 1) {
      const key = this.elements.keys[i];
      if (key.childElementCount === 0) {
        key.innerText = this.keyLayout[i][lang][switcher];
      }
    }
  },

  toggleActive(target) {
    target.classList.toggle('active');
  },

  refreshText() {
    this.elements.textarea.innerHTML = this.properties.inputValue;
  },

  mouseDownEvent(target) {
    return target.addEventListener('mousedown', () => {
      this.toggleActive(target);
    });
  },

  mouseUpEvent() {
    if (document.querySelector('.active')) {
      this.toggleActive(document.querySelector('.active'));
    }
  },
};


window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});

document.addEventListener('keydown', (event) => {
  if (document.querySelector(`#${event.code}`)) {
    document.querySelector(`#${event.code}`).classList.add('active');
  }
});

document.addEventListener('keyup', (event) => {
  if (document.querySelector(`#${event.code}`)) {
    document.querySelector(`#${event.code}`).classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
});
