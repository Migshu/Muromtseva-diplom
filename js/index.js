window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Modals

    let headerBtn = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popup = document.querySelector('.popup'),
        phoneLink = document.querySelectorAll('.phone_link'),
        close = document.querySelectorAll('.popup_close'),
        bodyС = document.querySelector('body');

    //Modal Request a call

    bodyС.addEventListener('click', (e) => {
        let target = e.target;
        e.preventDefault();
        if (target && target.classList.contains('phone_link')) {
            popup.style.display = 'block';
        }

        if (target && target.tagName == 'STRONG' || target.classList.contains('popup') || e.target.classList.contains('popup_engineer')) {
            popup.style.display = 'none';
            popupEngineer.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    //Modal Request an Engineer

    headerBtn.addEventListener('click', function () {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    // Tabs Glazing

    let tab = document.querySelectorAll('.glazing_block'),
        glazing = document.querySelector('.glazing_slider'),
        tabA = glazing.getElementsByTagName('a'),
        tabContent = document.querySelectorAll('.glazing .row');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    glazing.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.tagName == 'A') {
            for (let i = 0; i < tabA.length; i++) {
                if (target == tabA[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Tabs Decoration

    let decorItem = document.querySelectorAll('.decoration_item'),
        decorSlider = document.querySelector('.decoration_slider'),
        decorA = decorSlider.getElementsByTagName('a'),
        decorContent = document.querySelectorAll('.decor'),
        afterClick = document.querySelectorAll('.after_click'),
        noClick = document.querySelectorAll('.no_click');

    function hideDecorContent(a) {
        for (let i = a; i < decorContent.length; i++) {
            decorContent[i].classList.remove('show');
            decorContent[i].classList.add('hide');
        }
    }

    hideDecorContent(1);

    function showDecorContent(b) {
        if (decorContent[b].classList.contains('hide')) {
            decorContent[b].classList.remove('hide');
            decorContent[b].classList.add('show');
        }
    }

    function actionItem(c) {
        if (decorItem[c].classList.contains('after_click')) {
            decorItem[c].classList.remove('after_click');
            decorItem[c].classList.add('no_click');
            // noClick.style.display = 'flex';
        } else {
            decorItem[c].classList.remove('no_click');
            decorItem[c].classList.add('after_click');
            // afterClick.style.display = 'flex';
        }
    }

    decorSlider.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.tagName == 'A') {
            
            for (let i = 0; i < decorA.length; i++) {
                if (target == decorA[i]) {
                    hideDecorContent(0);
                    showDecorContent(i);
                    actionItem(0);
                    break;
                }
            }
        }
    });

    //forms

    /*let message = {
        loading: "Загрузка...",
        success: "Спасибо! Мы скоро свяжемся с Вами.",
        failure: "Что-то пошло не так"
    };

    let mainForm = document.querySelector('.main-form'),
        form = document.querySelector('#form'),
        input = mainForm.getElementsByTagName('input'),
        inp = form.getElementsByTagName('input'),
        
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
        
        input[0].addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9+]/g, '');
        });

        inp[1].addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9+]/g, '');
        });

    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

            function postData(data) {

                return new Promise(function(resolve,reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');

                    request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                            resolve()
                        } else if(request.readyState === 4 && request.status == 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    });
                    
                    request.send(json);
                
                });
            } //End postData

            function clerInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clerInput);
        });
    }

    sendForm(mainForm);
    sendForm(form);
    */




});