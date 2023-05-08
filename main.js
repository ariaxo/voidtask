// 获取导航栏按钮和对应的卡片
const navButtons = document.querySelectorAll('.nav-button');
const cards = document.querySelectorAll('.card');
const homeBox = document.querySelector("#home");

//默认展示homepage
cards.forEach((cards) => {
  if (cards === homeBox) {
    cards.style.display = "block";
  } /*else {
    // 否则将它的 display 属性设置为 none
    cards.style.display = "none";
  }*/
});

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 隐藏所有卡片
    cards.forEach((card) => {
      card.classList.remove('active');
    });

    // 显示对应的卡片
    cards[index].classList.add('active');
  });
});


// 获取关闭按钮和对应的卡片
const closeButtons = document.querySelectorAll('.close-button');

// 给每个关闭按钮添加点击事件
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // 隐藏对应的卡片
    const card = button.parentNode;
    card.classList.remove('active');
  });
});

/* 预编写，暂时不需要的功能 */
function scrollTop() {
  window.scrollTop({ top: 0, behavior: 'smooth' });
}


