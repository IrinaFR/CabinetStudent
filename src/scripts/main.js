function openMenu(){
    const leftMenuBtn = document.getElementById('left'),
        leftMenuBlock = document.querySelector('header'),
        rightMenuBtn = document.getElementById('right'),
        rightMenuBlock = document.querySelector('.notes'),
        headerMobile = document.getElementById('header-mobile');
    leftMenuBtn.addEventListener('click', () => {
        if (leftMenuBlock.style.transform == 'translateX(-100%)'){
            leftMenuBlock.style.transform = 'translateX(0)';
            leftMenuBtn.classList.remove('left-name');
            leftMenuBtn.classList.add('menu-active');
        } else{
            leftMenuBlock.style.transform = 'translateX(-100%)';
            leftMenuBtn.classList.remove('menu-active');
            leftMenuBtn.classList.add('left-menu');
        }
    });
    rightMenuBtn.addEventListener('click', () => {
        if (rightMenuBlock.style.transform == 'translateX(100%)'){
            rightMenuBlock.style.transform = 'translateX(0)';
            rightMenuBtn.classList.remove('left-name');
            rightMenuBtn.classList.add('menu-active');
        } else{
            rightMenuBlock.style.transform = 'translateX(100%)';
            rightMenuBtn.classList.remove('menu-active');
            rightMenuBtn.classList.add('left-menu');
        }
    });
}

function openModalAddNotes(){
    const modalAddNotes = document.getElementById('modal-add-notes'),
        btnOpenModal = document.getElementById('add-notes'),
        btnCloseModal = document.getElementById('close-modal-notes'),
        inpModal = document.getElementById('text-notes').value,
        btnAddNotes = document.getElementById('add-notes-btn');
    btnOpenModal.addEventListener('click', () => {
        modalAddNotes.style.display = 'flex';
    });
    btnCloseModal.addEventListener('click', () => {
        modalAddNotes.style.display = 'none';
    });
    btnAddNotes.addEventListener('click', () => {
    //Добавлять запрос в базу
    });
}

openMenu()
openModalAddNotes()