function renderPageSession() {
    const contentSession = document.getElementById('content-session');
    contentSession.innerHTML = `<div class="group">
                <h3>Веберите свою группу</h3>
                <div class="card-group" id="group-one">
                    <span class="name-group"><b>ПИЗ1901</b></span><br>
                    <span class="starosta">Сарьян Арсен</span>
                </div>
                <div class="card-group" id="group-two">
                    <span class="name-group"><b>ПИЗ1902</b></span><br>
                    <span class="starosta">Барабанов Артём</span>
                </div>
            </div>`;
    // рендер списка предметов
    const groupOne = document.getElementById('group-one'),
        groupTwo = document.getElementById('group-two');
    groupOne.addEventListener('click', () => {
        contentSession.innerHTML = `<div>
                <h3>Задания на сессию</h3>
                <p class="edit" id="btn-open-add-lesson">Добавить предмет +</p>
            </div>
            <h3 class="title-section">Всего предметов: </h3>
            <div class="list-lessons">
                <div class="block-lesson">
                    <a href="#">
                        <div class="card-lesson">
                            <span class="name-lesson"><b>Иностранный язык</b></span><br>
                            <span class="type-lesson">зачёт</span>
                        </div>
                    </a>
                    <span><img src="./img/deletered.png" alt="delete"></span>
                </div>
            </div>
<div class="modal" id="modal-add-lesson">
            <form>
                <label for="name-lesson">Название предмета</label>
                <input type="text" name="name-lesson" placeholder="Название" id="name-lesson">
                <label>Тип сдачи</label>
                <select id="type-lesson">
                    <option value="Зачёт" >Зачёт</option>
                    <option value="Экзамен">Экзамен</option>
                </select>
                <button class="add-btn" id="add-lesson-btn">Добавить</button>
            </form>
            <button class="card-delete" id="close-modal-lesson">
                <span></span>
            </button>
        </div>`;
        editDataLesson()
        renderDescriptionLesson()
    });
    groupTwo.addEventListener('click', () => {
        contentSession.innerHTML = `<div>
                <h3>Задания на сессию</h3>
                <p class="edit" id="btn-open-add-lesson">Добавить предмет +</p>
            </div>
            <h3 class="title-section">Всего предметов: </h3>
            <div class="list-lessons">
                <div class="block-lesson">
                    <a href="#">
                        <div class="card-lesson">
                            <span class="name-lesson"><b>Иностранный язык</b></span><br>
                            <span class="type-lesson">зачёт</span>
                        </div>
                    </a>
                    <span><img src="./img/deletered.png" alt="delete"></span>
                </div>
                <div class="block-lesson">
                    <a href="#">
                        <div class="card-lesson">
                            <span class="name-lesson"><b>БЖД</b></span><br>
                            <span class="type-lesson">зачёт</span>
                        </div>
                    </a>
                    <span><img src="./img/deletered.png" alt="delete"></span>
                </div>
                <div class="block-lesson">
                    <a href="#">
                        <div class="card-lesson">
                            <span class="name-lesson"><b>Информатика</b></span><br>
                            <span class="type-lesson">зачёт</span>
                        </div>
                    </a>
                    <span><img src="./img/deletered.png" alt="delete"></span>
                </div>
            </div>`;
        editDataLesson()
        renderDescriptionLesson()
    });
}
function editDataLesson(){
    const modalAddLesson = document.getElementById('modal-add-lesson'),
        btnOpenModal = document.getElementById('btn-open-add-lesson'),
        btnCloseModal = document.getElementById('close-modal-lesson'),
        inpNameLesson = document.getElementById('name-lesson'),
        inpTypeLesson = document.getElementById('type-lesson'),
        btnAddLesson = document.getElementById('add-lesson-btn');
    btnOpenModal.addEventListener('click', () => {
        modalAddLesson.style.display = 'flex';
    });
    btnCloseModal.addEventListener('click', () => {
        modalAddLesson.style.display = 'none';
    });
    btnAddLesson.addEventListener('click', () => {
        //Запрос в базу
    })
}

function renderDescriptionLesson() {
    //рендер описания предмета
    const lesson = document.querySelectorAll('.block-lesson'),
        contentSession = document.getElementById('content-session');
    lesson.forEach.call(lesson,function(el){
        el.addEventListener('click', function (e) {
            contentSession.innerHTML = `Hello`;
        })
    });

}


renderPageSession()