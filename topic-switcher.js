let lastActive = 'projects';

const activate = node => {
    if(!node.dataset.value){return;}
    document.querySelector(`[data-value=${lastActive}]`).classList.remove('active');
    node.classList.add('active');
    lastActive = node.dataset.value;
}

const switchView = event => {
    const nav = event.target;
    activate(nav);
}

//Get navs
const navs = document.getElementById('navs');
navs.addEventListener('click', switchView);