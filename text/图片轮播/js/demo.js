var start = document.getElementById('start');


start.onclick = function () {
    this.nextElementSibling.textContent = '状态：启动中';
    this.parentElement.parentElement.nextElementSibling.style =`color:red`;
};