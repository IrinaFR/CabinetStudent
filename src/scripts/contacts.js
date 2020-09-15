function renderPageContacts() {
    const contentContacts = document.getElementById('content-contacts');
    contentContacts.innerHTML = '<div class="group">\n' +
        '                <h3>Веберите свою группу</h3>\n' +
        '                <div class="card-group" id="group-one">\n' +
        '                    <span class="name-group"><b>ПИЗ1901</b></span><br>\n' +
        '                    <span class="starosta">Сарьян Арсен</span>\n' +
        '                </div>\n' +
        '                <div class="card-group" id="group-two">\n' +
        '                    <span class="name-group"><b>ПИЗ1902</b></span><br>\n' +
        '                    <span class="starosta">Барабанов Артём</span>\n' +
        '                </div>\n' +
        '            </div>';
    const  groupOne = document.getElementById('group-one'),
        groupTwo = document.getElementById('group-two');
    let dataCurator = '<div class="section-curator">\n' +
        '                <h3 class="title-section">Данные куратора</h3>\n' +
        '                <p>ФИО - Дунаева Нина Ивановна</p>\n' +
        '                <p>Номер телефона - 8 (861) 211-58-01</p>\n' +
        '                <p>E-mail - Dunaeva.N@kubsau.ru / nina.dunaeva2013@yandex.ru</p>\n' +
        '                <p>Часы приёма - Пн-Пт с 8:00 до 12:00 и с 13:00 до 14:00, Сб с 8:00 до 12:00 </p>\n' +
        '            </div>';
    groupOne.addEventListener('click', () => {
        contentContacts.innerHTML = `<h3>Контакты - ПИЗ1901</h3>
                        <div class="section-starosta">
                            <h3 class="title-section">Данные старосты</h3>
                            <p class="edit">Редактировать</p>
                            <p>Номер телефона - <span id="number-starosta">+7 800</span></p>
                            <p>E-mail - <span id="email-starosta">test@mail.ru</span></p>
                        </div>
                        ${dataCurator}
                        <div class="section-group">
                            <h3 class="title-section">Данные группы</h3>
                            <div class="student">
                                <span class="name-student">Констанинов Константин</span>
                                <span class="email">constant2020@mail.ru</span>
                                <span class="number">+79184726382</span>
                            </div>
                        </div>`;
    });
    groupTwo.addEventListener('click', () => {
        contentContacts.innerHTML = `<h3>Контакты - ПИЗ1902</h3>
                        <div class="section-starosta">
                            <h3 class="title-section">Данные старосты</h3>
                            <p class="edit">Редактировать</p>
                            <p>Номер телефона - <span id="number-starosta">Барабанов Артём</span></p>
                            <p>E-mail - <span id="email-starosta">test@mail.ru</span></p>
                        </div>
                        ${dataCurator}
                        <div class="section-group">
                            <h3 class="title-section">Данные группы</h3>
                            <div class="student">
                                <span class="name-student">Констанинов Константин</span>
                                <span class="email">constant2020@mail.ru</span>
                                <span class="number">+79184726382</span>
                            </div>
                        </div>`;
    });
}
renderPageContacts()

function editDataSarosta() {
    const modalWindow = document.getElementById(),
        btnOpenModal = document.getElementById(),
        btnCloseModal = document.getElementById(),
        btnChange = document.getElementById(),
        numberStarosta = document.getElementById('number-starosta'),
        emailStarosta = document.getElementById('email-starosta');

}