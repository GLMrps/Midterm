var isGradient1 = false; // 初始漸層色為第一種
var showIcon = document.getElementById('showIcon');
var hideIcon = document.getElementById('hideIcon');


document.getElementById('toggleGradientBtn').addEventListener('click', function() {


    // 切換漸層色
    isGradient1 = !isGradient1;
    // 設置body的背景為新的漸層色
    document.body.style.background = isGradient1 ? 'linear-gradient(to bottom, #000000, #461AC4)' : 'linear-gradient(to bottom, #8E92FF, #FFFFFF)';

    
});
const stars = document.querySelectorAll('.star');

/* setStarInitXPosition */

const setStarMoveSpeed = (star) => {
  const starMoveSpeed = -1 - Math.random();
  star.dataset.speed = starMoveSpeed;
};
  var settingsButton = document.getElementById('settingsButton');
  var settingsPanel = document.getElementById('settingsPanel');
  var closeButton = document.getElementById('closeButton');

      // 打开设置面板
settingsButton.addEventListener('click', function() {
    settingsPanel.style.display = 'block';
});

// 关闭设置面板
closeButton.addEventListener('click', function() {
    settingsPanel.style.display = 'none';
});

stars.forEach(setStarMoveSpeed);
window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset;
    const moon = document.querySelector('.moon');
    //const settingsButton = document.querySelector('.settings-button');
    //settingsButton.style.transform = `translateY(${scrollPositionY}px)`;
    moon.style.transform = `translateY(${scrollPositionY}px)`;

  });


