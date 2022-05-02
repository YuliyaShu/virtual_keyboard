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
}
createMainStructure();

const ObjKeyboard = {
  create() {

  },
};
document.objKeyboard.create();
