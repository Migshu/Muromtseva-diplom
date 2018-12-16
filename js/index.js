window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Modals

    let headerBtn = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popup = document.querySelector('.popup'),
        phoneLink = document.querySelectorAll('.phone_link'),
        close = document.querySelectorAll('.popup_close'),
        bodyС = document.querySelector('body');

    bodyС.addEventListener('click', function (event) {
        let target = event.target;
        event.preventDefault();
        if (target && target.classList.contains('phone_link')) {
            popup.style.display = 'block';
        }
    });

    headerBtn.addEventListener('click', function () {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    function popupClose() {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                popup.style.display = 'none';
                console.log(close);
            });
        }
    }

    popupClose();



    bodyС.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('popup_close') || e.target.classList.contains('popup_engineer')) {
            popupEngineer.style.display = 'none';
            document.body.style.overflow = '';
        }

    });

    //Modal Request a call

    // Tabs 

    let tab = document.querySelectorAll('.glazing_block'),
        tabA = document.querySelectorAll('.glazing_block a'),
        glazing = document.querySelector('.glazing_slider'),
        tabContent = document.querySelectorAll('.glazing .row');

    function showTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('hide');
            tabContent[i].classList.add('show');
        }
    }

    showTabContent(1);

    function hideTabContent(b) {
        if (tabContent[b].classList.contains('show')) {
            tabContent[b].classList.remove('show');
            tabContent[b].classList.add('hide');
        }
    }


    glazing.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.classList.contains('glazing_block')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    //forms

    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Мы скоро свяжемся с Вами.",
        failure: "Что-то пошло не так"
    };

    let form = document.querySelectorAll('.form'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    for (let i = 0; i < form.length; i++) {
        form[i].addEventListener('submit', function(event) {

            event.preventDefault();
            form[i].appendChild(statusMessage);

            let input = form[i].getElementsByTagName('input');

            input[1].addEventListener('input', function () {
                this.value = this.value.replace(/[^0-9+]/g, '');
            });
    
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
            let formData = new FormData(form);
    
            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
    
            request.send(json);
    
            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    }
    

});