window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    
    // Modals

    let headerBtn = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popup = document.querySelector('.popup'),
        phoneLink = document.querySelectorAll('.phone_link'),
        close = document.querySelectorAll('.popup_close'),
        bodyС = document.querySelector('body');

    bodyС.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('phone_link')) {
            
            popup.style.display = 'block';
        }
    });

    close[0].addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    headerBtn.addEventListener('click', function() {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close[1].addEventListener('click', function() {
        // if(e.target && e.target.classList.contains('popup_close') || e.target.classList.contains('popup_engineer')) {
            popupEngineer.style.display = 'none';
            document.body.style.overflow = '';
        // }
            
    });

    //Modal Request a call

    // Tabs 

    // let tab = document.querySelectorAll('.glazing_block'),
    //     tabA = document.querySelectorAll('.glazing_block a'),
    //     glazing = document.querySelector('.glazing_slider'),
    //     tabContent = document.querySelectorAll('.glazing .row');

    // function showTabContent(a) {
    //     for (let i = a; i < tabContent.length; i++) {
    //         tabContent[i].classList.remove('hide');
    //         tabContent[i].classList.add('show');
    //     }
    // }

    // showTabContent(1);

    // function hideTabContent(b) {
    //     if (tabContent[b].classList.contains('show')) {
    //         tabContent[b].classList.remove('show');
    //         tabContent[b].classList.add('hide');
    //     }
    // }


    // glazing.addEventListener('click', function(e) {
    //     let target = e.target;
    //     if (target && target.classList.contains('glazing_block')) {
    //         for(let i = 0; i < tab.length; i++) {
    //             if (target == tab[i]) {
    //                 hideTabContent(0);
    //                 showTabContent(i);
    //                 break;
    //             }
    //         }
    //     }
    // });
});