window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Modals

    // let headerBtn = document.querySelector('.header_btn'),
    //     popupEngineer = document.querySelector('.popup_engineer'),
    //     popup = document.querySelector('.popup'),
    //     // phoneLink = document.querySelectorAll('.phone_link'),
    //     // close = document.querySelectorAll('.popup_close'),
    //     bodyС = document.querySelector('body');

    // //Modal Request a call

    // bodyС.addEventListener('click', (e) => {
    //     let target = e.target;
    //     e.preventDefault();
    //     if (target && target.classList.contains('phone_link')) {
    //         popup.style.display = 'block';
    //     }

    //     if (target && target.tagName == 'STRONG' || target.classList.contains('popup') || e.target.classList.contains('popup_engineer')) {
    //         popup.style.display = 'none';
    //         popupEngineer.style.display = 'none';
    //         document.body.style.overflow = '';
    //     }
    // });

    // //Modal Request an Engineer

    // headerBtn.addEventListener('click', function () {
    //     popupEngineer.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // });

    // //setTimeout

    // setTimeout(callPopup, 60000);

    // function callPopup() {
    //     popup.style.display = 'block';
    // }

    // Tabs Glazing

    let glazing = document.querySelector('.glazing_slider'),
        tabA = glazing.getElementsByTagName('a'),
        tabContent = document.querySelectorAll('.glazing .row');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tabA[i].classList.remove('active');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            tabA[b].classList.toggle('active');
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
        console.log(event.target);
    });


    // Tabs Decoration

    let link = document.querySelectorAll('.link'),
        decorSlider = document.querySelector('.decoration_slider'),
        decorA = decorSlider.getElementsByTagName('a'),
        decorContent = document.querySelectorAll('.decor');

    function hideDecorContent(a) {
        for (let i = a; i < decorContent.length; i++) {
            decorContent[i].classList.remove('show');
            decorContent[i].classList.add('hide');
            link[i].classList.remove('after_click');
        }
    }

    hideDecorContent(1);

    function showDecorContent(b) {
        if (decorContent[b].classList.contains('hide')) {
            decorContent[b].classList.remove('hide');
            decorContent[b].classList.add('show');
            link[b].classList.toggle('after_click');
        }
    }

    decorSlider.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.tagName == 'A') {
            
            for (let i = 0; i < decorA.length; i++) {
                if (target == decorA[i]) {
                    hideDecorContent(0);
                    showDecorContent(i);
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
        
        

    form.forEach(function(item) {
        // function sendForm(item) {
        let input = item.querySelectorAll('input');

        input[1].addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9]/g, '');
        });
        item.addEventListener('submit', function(event) {
            event.preventDefault();
            item.appendChild(statusMessage);
                let formData = new FormData(item);

                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                console.log(item);

            function postData() {

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

        // }
        

        // sendForm(item);

    });

    //Timer

    let deadLine = '2018-12-31';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60) % 24),
        days = Math.floor((t/(1000*60*60*24)));
            if (seconds < 10) seconds = '0' + seconds;
            if (minutes < 10) minutes = '0' + minutes;
            if (hours < 10) hours = '0' + hours;
            if (days < 10) hours = '0' + hours;  
        return {
            'total' : t,
            "days" : days,
            "hours" : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
          
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
                document.querySelector('#days').innerHTML = '00';
                document.querySelector('#seconds').innerHTML = '00';
                document.querySelector('#minutes').innerHTML = '00';
                document.querySelector('#hours').innerHTML = '00';
            }
        }
    }

    setClock('timer', deadLine);

    //Images

    let works = document.querySelector(".works"),
        
        div = document.createElement('div'),
        overlay = document.querySelector(".overlay"),
        worksLink = document.querySelectorAll(".works a");

    // div.classList.add('overlay');

    works.addEventListener('click', (e) => {
        let target = e.target;
        e.preventDefault();
        if (target && target.tagName == 'IMG') {
            overlay.style.display = 'block';
        }

        if (target && target.classList.contains('overlay')) {
            overlay.style.display = 'none';
        }
    });

    //Calc

    let bodyP = document.querySelector('body'),
        popupCalc =  document.querySelector('.popup_calc'),
        balconIcons = document.querySelector('.balcon_icons'),
        icons = balconIcons.querySelectorAll('img'),
        bigImg = document.querySelector('.big_img'),
        bigImgContent = bigImg.querySelectorAll('img');

    
    bodyP.addEventListener('click', (e) => {
        let target = e.target;
        e.preventDefault();
        if (target && target.classList.contains('popup_calc_btn')) {
            popupCalc.style.display = 'block';
        }

        if (target && target.tagName == 'STRONG') {
            popupCalc.style.display = 'none';
            // popupEngineer.style.display = 'none';
        }

        function hideBigImg(a) {
            for (let i = a; i < bigImgContent.length; i++) {
                bigImgContent[i].classList.remove('show');
                bigImgContent[i].classList.add('hide');
                icons[i].classList.remove('do_image_more');
            }
        }
    
        hideBigImg(1);
    
        function showBigImg(b) {
            if (bigImgContent[b].classList.contains('hide')) {
                bigImgContent[b].classList.remove('hide');
                bigImgContent[b].classList.add('show');
                icons[b].classList.toggle('do_image_more');
            }
        }
    
        balconIcons.addEventListener('click', function (e) {
            let target = e.target;
            if (target && target.tagName == 'IMG') {
                for (let i = 0; i < icons.length; i++) {
                    if (target == icons[i]) {
                        hideBigImg(0);
                        showBigImg(i);
                        break;
                    }
                }
            }
            console.log(event.target); 
        });
    });

    
    






    




});