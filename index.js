// create header, main, footer
function createMainStructure() {
  // footer
  const footerMain = document.createElement('div');
  document.body.append(footerMain);
  footerMain.classList.add('footer-main');

  const footer = document.createElement('footer');
  footerMain.append(footer);
  footer.classList.add('footer');

  const containerFooter = document.createElement('div');
  footer.append(containerFooter);
  containerFooter.classList.add('container');

  const nav = document.createElement('nav');
  containerFooter.append(nav);
  nav.classList.add('nav-footer');

  const ul = document.createElement('ul');
  nav.append(ul);
  ul.classList.add('nav-list-footer');

  const liDate = document.createElement('li');
  ul.append(liDate);
  const liPDate = document.createElement('p');
  liDate.append(liPDate);
  liPDate.classList.add('nav-link-footer-date');
  liPDate.innerHTML = 'May 2022';

  const liGH = document.createElement('li');
  ul.append(liGH);
  const liAGH = document.createElement('a');
  liGH.append(liAGH);
  liAGH.classList.add('nav-link-footer');
  liAGH.innerHTML = 'GitHub - YuliyaShu';
  liAGH.href = 'https://github.com/YuliyaShu/';
  liAGH.target = '_blank';

  const liRS = document.createElement('li');
  ul.append(liRS);
  const liARS = document.createElement('a');
  liRS.append(liARS);
  liARS.href = 'https://rs.school/js/';
  liARS.target = '_blank';
  const rsImg = document.createElement('img');
  liARS.append(rsImg);
  rsImg.classList.add('nav-img-footer');
  rsImg.src = './assets/rs_school.svg';
  rsImg.alt = 'rss_logo';

  //   main
  const mainMain = document.createElement('div');
  document.body.prepend(mainMain);
  mainMain.classList.add('main-main');

  const main = document.createElement('main');
  mainMain.append(main);
  main.classList.add('main');

  const containerMain = document.createElement('div');
  main.append(containerMain);
  containerMain.classList.add('container');
  containerMain.classList.add('container-main');

  const wrapper = document.createElement('div');
  containerMain.append(wrapper);
  wrapper.classList.add('wrapper');

  const textarea = document.createElement('div');
  wrapper.append(textarea);
  textarea.classList.add('textarea');

  const textareaImg = document.createElement('img');
  textarea.append(textareaImg);
  textareaImg.classList.add('textarea-img');
  textareaImg.src = './assets/coffee-splatter-8.png';
  textareaImg.alt = 'coffee-splatter';

  const textareaTextarea = document.createElement('textarea');
  textarea.append(textareaTextarea);
  textareaTextarea.classList.add('area');
  textareaTextarea.name = 'area';
  textareaTextarea.id = 'area';
  textareaTextarea.cols = '30';
  textareaTextarea.rows = '10';
  textareaTextarea.focus();

  const keyboard = document.createElement('div');
  wrapper.append(keyboard);
  keyboard.classList.add('keyboard');

  // header
  const headerMain = document.createElement('div');
  document.body.prepend(headerMain);
  headerMain.classList.add('header-main');

  const header = document.createElement('header');
  headerMain.append(header);
  header.classList.add('header');

  const container = document.createElement('div');
  header.append(container);
  container.classList.add('container');

  const section = document.createElement('section');
  container.append(section);
  section.classList.add('section');

  const h1 = document.createElement('h1');
  section.append(h1);
  h1.classList.add('section-title-h1');
  h1.innerHTML = 'Virtual Keyboard';

  const h4 = document.createElement('h4');
  section.append(h4);
  h4.classList.add('section-title-h4');
  h4.innerHTML = 'was created in Windows operating system';

  const h5 = document.createElement('h4');
  section.append(h5);
  h5.classList.add('section-title-h4');
  h5.innerHTML = 'ctrl(Left) + alt(Left) for changing language';
}
createMainStructure();

const keyboardElement = document.querySelector('.keyboard');
const textareaN = document.querySelector('textarea');
const forLocalStorage = { lang: 'en' };

const ObjKeyboard = {
  keyboardPallette: [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
    'capsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
    'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'shift',
    'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594',
  ],

  keyboardPalletteWithN: [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', '',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del', '',
    'capsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', '',
    'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'shift', '',
    'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594',
  ],

  keyboardReal: [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', '',
    'Tab', 'KeyQ', 'KeyQ', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', '',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', '',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', '',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
  ],

  keyboardPalletteUP: [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  ],

  mapDouble: {
    0: '~',
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    10: ')',
    11: '_',
    12: '+',
    26: '{',
    27: '}',
    28: '|',
    41: ':',
    42: '"',
    53: '<',
    54: '>',
    55: '?',
  },

  onclickElement: null,

  createOneButton(un, indx) {
    let keyboardButtonUnit = `keyboardButton${indx}`;
    keyboardButtonUnit = document.createElement('button');
    keyboardButtonUnit.classList.add('button');
    keyboardButtonUnit.innerHTML = un;
    return keyboardButtonUnit;
  },

  create() {
    console.log('created eng');
    keyboardElement.innerHTML = '';
    for (let i = 0; i < this.keyboardPallette.length; i += 1) {
      const unit = this.keyboardPallette[i];
      const x = this.createOneButton(unit, i);
      keyboardElement.append(x);
    }
    keyboardElement.children[13].after(document.createElement('br'));
    keyboardElement.children[29].after(document.createElement('br'));
    keyboardElement.children[43].after(document.createElement('br'));
    keyboardElement.children[57].after(document.createElement('br'));
    console.log(keyboardElement);

    keyboardElement.children[13].classList.add('button-wider');
    keyboardElement.children[31].classList.add('button-wider');
    keyboardElement.children[43].classList.add('button-wider');
    keyboardElement.children[29].classList.add('button-wider');
    keyboardElement.children[62].classList.add('button-space');

    for (let j = 0; j < this.keyboardPalletteUP.length; j += 1) {
      let upTextButton = document.createElement('p');
      upTextButton = `upTextButton${j}`;
      upTextButton = document.createElement('p');
      upTextButton.classList.add('upTextButton');
      upTextButton.innerHTML = this.keyboardPalletteUP[j];
      keyboardElement.children[j].prepend(upTextButton);
    }

    const map = new Map(Object.entries({
      '{': 26,
      '}': 27,
      '|': 28,
      ':': 41,
      '"': 42,
      '<': 53,
      '>': 54,
      '?': 55,
    }));
    map.forEach((value, key) => {
      const upTextButton = document.createElement('p');
      upTextButton.classList.add('upTextButton');
      const text = key;
      upTextButton.innerHTML = text;
      keyboardElement.children[value].prepend(upTextButton);
    });

    const differentButtons = [13, 15, 29, 31, 43, 45, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67];
    for (let g = 0; g < differentButtons.length; g += 1) {
      keyboardElement.children[differentButtons[g]].classList.add('button-darker');
    }
    localStorage.setItem('lang', 'en');
    forLocalStorage.lang = 'en';
  },

  upperCase() {
    const letters = [
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
      32, 33, 34, 35, 36, 37, 38, 39, 40,
      46, 47, 48, 49, 50, 51, 52,
    ];
    for (let h = 0; h < letters.length; h += 1) {
      keyboardElement.children[letters[h]].classList.toggle('big-letters');
    }
  },

  textCursorPosition(elem) {
    elem.focus();
    console.log(elem.selectionStart);
    if (!elem.selectionStart) return elem.selectionStart;
    if (window.getSelection) {
      return 'kkkkkkkkk';
    }
    return 0;
  },

  clickToTextareaDownReal(eDownReal) {
    console.log(eDownReal);
    textareaN.focus();
    const ind = ObjKeyboard.keyboardReal.indexOf(eDownReal.code);
    if (keyboardElement.children[ind]) keyboardElement.children[ind].classList.toggle('capsLock-on');
    if (ind === 15) {
      eDownReal.preventDefault();
      textareaN.value = `\t${textareaN.value}`;
    }
  },

  clickToTextareaDownVirtual(eDownVirtual) {
    console.log(eDownVirtual);
    const text = eDownVirtual.path[0].innerText;
    if (text.length === 1) textareaN.value += text;
    switch (text) {
      case 'backspace':
        textareaN.value = textareaN.value.substring(0, textareaN.value.length - 1);
        break;
      case 'enter':
        textareaN.value += '\n';
        break;
      case 'del':
      // !!!!!!!!! correct
        // console.log(ObjKeyboard.textCursorPosition(textareaN));
        // textareaN.value = textareaN.value.substring(0, textareaN.value.length - 1);
        break;
      case 'tab':
        textareaN.value = `\t${textareaN.value}`;
        break;
      case 'win':
        break;
      case 'shift':
        break;
      case 'space':
        textareaN.value += ' ';
        break;
      default:
        break;
    }

    let indV;
    if (text.includes('\n')) {
      if (keyboardElement.children[45].classList.contains('capsLock-on')
      || keyboardElement.children[57].classList.contains('capsLock-on')) {
        textareaN.value += text.substring(0, 1);
        indV = ObjKeyboard.keyboardPalletteWithN.indexOf(text[text.length - 1]);
      } else {
        indV = ObjKeyboard.keyboardPalletteWithN.indexOf(text[text.length - 1]);
        textareaN.value += text.substring(text.length - 1);
      }
    } else if (text.includes('\u2190')) {
      indV = 65;
    } else if (text.includes('\u2193')) {
      indV = 66;
    } else if (text.includes('\u2192')) {
      indV = 67;
    } else if (text.includes('\u2191')) {
      indV = 56;
    } else {
      indV = ObjKeyboard.keyboardPalletteWithN.indexOf(text);
    }
    if (indV !== 31 && indV >= 0) {
      keyboardElement.children[indV].classList.toggle('capsLock-on');
    } else if (indV !== 31 && indV < 0) {
      const text2 = text.toLowerCase();
      const indV2 = ObjKeyboard.keyboardPalletteWithN.indexOf(text2);
      keyboardElement.children[indV2].classList.toggle('capsLock-on');
    } else if (indV === 31) {
      keyboardElement.children[31].classList.toggle('capsLock-on');
      ObjKeyboard.upperCase();
    }
    textareaN.focus();
  },

  clickToTextareaUpReal(eUpReal) {
    const indUp = ObjKeyboard.keyboardReal.indexOf(eUpReal.code);
    if (indUp === 31) {
      ObjKeyboard.upperCase();
    } else {
      setTimeout(() => {
        if (keyboardElement.children[indUp]) keyboardElement.children[indUp].classList.toggle('capsLock-on');
      }, '200');
    }
  },

  getKeyFromValue(value) {
    if (Object.values(ObjKeyboard.mapDouble).includes(value)) {
      const index = Object.values(ObjKeyboard.mapDouble).indexOf(value);
      return Object.keys(ObjKeyboard.mapDouble)[index];
    }
    return false;
  },

  clickToTextareaUpVirtual(eUpVirtual) {
    console.log(eUpVirtual);
    const text = eUpVirtual.path[0].innerText;
    let indV;
    if (text.includes('\n')) {
      indV = ObjKeyboard.keyboardPalletteWithN.indexOf(text[text.length - 1]);
    } else {
      indV = ObjKeyboard.keyboardPalletteWithN.indexOf(text);
    }
    if (indV !== 31) {
      const text2 = text.toLowerCase();
      let indV2;
      if (text2.includes('\n')) {
        if (keyboardElement.children[45].classList.contains('capsLock-on')
        || keyboardElement.children[57].classList.contains('capsLock-on')) {
          indV2 = ObjKeyboard.getKeyFromValue(text2[0]);
        } else {
          indV2 = ObjKeyboard.keyboardPalletteWithN.indexOf(text2[text2.length - 1]);
        }
      } else if (text2.includes('\u2190')) {
        indV2 = 65;
      } else if (text2.includes('\u2193')) {
        indV2 = 66;
      } else if (text2.includes('\u2192')) {
        indV2 = 67;
      } else if (text2.includes('\u2191')) {
        indV2 = 56;
      } else {
        indV2 = ObjKeyboard.keyboardPalletteWithN.indexOf(text2);
      }
      setTimeout(() => {
        keyboardElement.children[indV2].classList.toggle('capsLock-on');
      }, '200');
    }
    textareaN.focus();
  },
};

const ObjKeyboardRu = {
  keyboardPalletteRu: [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del',
    'capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
    'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593', 'shift',
    'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594',
  ],

  keyboardPalletteWithNRu: [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', '',
    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del', '',
    'capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', '',
    'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593', 'shift', '',
    'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&#8592', '&#8595', '&#8594',
  ],

  keyboardReal: [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', '',
    'Tab', 'KeyQ', 'KeyQ', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', '',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', '',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', '',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
  ],

  keyboardPalletteUPRu: [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
  ],

  mapDoubleRu: {
    1: '!',
    2: '"',
    3: '№',
    4: ';',
    5: '%',
    6: ':',
    7: '?',
    8: '*',
    9: '(',
    10: ')',
    11: '_',
    12: '+',
    28: '/',
    55: ',',
  },

  onclickElement: null,

  createOneButton(un, indx) {
    let keyboardButtonUnit = `keyboardButton${indx}`;
    keyboardButtonUnit = document.createElement('button');
    keyboardButtonUnit.classList.add('button');
    keyboardButtonUnit.innerHTML = un;
    return keyboardButtonUnit;
  },

  create() {
    console.log('created rus');
    keyboardElement.innerHTML = '';
    for (let i = 0; i < this.keyboardPalletteRu.length; i += 1) {
      const unit = this.keyboardPalletteRu[i];
      const x = this.createOneButton(unit, i);
      keyboardElement.append(x);
    }
    keyboardElement.children[13].after(document.createElement('br'));
    keyboardElement.children[29].after(document.createElement('br'));
    keyboardElement.children[43].after(document.createElement('br'));
    keyboardElement.children[57].after(document.createElement('br'));
    console.log(keyboardElement);

    keyboardElement.children[13].classList.add('button-wider');
    keyboardElement.children[31].classList.add('button-wider');
    keyboardElement.children[43].classList.add('button-wider');
    keyboardElement.children[29].classList.add('button-wider');
    keyboardElement.children[62].classList.add('button-space');

    for (let j = 1; j < this.keyboardPalletteUPRu.length; j += 1) {
      let upTextButton = document.createElement('p');
      upTextButton = `upTextButton${j}`;
      upTextButton = document.createElement('p');
      upTextButton.classList.add('upTextButton');
      upTextButton.innerHTML = this.keyboardPalletteUPRu[j];
      keyboardElement.children[j].prepend(upTextButton);
    }

    const map = new Map(Object.entries({
      '|': 28,
      '?': 55,
    }));
    map.forEach((value, key) => {
      const upTextButton = document.createElement('p');
      upTextButton.classList.add('upTextButton');
      const text = key;
      upTextButton.innerHTML = text;
      keyboardElement.children[value].prepend(upTextButton);
    });

    const differentButtons = [13, 15, 29, 31, 43, 45, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67];
    for (let g = 0; g < differentButtons.length; g += 1) {
      keyboardElement.children[differentButtons[g]].classList.add('button-darker');
    }
    localStorage.setItem('lang', 'ru');
    forLocalStorage.lang = 'ru';
  },

  upperCase() {
    const letters = [
      0, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
      46, 47, 48, 49, 50, 51, 52, 53, 54,
    ];
    for (let h = 0; h < letters.length; h += 1) {
      keyboardElement.children[letters[h]].classList.toggle('big-letters');
    }
  },

  // correct!!!!!
  textCursorPosition(elem) {
    elem.focus();
    if (!elem.selectionStart) return elem.selectionStart;
    if (window.getSelection) {
      return 'kkkkkkkkk';
    }
    return 0;
  },

  clickToTextareaDownReal(eDownReal) {
    console.log(eDownReal);
    textareaN.focus();
    const ind = ObjKeyboardRu.keyboardReal.indexOf(eDownReal.code);
    if (keyboardElement.children[ind]) keyboardElement.children[ind].classList.toggle('capsLock-on');
    if (ind === 15) {
      eDownReal.preventDefault();
      textareaN.value = `\t${textareaN.value}`;
    }
  },

  clickToTextareaDownVirtual(eDownVirtual) {
    console.log(eDownVirtual);
    const text = eDownVirtual.path[0].innerText;
    if (text.length === 1) textareaN.value += text;
    switch (text) {
      case 'backspace':
        textareaN.value = textareaN.value.substring(0, textareaN.value.length - 1);
        break;
      case 'enter':
        textareaN.value += '\n';
        break;
      case 'del':
      // !!!!!!!!! correct
        // console.log(ObjKeyboard.textCursorPosition(textareaN));
        // textareaN.value = textareaN.value.substring(0, textareaN.value.length - 1);
        break;
      case 'tab':
        textareaN.value = `\t${textareaN.value}`;
        break;
      case 'win':
        break;
      case 'shift':
        break;
      case 'space':
        textareaN.value += ' ';
        break;
      default:
        break;
    }

    let indV;
    if (text.includes('\n')) {
      if (keyboardElement.children[45].classList.contains('capsLock-on')
      || keyboardElement.children[57].classList.contains('capsLock-on')) {
        textareaN.value += text.substring(0, 1);
        indV = ObjKeyboardRu.keyboardPalletteWithNRu.indexOf(text[text.length - 1]);
      } else {
        indV = ObjKeyboardRu.keyboardPalletteWithNRu.indexOf(text[text.length - 1]);
        textareaN.value += text.substring(text.length - 1);
      }
    } else if (text.includes('\u2190')) {
      indV = 65;
    } else if (text.includes('\u2193')) {
      indV = 66;
    } else if (text.includes('\u2192')) {
      indV = 67;
    } else if (text.includes('\u2191')) {
      indV = 56;
    } else {
      indV = ObjKeyboardRu.keyboardPalletteWithNRu.indexOf(text);
    }
    if (indV !== 31 && indV >= 0) {
      keyboardElement.children[indV].classList.toggle('capsLock-on');
    } else if (indV !== 31 && indV <= 0) {
      const text2 = text.toLowerCase();
      const indV2 = ObjKeyboardRu.keyboardPalletteWithNRu.indexOf(text2);
      keyboardElement.children[indV2].classList.toggle('capsLock-on');
    } else if (indV === 31) {
      keyboardElement.children[31].classList.toggle('capsLock-on');
      ObjKeyboardRu.upperCase();
    }
    textareaN.focus();
  },

  clickToTextareaUpReal(eUpReal) {
    const indUp = ObjKeyboardRu.keyboardReal.indexOf(eUpReal.code);
    if (indUp === 31) {
      ObjKeyboardRu.upperCase();
    } else {
      setTimeout(() => {
        if (keyboardElement.children[indUp]) keyboardElement.children[indUp].classList.toggle('capsLock-on');
      }, '100');
    }
  },

  getKeyFromValue(value) {
    if (Object.values(ObjKeyboardRu.mapDoubleRu).includes(value)) {
      const index = Object.values(ObjKeyboardRu.mapDoubleRu).indexOf(value);
      return Object.keys(ObjKeyboardRu.mapDoubleRu)[index];
    }
    return false;
  },

  clickToTextareaUpVirtual(eUpVirtual) {
    const text = eUpVirtual.path[0].innerText;
    let indV;
    if (text.includes('\n')) {
      indV = ObjKeyboardRu.keyboardPalletteWithNRu.indexOf(text[text.length - 1]);
    } else {
      indV = ObjKeyboardRu.keyboardPalletteWithNRu.indexOf(text);
    }
    if (indV !== 31) {
      const text2 = text.toLowerCase();
      let indV2;
      if (text2.includes('\n')) {
        if (keyboardElement.children[45].classList.contains('capsLock-on')
        || keyboardElement.children[57].classList.contains('capsLock-on')) {
          indV2 = ObjKeyboardRu.getKeyFromValue(text2[0]);
        } else {
          indV2 = ObjKeyboardRu.keyboardPalletteWithNRu.indexOf(text2[text2.length - 1]);
        }
      } else if (text2.includes('\u2190')) {
        indV2 = 65;
      } else if (text2.includes('\u2193')) {
        indV2 = 66;
      } else if (text2.includes('\u2192')) {
        indV2 = 67;
      } else if (text2.includes('\u2191')) {
        indV2 = 56;
      } else {
        indV2 = ObjKeyboardRu.keyboardPalletteWithNRu.indexOf(text2);
      }
      setTimeout(() => {
        keyboardElement.children[indV2].classList.toggle('capsLock-on');
      }, '200');
    }
    textareaN.focus();
  },
};

textareaN.setSelectionRange(0, 1);

function mouseEventsEng() {
  for (let l = 0; l < keyboardElement.children.length; l += 1) {
    keyboardElement.children[l].addEventListener('mousedown', ObjKeyboard.clickToTextareaDownVirtual, ObjKeyboard.onclickElement = keyboardElement.children[l]);
    keyboardElement.children[l].addEventListener('mouseup', ObjKeyboard.clickToTextareaUpVirtual);
  }
}

function mouseEventsRu() {
  for (let l = 0; l < keyboardElement.children.length; l += 1) {
    keyboardElement.children[l].addEventListener('mousedown', ObjKeyboardRu.clickToTextareaDownVirtual, ObjKeyboardRu.onclickElement = keyboardElement.children[l]);
    keyboardElement.children[l].addEventListener('mouseup', ObjKeyboardRu.clickToTextareaUpVirtual);
  }
}

function changeLanguageDown(event) {
  if (event.code === 'AltLeft' || event.code === 'ControlLeft') {
    if (keyboardElement.children[59].classList.contains('capsLock-on')
    && keyboardElement.children[61].classList.contains('capsLock-on')) {
      if (localStorage.getItem('lang') === 'en') {
        ObjKeyboardRu.create();
        mouseEventsRu();
        keyboardElement.children[59].classList.toggle('capsLock-on');
        keyboardElement.children[61].classList.toggle('capsLock-on');
        localStorage.setItem('lang', 'ru');
        forLocalStorage.lang = 'ru';
      } else {
        ObjKeyboard.create();
        mouseEventsEng();
        keyboardElement.children[59].classList.toggle('capsLock-on');
        keyboardElement.children[61].classList.toggle('capsLock-on');
        localStorage.setItem('lang', 'en');
        forLocalStorage.lang = 'en';
      }
    }
  }
}

// local storage
function setLocalStorage() {
  localStorage.setItem('lang', forLocalStorage.lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang') === 'en') {
    ObjKeyboard.create();
    mouseEventsEng();
    document.addEventListener('keydown', ObjKeyboard.clickToTextareaDownReal);
    document.addEventListener('keydown', changeLanguageDown);
    document.addEventListener('keyup', ObjKeyboard.clickToTextareaUpReal);
  } else {
    ObjKeyboardRu.create();
    mouseEventsRu();
    document.addEventListener('keydown', ObjKeyboardRu.clickToTextareaDownReal);
    document.addEventListener('keydown', changeLanguageDown);
    document.addEventListener('keyup', ObjKeyboardRu.clickToTextareaUpReal);
  }
}
window.addEventListener('load', getLocalStorage);
