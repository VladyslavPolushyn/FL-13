const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

const folderIcon = '<i class="material-icons folder-icon open-folder">folder_open</i>';
const closeFolderIcon = '<i class="material-icons folder-icon close-folder">folder</i>';
const fileIcon = '<i class="material-icons file-icon">insert_drive_file</i>';

function createFolderTree(container, obj) {
  container.append(createFolderTreeDom(obj));
}

function createFolderTreeDom(obj) {

  if(obj === null || !obj.length) {
    return;
  }

  let ul = document.createElement('ul');

  for(let value of obj) {
    
    if(value.folder) {

      let li = document.createElement('li');
      li.className += 'li-folder close-folder';
      li.innerHTML = '<span>' + closeFolderIcon + `<span class='title-span'>` + value.title + '</span>' + '</span>';

      let ulChild = createFolderTreeDom(value.children);

      if(ulChild) {
        ulChild.style = 'display: none';
        li.append(ulChild);

        li.addEventListener('click', function(event){
          toogleFolder(this, ulChild, value.title);
          event.stopPropagation();
        });

      }else {
        let emptyFolder = document.createElement('li');
        emptyFolder.innerHTML = 'Folder is empty';
        emptyFolder.style = 'display: none';
        emptyFolder.className += ' empty-folder';
        li.append(emptyFolder);

        li.addEventListener('click', function(event){
          toogleFolder(this, emptyFolder, value.title);
          event.stopPropagation();
        });
      }

      ul.append(li);

    }else {
      let li = document.createElement('li');
      li.className += 'li-file';
      li.innerHTML = '<span>' + fileIcon + `<span class='title-span'>` + value.title + '</span>' + '</span>';

      li.addEventListener('click', function(event){
        event.stopPropagation();
        return false;
      });

      ul.append(li);
    }

  }
  return ul;
}

createFolderTree(rootNode, data);

function createElem(tagName, inner='', classname='') {

  let elem = document.createElement(tagName);
  elem.innerHTML = inner;
  elem.className += classname;
  return elem;
}

function toogleFolder(elem, ulChild) {

  let icon = elem.childNodes[0].childNodes[0];

  if(elem.childNodes[0].childNodes[1].hasAttribute('contenteditable')) {
    return false;
  }

  if(elem.classList.contains('close-folder')) {
    event.stopPropagation();
    ulChild.style = 'display: block';
    elem.className = 'li-folder open-folder';

    icon.remove();
    elem.childNodes[0].insertAdjacentHTML('afterbegin', `${folderIcon}`);
  }else {
    event.stopPropagation();
    ulChild.style = 'display: none';
    elem.className = 'li-folder close-folder';

    icon.remove();
    elem.childNodes[0].insertAdjacentHTML('afterbegin', `${closeFolderIcon}`);
  }
}

let menu = document.createElement('ul');
menu.className = 'menu';
menu.insertAdjacentHTML('afterbegin', `<li class='context-li delete-li'>Delete item</li>`);
menu.insertAdjacentHTML('afterbegin', `<li class='context-li rename-li'>Rename</li>`);
rootNode.append(menu);

let contextArr = document.querySelectorAll('.context-li');
let spanArr = document.querySelectorAll('.title-span');

function actionContext(element) {
  let renameElem = element.childNodes[0].childNodes[1];

  contextArr.forEach(function(elem) {
    elem.onclick = function() {

      if(elem.classList.contains('delete-li')) {
        element.remove();
      }else {
        renameElem.setAttribute('contenteditable', 'true');
        renameElem.focus();
      }
    }
    document.onmouseup = function() {
      renameElem.blur();
      renameElem.removeAttribute('contenteditable');
      hideMenu();
    }

  });

}

function showMenu(x, y){
  menu.style.left = x + 'px';
  menu.style.top = y + 'px';
  menu.classList.add('show-menu');
}

function hideMenu(){
  menu.classList.remove('show-menu');
}

function onMouseDown(){
  document.removeEventListener('mousedown', onMouseDown);
  hideMenu();
}

function addContext() {
  let liArr = document.querySelectorAll('li');
  liArr.forEach(function(elem){

    elem.oncontextmenu = function(event) {
      event.stopPropagation();
      event.preventDefault();

      if(elem.classList.contains('empty-folder')) {
        return false;
      }

      showMenu(event.pageX, event.pageY);
      actionContext(elem);
      return false;
    }

  });
}

addContext();
