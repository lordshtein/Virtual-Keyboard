const Keyboard = {
  elements: {
    wrapper: null,
    keyboarLayout: null,
    keys: []
  },


  properties: {
    inputValue: "",
    capslock: 0,
  },

  init() {
    this.elements.wrapper = document.createElement("div");
    this.elements.keyboarLayout = document.createElement("div");


    this.elements.wrapper.classList.add("wrapper");
    this.elements.keyboarLayout.classList.add("keyboard-layout");

    this.elements.keyboarLayout.appendChild(this.createLayout());

    this.elements.wrapper.appendChild(this.elements.keyboarLayout);
    document.body.appendChild(this.elements.wrapper);

    this.elements["keys"] = this.elements["keyboarLayout"].querySelectorAll(".key-btn");

  },

  createLayout() {
    const keyLayout = [{
        eventCode: "Backquote",
        ru: ["ё", "Ё"],
        en: ["`", "~"]
      },
      {
        eventCode: "Digit1",
        ru: ["1", "!"],
        en: ["1", "!"]
      },
      {
        eventCode: "Digit2",
        ru: ["2", '"'],
        en: ["2", "@"]
      },
      {
        eventCode: "Digit3",
        ru: ["3", '№'],
        en: ["3", "#"]
      },
      {
        eventCode: "Digit4",
        ru: ["4", ";"],
        en: ["4", "$"]
      },
      {
        eventCode: "Digit5",
        ru: ["5", "%"],
        en: ["5", "%"]
      },
      {
        eventCode: "Digit6",
        ru: ["6", ":"],
        en: ["6", "^"]
      },
      {
        eventCode: "Digit7",
        ru: ["7", "?"],
        en: ["7", "&"]
      },
      {
        eventCode: "Digit8",
        ru: ["8", "*"],
        en: ["8", "*"]
      },
      {
        eventCode: "Digit9",
        ru: ["9", "("],
        en: ["9", "("]
      },
      {
        eventCode: "Digit0",
        ru: ["0", ")"],
        en: ["0", ")"]
      },
      {
        eventCode: "Minus",
        ru: ["-", "_"],
        en: ["-", "_"]
      },
      {
        eventCode: "Equal",
        ru: ["=", "+"],
        en: ["=", "+"]
      },
      {
        eventCode: "Backspace",
        ru: ["", ""],
        en: ["", ""]
      },

      {
        eventCode: "Tab",
        ru: ["", ""],
        en: ["", ""]
      },
      {
        eventCode: "KeyQ",
        ru: ["й", "Й"],
        en: ["q", "Q"]
      },
      {
        eventCode: "KeyW",
        ru: ["ц", "Ц"],
        en: ["w", "W"]
      },
      {
        eventCode: "KeyE",
        ru: ["у", "У"],
        en: ["e", "E"]
      },
      {
        eventCode: "KeyR",
        ru: ["к", "К"],
        en: ["r", "R"]
      },
      {
        eventCode: "KeyT",
        ru: ["е", "Е"],
        en: ["t", "T"]
      },
      {
        eventCode: "KeyY",
        ru: ["н", "Н"],
        en: ["y", "Y"]
      },
      {
        eventCode: "KeyU",
        ru: ["г", "Г"],
        en: ["u", "U"]
      },
      {
        eventCode: "KeyI",
        ru: ["ш", "Ш"],
        en: ["i", "I"]
      },
      {
        eventCode: "KeyO",
        ru: ["щ", "Щ"],
        en: ["o", "O"]
      },
      {
        eventCode: "KeyP",
        ru: ["з", "З"],
        en: ["p", "P"]
      },
      {
        eventCode: "BracketLeft",
        ru: ["х", "Х"],
        en: ["[", "{"]
      },
      {
        eventCode: "BracketRight",
        ru: ["ъ", "Ъ"],
        en: ["]", "}"]
      },
      {
        eventCode: "Delete",
        ru: ["Del", "Del"],
        en: ["Del", "Del"]
      },

      {
        eventCode: "CapsLock",
        ru: ["", ""],
        en: ["", ""]
      },
      {
        eventCode: "KeyA",
        ru: ["ф", "Ф"],
        en: ["a", "A"]
      },
      {
        eventCode: "KeyS",
        ru: ["ы", "Ы"],
        en: ["s", "S"]
      },
      {
        eventCode: "KeyD",
        ru: ["в", "В"],
        en: ["d", "D"]
      },
      {
        eventCode: "KeyF",
        ru: ["а", "А"],
        en: ["f", "f"]
      },
      {
        eventCode: "KeyG",
        ru: ["п", "П"],
        en: ["g", "G"]
      },
      {
        eventCode: "KeyH",
        ru: ["р", "Р"],
        en: ["h", "H"]
      },
      {
        eventCode: "KeyJ",
        ru: ["о", "О"],
        en: ["j", "J"]
      },
      {
        eventCode: "KeyK",
        ru: ["л", "Л"],
        en: ["k", "K"]
      },
      {
        eventCode: "KeyL",
        ru: ["ж", "Ж"],
        en: [";", ":"]
      },
      {
        eventCode: "KeyA",
        ru: ["э", "Э"],
        en: ["\'", '\"']
      },
      {
        eventCode: "KeyA",
        ru: ["\\", "/"],
        en: ["\\", "||"]
      },
      {
        eventCode: "Enter",
        ru: ["", ""],
        en: ["", ""]
      },

      {
        eventCode: "ShiftLeft",
        ru: ["Shift", "Shift"],
        en: ["Shift", "Shift"]
      },
      {
        eventCode: "KeyZ",
        ru: ["я", "Я"],
        en: ["z", "Z"]
      },
      {
        eventCode: "KeyX",
        ru: ["ч", "Ч"],
        en: ["x", "X"]
      },
      {
        eventCode: "KeyC",
        ru: ["c", "C"],
        en: ["с", "С"]
      },
      {
        eventCode: "KeyV",
        ru: ["м", "М"],
        en: ["v", "V"]
      },
      {
        eventCode: "KeyB",
        ru: ["и", "И"],
        en: ["b", "B"]
      },
      {
        eventCode: "KeyN",
        ru: ["т", "Т"],
        en: ["n", "N"]
      },
      {
        eventCode: "KeyM",
        ru: ["ь", "ь"],
        en: ["m", "M"]
      },
      {
        eventCode: "Comma",
        ru: ["б", "Б"],
        en: [",", "<"]
      },
      {
        eventCode: "Period",
        ru: ["ю", "Ю"],
        en: [".", ">"]
      },
      {
        eventCode: "Slash",
        ru: [".", ","],
        en: ["/", "?"]
      },
      {
        eventCode: "ArrowUp",
        ru: ["↑", "↑"],
        en: ["↑", "↑"]
      },
      {
        eventCode: "ShiftRight",
        ru: ["Shift", "Shift"],
        en: ["Shift", "Shift"]
      },

      {
        eventCode: "ControlLeft",
        ru: ["Ctrl", "Ctrl"],
        en: ["Ctrl", "Ctrl"]
      },
      {
        eventCode: "MetaLeft",
        ru: ["Win", "Win"],
        en: ["Win", "Win"]
      },
      {
        eventCode: "AltLeft",
        ru: ["Alt", "Alt"],
        en: ["Alt", "Alt"]
      },
      {
        eventCode: "Space",
        ru: [" ", " "],
        en: [" ", " "]
      },
      {
        eventCode: "AltRight",
        ru: ["Alt", "Alt"],
        en: ["Alt", "AltAlt"]
      },
      {
        eventCode: "ArrowLeft",
        ru: ["←", "←"],
        en: ["←", "←"]
      },
      {
        eventCode: "ArrowDown",
        ru: ["↓", "↓"],
        en: ["↓", "↓"]
      },
      {
        eventCode: "ArrowRight",
        ru: ["→", "→"],
        en: ["→", "→"]
      },
      {
        eventCode: "ControlRight",
        ru: ["Ctrl", "Ctrl"],
        en: ["Ctrl", "Ctrl"]
      },
    ];

    const fragment = document.createDocumentFragment();

    const createIcon = (name) => {
      return `<i class="material-icons">${name}</i>`;
    };

    const switcher = this.properties["capslock"];

    keyLayout.forEach(key => {
      const newKey = document.createElement("button")

      newKey.setAttribute("type", "button");
      newKey.classList.add("key-btn");

      let newLine = ["Backspace", "Delete", "Enter", "ShiftRight"].indexOf(key["eventCode"])

      switch (key["eventCode"]) {

        case "Backspace":
          newKey.classList.add("key-btn", "large");
          newKey.innerHTML = createIcon("backspace");
          break;

        case "Tab":
          newKey.classList.add("key-btn", "large");
          newKey.innerHTML = createIcon("tab");
          break;

        case "Delete":
          newKey.innerText = key["ru"][0]
          newKey.classList.add("key-btn", "large");

          newKey.addEventListener("click", () => {
            this.toggleCaps
          })
          break;


        case "CapsLock":
          newKey.classList.add("key-btn", "large");
          newKey.innerHTML = createIcon("keyboard_capslock");
          newKey.addEventListener("click",() => this.toggleCaps())
          break;

        case "Enter":
          newKey.classList.add("key-btn", "large");
          newKey.innerHTML = createIcon("keyboard_return");
          break;

        case "ShiftLeft":
          newKey.innerText = key["ru"][switcher]
          newKey.classList.add("key-btn", "large");

          break;

        case "ShiftRight":
          newKey.innerText = key["ru"][switcher]
          newKey.classList.add("key-btn", "large");

          break;


        case "ControlLeft":
          newKey.innerText = key["ru"][switcher]
          newKey.classList.add("key-btn", "large");

          break;

        case "ControlRight":
          newKey.innerText = key["ru"][switcher]
          newKey.classList.add("key-btn", "large");

          break;

        case "MetaLeft":
          newKey.innerText = key["ru"][switcher]
          newKey.classList.add("key-btn");

          break;

        case "AltLeft":
          newKey.innerText = key["ru"][switcher]
          newKey.classList.add("key-btn");

          break;

        case "Space":
          newKey.classList.add("key-btn", "space");
          newKey.innerHTML = createIcon("space_bar");

          break;

        case "AltRight":
          newKey.innerText = key["ru"][switcher]
          newKey.classList.add("key-btn");

          break;

        case "ControlLeft":
          newKey.innerText = key["ru"][switcher]
          newKey.classList.add("key-btn-2x");

          break;

        default:
          newKey.innerText = key["ru"][switcher]

          break;
      }

      fragment.appendChild(newKey);

      if (newLine > -1) {
        fragment.appendChild(document.createElement("br"))
      };
    });

    return fragment;

  },

  toggleCaps() {
    this.properties["capslock"] = this.properties["capslock"] == 1 ? 0 : 1;


  },
}


window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
})
