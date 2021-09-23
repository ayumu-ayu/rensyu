
const gro01 = [{
  item: ['red','赤','風鈴','友人']
}, {
  item: ['bule','青','陶器','家族']
}, {
  item: ['white','白','ガラス','親戚']
  }];


const $list = document.getElementsByClassName('list')[0];
const $button = document.getElementsByClassName('button')[0];
let count = 0;


$button.addEventListener('click', function () {//ボタンをクリックした時
  count++;
  if (count === 1) {
    set(0);
  } else if (count === 2) {
    set(1);
  } else if (count === 3) {
    set(2);
    count = 0;
  }
});

const set = function (num) {
  for (let j = 0; j < gro01[num].item.length; j++) {
    const lists = document.createElement('li');
    lists.innerText = gro01[num].item[j];
    $list.appendChild(lists);
  }
};