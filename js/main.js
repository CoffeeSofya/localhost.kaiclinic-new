// Функция для разворота стрелки
function toggleArrow($arrow) {
    $arrow.toggleClass('active');

    if ($arrow.hasClass('active')) {
        $arrow.css('transform', 'rotate(-450deg'); // Поворот стрелки
    } else {
        $arrow.css('transform', 'rotate(90deg)'); // Возврат в исходное состояние
    }
}

// function toggleAccordion(header) {
//     const item = header.parentElement; // Получаем родительский элемент аккордеона
//     const content = item.querySelector('.accordion-content'); // Получаем содержимое аккордеона


//     if (window.innerWidth < 768) {
//         // Логика переключения для мобильной версии
//         const isActive = header.classList.toggle('active'); // Переключаем активное состояние заголовка

//         content.style.display = isActive ? 'block' : 'none'; // Показываем или скрываем содержимое
//     } else {
//         // Логика для десктопной версии
//         const allItems = document.querySelectorAll('.accordion-item');

//         // Открытие/закрытие для десктопа
//         allItems.forEach((item) => {
//             const content = item.querySelector('.accordion-content');
//             content.style.display = 'none'; // Скрываем все содержимое
//             item.classList.remove('active'); // Убираем активность со всех
//         });

//         item.classList.add('active'); // Устанавливаем активный элемент
//         content.style.display = 'block'; // Показываем соответствующее содержимое
//     }
// }

// // Автоматически открываем первый элемент на загрузке страницы
// document.addEventListener('DOMContentLoaded', function () {
//     const firstItem = document.querySelector('.accordion-item');
//     const firstContent = firstItem.querySelector('.accordion-content');
//     firstItem.classList.add('active'); // Устанавливаем класс активного элемента

//     firstContent.style.display = 'block'; // Показываем содержимое
// });


$(document).ready(function () {

    new isvek.Bvi({
        target: '.vijoin',
        fontSize: 24,
        theme: 'black',
        panelFixed: true,
        lang: 'ru-RU'
    });


    // Обработчик клика по заголовкам
    $('.accordion-header').on('click', function () {
        toggleAccordion($(this)); // Вызов функции переключения аккордеона
        $arrow = $(this).find('.arrow-bottom');
        toggleArrow($arrow);
    });


    // Автоматически открываем первый элемент на загрузке страницы
    const $firstItem = $('.accordion-item').first();
    const $firstHeader = $firstItem.find('.accordion-header'); // Получаем заголовок первого элемента

    $firstHeader.trigger('click'); // Имитируем клик на заголовке, чтобы открыть элемент


    function toggleAccordion($header) {
        const $item = $header.parent(); // Получаем родительский элемент аккордеона
        const $content = $item.find('.accordion-content'); // Получаем содержимое аккордеона

        if ($(window).width() < 768) {
            // Логика переключения для мобильной версии
            const isActive = $header.toggleClass('active').hasClass('active'); // Переключаем активное состояние заголовка

            // $content.slideToggle(isActive ? 400 : 400); // Показываем или скрываем содержимое
        } else {
            // Логика для десктопной версии
            const $allItems = $('.accordion-item');

            // Закрываем все элементы
            $allItems.each(function () {
                const $currContent = $(this).find('.accordion-content');
                // $currContent.slideUp(400); // Скрываем все содержимое
                $(this).removeClass('active'); // Убираем активность со всех
                $(this).find('.accordion-header').removeClass('active');
            });

            // Открываем текущий элемент
            $item.addClass('active'); // Устанавливаем активный элемент
            $header.addClass('active');
            // $content.slideDown(400); // Плавно показываем соответствующее содержимое
        }
    }











    // Инициализация начальных элементов
    activateItems();

    // Функция для активации начальных элементов
    // function activateItems() {
    //     const windowWidth = $(window).width();
    //     let $items;

    //     if (windowWidth <= 720) {
    //         $items = $('.content_item:first-child');
    //         $('.content_head').click(function () {
    //             if ($(window).width() <= 1040) {
    //                 var $contentItem = $(this).parent();
    //                 var $list = $contentItem.find('.content_item__items');
    //                 var $arrow = $(this).find('.arrow-bottom');

    //                 // Переключаем состояние активного элемента и выводим/скрываем содержимое
    //                 $contentItem.toggleClass('active');
    //                 $list.slideToggle();

    //                 // Обработка стрелки
    //                 toggleArrow($arrow);
    //             }
    //         });
    //     } else if (720 <= windowWidth && windowWidth <= 1040) {
    //         // Делаем первые два элемента активными
    //         $items = $('.content_item:lt(2)');
    //         console.log('открыл 2 первых элемента');

    //         // Обработка клика на заголовок элемента
    //         $('.content_head').click(function () {
    //             // Получаем родительский элемент, к которому принадлежит заголовок
    //             var $contentItem = $(this).parent();
    //             var index = $contentItem.index(); // Получаем индекс текущего элемента
    //             console.log('Клик на элемент с индексом: ' + index);

    //             // Получаем стрелку внутри заголовка
    //             var $arrow = $(this).find('.arrow-bottom');

    //             // Получаем стрелку соседнего элемента
    //             var $nextArrow = $contentItem.next('.content_item').find('.arrow-bottom');
    //             var $prevArrow = $contentItem.prev('.content_item').find('.arrow-bottom');

    //             // Проверяем, является ли текущий элемент активным (открытым)
    //             var isActive = $contentItem.hasClass('active');
    //             console.log('Элемент текущий активен: ' + isActive);

    //             if (isActive) {
    //                 if (index % 2 === 0) { // Четный индекс
    //                     console.log('Закрываю пару: ' + index + ' и ' + (index + 1));
    //                     $contentItem.add($contentItem.next('.content_item')).removeClass('active');
    //                     $contentItem.find('.content_item__items').slideUp();
    //                     $contentItem.next('.content_item').find('.content_item__items').slideUp();

    //                     toggleArrow($arrow); // Поворот стрелки текущего блока
    //                     toggleArrow($nextArrow); // Поворот стрелки следующего блока
    //                 } else { // Нечетный индекс
    //                     console.log('Закрываю пару: ' + (index - 1) + ' и ' + index);
    //                     $contentItem.add($contentItem.prev('.content_item')).removeClass('active');
    //                     $contentItem.find('.content_item__items').slideUp();
    //                     $contentItem.prev('.content_item').find('.content_item__items').slideUp();

    //                     toggleArrow($arrow); // Поворот стрелки текущего блока
    //                     toggleArrow($prevArrow); // Поворот стрелки предыдущего блока
    //                 }
    //             } else {
    //                 // Если элемент не активен, открываем его и соседний
    //                 if (index % 2 === 0) { // Четный индекс
    //                     console.log('Открываю пару: ' + index + ' и ' + (index + 1));
    //                     $contentItem.add($contentItem.next('.content_item')).addClass('active');
    //                     $contentItem.find('.content_item__items').slideDown();
    //                     $contentItem.next('.content_item').find('.content_item__items').slideDown();

    //                     toggleArrow($arrow); // Поворот стрелки текущего блока
    //                     toggleArrow($nextArrow); // Поворот стрелки следующего блока
    //                 } else { // Нечетный индекс
    //                     console.log('Открываю пару: ' + (index - 1) + ' и ' + index);
    //                     $contentItem.add($contentItem.prev('.content_item')).addClass('active');
    //                     $contentItem.find('.content_item__items').slideDown();
    //                     $contentItem.prev('.content_item').find('.content_item__items').slideDown();

    //                     toggleArrow($arrow); // Поворот стрелки текущего блока
    //                     toggleArrow($prevArrow); // Поворот стрелки предыдущего блока
    //                 }
    //             }
    //         });

    //     }
    //     else ($items)
    //     $items.addClass('active');
    //     $items.find('.content_item__items').show();
    //     $items.find('.content_head .arrow-bottom').addClass('active');

    // }

    // $('.accordion-item').click({
    //     toggleAccordion();
    // })


    function activateItems() {
        const windowWidth = $(window).width();
        let $items;

        // Функция для открытия элементов
        function openItems($contentItem, $nextItem) {
            $contentItem.add($nextItem).addClass('active');
            $contentItem.find('.content_item__items').slideDown();
            $nextItem.find('.content_item__items').slideDown();
            toggleArrow($contentItem.find('.arrow-bottom'));
            toggleArrow($nextItem.find('.arrow-bottom'));
        }

        // Функция для закрытия элементов
        function closeItems($contentItem, $prevItem) {
            $contentItem.add($prevItem).removeClass('active');
            $contentItem.find('.content_item__items').slideUp();
            $prevItem.find('.content_item__items').slideUp();
            toggleArrow($contentItem.find('.arrow-bottom'));
            toggleArrow($prevItem.find('.arrow-bottom'));
        }

        if (windowWidth <= 720) {
            $items = $('.content_item:first-child');
            $('.content_head').click(function () {
                if ($(window).width() <= 1040) {
                    var $contentItem = $(this).parent();
                    var $list = $contentItem.find('.content_item__items');
                    var $arrow = $(this).find('.arrow-bottom');

                    $contentItem.toggleClass('active');
                    $list.slideToggle();
                    toggleArrow($arrow);
                }
            });
        } else if (windowWidth) {
            $items = $('.services__group .content_item:first-child');
            $('.content_head').click(function () {

                var $contentItem = $(this).parent();
                var $list = $contentItem.find('.content_item__items');
                var $arrow = $(this).find('.arrow-bottom');

                $contentItem.toggleClass('active');
                $list.slideToggle();
                toggleArrow($arrow);

            });
        }
        else if (windowWidth > 720 && windowWidth <= 1040) {
            // Делаем первые два элемента активными
            $items = $('.content_item:lt(2)');

            // Открываем первые два элемента при загрузке страницы
            if ($items.length > 0) {
                openItems($items.first(), $items.last());
            }

            $('.content_head').click(function () {
                var $contentItem = $(this).parent();
                var index = $contentItem.index(); // Получаем индекс текущего элемента

                var $nextItem = $contentItem.next('.content_item');
                var $prevItem = $contentItem.prev('.content_item');
                var isActive = $contentItem.hasClass('active');

                if (isActive) {
                    if (index % 2 === 0) { // Четный индекс
                        closeItems($contentItem, $nextItem);
                    } else { // Нечетный индекс
                        closeItems($contentItem, $prevItem);
                    }
                } else {
                    if (index % 2 === 0) { // Четный индекс
                        openItems($contentItem, $nextItem);
                    } else { // Нечетный индекс
                        openItems($contentItem, $prevItem);
                    }
                }
            });
        } else if ($(window).width()) {
            var $contentItem = $(this).parent();
            var $list = $contentItem.find('.content_item__items');
            var $arrow = $(this).find('.arrow-bottom');

            $contentItem.toggleClass('active');
            $list.slideToggle();
            toggleArrow($arrow);
        }
        else ($items)
        // $items = $('.content_item:first-child');
        $items.addClass('active');
        $items.find('.content_item__items').show();
        $items.find('.content_head .arrow-bottom').addClass('active');
    }
});





$(document).ready(function () {

    new isvek.Bvi({
        target: '.vijoin',
        fontSize: 24,
        theme: 'black',
        panelFixed: true,
        lang: 'ru-RU'
    });



    $('.header__burger').click(function () {
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // не срабатывает
    $('.header__region-item_nn').click(function () {
        console.log("Клик сработал");
        $('.header__region-nn').toggle();
    });

    // $('.accordion-item').click(function () {
    //     var $arrow = $(this).find('.arrow-bottom');
    //     $(this).toggleClass('active');
    //     $(this).next('.accordion-content').slideToggle();
    //     toggleArrow($arrow);
    // });

    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 100) {
    //          $('#scroller').css('top', $(window).scrollTop());
    //     }
    // }
    // );


    // Обрабатываем клик по расписанию
    $('.schedule').click(function (event) {
        $('.menu__schedule').toggleClass('active');
    });

    // Обрабатываем клик по расписанию для поворота стрелки
    $('.schedule-name-label').click(function (event) {
        $(this).toggleClass('active');
    });

    // Инициализация табов популярных услуг и услуг(по направлениям и специальностям) 
    $('.content_tab').hide();
    $('.content_service_tab').hide();
    $('#content-tab1').show();
    $('#content-service-tab1').show();

    $('.popular_services__label').on('click', function (event) {
        var tabId = $(this).attr('for');

        $('.content_tab').hide();
        $('#content-' + tabId).show();
    });

    $('.services__label').on('click', function (event) {
        var tabId = $(this).attr('for');

        $('.content_service_tab').hide();
        $('#content-' + tabId).show();
    });

    const windowWidth = $(window).width();
    //обработка grid-плиток для папок страницы обследования
    if (windowWidth > 720) {
        var itemCount = $('.researches__group > div').length;
        // Устанавливаем общее значение grid-template-columns
        if (itemCount === 1 || itemCount === 2) {
            $('.researches__group').css('grid-template-columns', '1fr');
        } else {
            $('.researches__group').css('grid-template-columns', 'repeat(3, 1fr)');

            // Обработка для случаев с 1 и 2 элементами в последнем ряду
            var itemCountOne = itemCount % 3;

            if (itemCountOne === 1) {
                $('.researches__group > div:nth-child(1)').css('grid-column', '1 / span 3');
            } else if (itemCountOne === 2) {
                $('.researches__group > div:nth-child(1)').css('grid-column', '1 / span 3');
                $('.researches__group > div:last-child()').css('grid-column', '1 / span 3');
            }
        }
    }


    // const backgroundColors = ['#F8F8F8', '#FEE6C5', '#F9C8B6', '#CFE6F5'];

    // $('.detail_text h2').each(function(index) {
    //     // Стилизация заголовка
    //     $(this).css({
    //         'padding': '20px 20px 32px 20px',
    //         'background-color': backgroundColors[index % backgroundColors.length],
    //         'margin-bottom': '0',
    //         'border-radius': '22px 22px 0 0'
    //     });

    //     // Стилизация соответствующих параграфов
    //     $(this).next('p').css({
    //         'padding': '0 20px 20px 20px',
    //         'background-color': backgroundColors[index % backgroundColors.length],
    //         'border-radius': '0 0 22px 22px',
    //         'margin-bottom': '20px',
    //     });
    // });


    const colors = ['#F8F8F8', '#FEE6C5', '#F9C8B6', '#CFE6F5'];

    $('.detail_text h2').each(function (index) {
        const header = $(this);
        const nextHeader = header.nextAll('h2').first(); // Ищем следующий заголовок h2
        const sectionElements = header.nextUntil(nextHeader); // Получаем все элементы между текущим h2 и следующим h2


        // Стили для h2
        header.css({
            'padding': '20px',
            'background-color': colors[index % colors.length],
            'margin-bottom': '0',
            'border-radius': '22px 22px 0 0',
        });

        // Применяем стили к элементам секции (h3, p и другие)
        sectionElements.each(function () {
            if ($(this).is('h3')) {
                $(this).css({
                    'padding': '20px',
                    'background-color': colors[index % colors.length],
                    'margin': '0',
                });
            } else if ($(this).is('h4')) {
                $(this).css({
                    'padding': '20px',
                    'background-color': colors[index % colors.length],
                    'margin': '0',
                });
            } else if ($(this).is('p')) {
                $(this).css({
                    'padding': '0 20px 0 20px',
                    'background-color': colors[index % colors.length],
                    'border-radius': '0',
                });
            }
        });

        // Применяем отдельные стили к последнему p в текущем разделе
        sectionElements.last('p').css({
            'padding': '0 20px 20px 20px',
            'background-color': colors[index % colors.length],
            'border-radius': '0 0 22px 22px',
        });

        nextHeader.css({
            'margin-top': '20px'
        });

        if (windowWidth > 1040) {
            header.css({
                'padding': '32px',
                'background-color': colors[index % colors.length],
                'margin-bottom': '0',
                'border-radius': '35px 35px 0 0',
            });
            sectionElements.each(function () {
                if ($(this).is('h3')) {
                    $(this).css({
                        'padding': '20px 32px',
                        'background-color': colors[index % colors.length],
                        'margin': '0',
                    });
                } else if ($(this).is('h4')) {
                    $(this).css({
                        'padding': '20px 32px',
                        'background-color': colors[index % colors.length],
                        'margin': '0',
                    });
                } else if ($(this).is('p')) {
                    $(this).css({
                        'padding': '0 32px 20px 32px',
                        'background-color': colors[index % colors.length],
                        'border-radius': '0',
                    });
                }
            });

            // Применяем отдельные стили к последнему p в текущем разделе
            sectionElements.last('p').css({
                'padding': '0 32px 32px 32px',
                'background-color': colors[index % colors.length],
                'border-radius': '0 0 35px 35px',
            });

            nextHeader.css({
                'margin-top': '32px'
            });
        }
    });



    // const items = $('.researches__group > div');
    // const itemCount = items.length;

    // items.css('grid-column', '');
    // // Основное значение для шаблона
    // $('.researches__group').css('grid-template-columns', 'repeat(3, 1fr)');
    // // Обработка элементов
    // for (let i = 0; i < itemCount; i += 3) {
    //     // Определяем, сколько элементов остаётся
    //     const remaining = itemCount - i;

    //     if (remaining === 1) {
    //         $(items[i]).css('grid-column', '1 / span 3'); // Один элемент занимает всю ширину
    //     } else if (remaining === 2) {
    //         $(items[i]).css('grid-column', '1 / span 3'); // Первый элемент
    //         $(items[i + 1]).css('grid-column', '2 / span 1'); // Второй элемент
    //     } // Для трех элементов ничего не делаем, они уже займут свои колонки
    // }



    // jQuery(document).ready(function(a){a.bvi(bvi_init.settings)});
    // jQuery(".bvi-link-shortcode").prop("title",'ВЕРСИЯ САЙТА ДЛЯ СЛАБОВИДЯЩИХ');
    // jQuery(".bvi-link-shortcode").appendTo("#eye_on_menu");
    // 	// jQuery(".bvi-link-shortcode").html(jQuery(".bvi-link-shortcode").html()+'<span>версия сайта для слабовидящих</span>');

    // jQuery(document).ready(function(a){
    //     a.bvi(bvi_init.settings)
    // });


    // $(document).ready(function() {
    //     $('.bvi-open').click(function() {

    //         new isvek.Bvi({
    //             target: '.visually',
    //             fontSize: 24,
    //             theme: 'black'});

    //     });
    // });

    // $(document).ready(function() {
    //     $('.bvi-open').click(function() {
    //         new isvek.Bvi({
    //             target: '.bvi-open',
    //             fontSize: 24,
    //             theme: 'black'
    //             //...etc
    //           });
    //     });
    // });



    //все попапы

    const $popup = $('#popup');
    const $popupContent = $('#popup-content');
    const $regionToggle = $('.header__region-label'); // Селектор для переключателя региона

    function togglePopup(url) {
        if ($popup.is(':visible')) {
            $popup.css('display', 'none');
            $regionToggle.removeClass('active'); // Удаляем класс active, когда попап закрывается
        } else {
            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    $popupContent.html(data);
                    $popup.css('display', 'flex');
                    $regionToggle.addClass('active'); // Добавляем класс active, когда попап открывается
                },
                error: function () {
                    $popupContent.html('<p>Произошла ошибка при загрузке содержимого.</p>');
                    $popup.css('display', 'flex');
                    $regionToggle.addClass('active'); // Добавляем класс active, когда попап открывается
                }
            });
        }
    }

    $('#region-toggle').on('click', function () {
        const url = 'popups/region-change.html';
        togglePopup(url);
    });

    $('#button-zapis, #button-zapis-pc, #button-zapis-doctor').on('click', function () {
        const url = 'popups/button_zapis.html';
        togglePopup(url);
    });

    $('#close-popup').on('click', function () {
        $popup.css('display', 'none');
        $regionToggle.removeClass('active'); // Удаляем класс active, когда попап закрывается
    });

    $(window).on('click', function (e) {
        if ($(e.target).is($popup)) {
            $popup.css('display', 'none');
            $regionToggle.removeClass('active'); // Удаляем класс active, когда попап закрывается
        }
    });


    $('.owl-carousel-big-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        smartSpeed: 2000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда
        lazyLoad: true,
    });

    $('.owl-carousel_stocks').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 8,
            },
            720: {
                items: 2.5,
                margin: 12,
            },
            1040: {
                items: 3.5,
                margin: 20,
            }
        }
    });

    $('.owl-carousel_new_doctors').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 8,
            },
            720: {
                items: 2.5,
                margin: 12,
            },
            1040: {
                items: 3.5,
                margin: 20,
            }
        }
    });

    $('.owl-carousel_equipment').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 8,
            },
            720: {
                items: 2.5,
                margin: 12,
            },
            1040: {
                items: 3.5,
                margin: 20,
            }
        }
    });

    // $('.gallery__owl-carousel').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     lazyLoad: true,
    //     responsive: {
    //         0: {
    //             items: 1.5,
    //             margin: 8,
    //         },
    //         720: {
    //             items: 2.5,
    //             margin: 12,
    //         },
    //         1040: {
    //             items: 3.5,
    //             margin: 20,
    //         }
    //     }
    // });

    $('.about_team_carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 8,
            },
            720: {
                items: 2.5,
                margin: 12,
            },
            1040: {
                items: 3.5,
                margin: 20,
            }
        }
    });


    // Гллерея
    $('.gallery__owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 8,
            },
            720: {
                items: 2.5,
                margin: 12,
            },
            1040: {
                items: 3.5,
                margin: 20,
            }
        }
    });

    let currentIndex = 0; // Индекс текущего изображения

    // Открытие полноэкранного режима
    $('.gallery__owl-carousel_item img').on('click', function () {
        currentIndex = $(this).closest('.gallery__owl-carousel_item').index(); // Получаем индекс текущего изображения
        showImage(currentIndex); // Показать текущее изображение
        $('.fullscreen-modal').css('display', 'flex'); // Отобразить модальное окно
    });

    // Закрытие модального окна по клику вне изображения и кнопок
    $('.fullscreen-modal').on('click', function (e) {
        if (!$(e.target).closest('.arrow, .close').length) {
            $('.fullscreen-modal').hide(); // Закрываем модал
        }
    });

    // Закрытие полноэкранного режима по кнопке закрытия
    $('.close').on('click', function () {
        $('.fullscreen-modal').hide(); // Закрываем модальное окно
    });

    // Функция для показа изображения
    function showImage(index) {
        const images = $('.gallery__owl-carousel_item img'); // Получаем все изображения

        $('#fullscreen-image').attr('src', $(images[index]).attr('src')); // Устанавливаем src для полноэкранного изображения
    }

    // Обработка нажатий стрелок
    $('#prev').on('click', function (e) {
        e.stopPropagation(); // Остановить событие, чтобы не закрыть окно
        currentIndex = (currentIndex === 0) ? $('.gallery__owl-carousel_item').length - 1 : currentIndex - 1; // Логика для предыдущего изображения
        showImage(currentIndex); // Показать новое изображение
    });

    $('#next').on('click', function (e) {
        e.stopPropagation(); // Остановить событие, чтобы не закрыть окно
        currentIndex = (currentIndex === $('.gallery__owl-carousel_item').length - 1) ? 0 : currentIndex + 1; // Логика для следующего изображения
        showImage(currentIndex); // Показать новое изображение
    });



    // Zoom in/out функции (например, по клику на изображении)
    // $('#fullscreen-image').on('click', function(e) {
    //     e.stopPropagation(); // Остановить событие, чтобы не закрыть окно
    //     const currentHeight = $(this).height(); // Получаем текущую высоту
    //     const newHeight = currentHeight * 1.5; // Увеличиваем на 50%
    //     if (newHeight <= 0.8 * $(window).height()) {
    //         $(this).css('max-height', newHeight); // Устанавливаем новую высоту
    //     } else {
    //         $(this).css('max-height', '80vh'); // Ограничиваем максимальную высоту
    //     }
    // });

    // Гллерея конец



    const $selectedOption = $('.selected-option');
    const $optionsContainer = $('.options');
    const $optionsList = $('.option');

    // Показать или скрыть список опций при нажатии на выбранную опцию
    $selectedOption.on('click', function() {
        $optionsContainer.toggle(); // Переключаем видимость списка опций
    });

    // Выбор опции
    $optionsList.on('click', function() {
        const selectedText = $(this).text(); // Получаем текст выбранной опции
        $selectedOption.text(selectedText); // Обновляем текст выбранной опции
        $selectedOption.attr('data-value', $(this).attr('data-value')); // Сохраняем выбранное значение
        $optionsContainer.hide(); // Скрываем список после выбора
    });

    // Закрытие списка при клике вне кастомного селекта
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.custom-select').length) {
            $optionsContainer.hide(); // Скрываем выпадающий список, если кликнули вне него
        }
    });

    /*калькулятор выбор услуг и подсчет стоимости*/
    function updateCounters() {
        let totalCount = 0;
        let totalPrice = 0;

        $('.analis-checkbox:checked').each(function() {
            totalCount += 1; // Увеличиваем количество выбранных анализов
            totalPrice += parseInt($(this).val()); // Суммируем стоимость
        });

        $('.calculate_analis_selected').eq(0).text(totalCount); // Обновляем количество анализов
        $('.calculate_analis_selected').eq(1).text(totalPrice + ' pуб'); // Обновляем сумму
    }

    // Обработчик на изменение состояния чекбокса
    $('.analis-checkbox').change(function() {
        // Изменяем фон родительского элемента списка
        if ($(this).is(':checked')) {
            $(this).closest('li').css({
                'background-color': '#F9C8B6', // Меняем фон на #F9C8B6
                'border-radius': '22px' // Устанавливаем радиус скругления
            }); 
        } else {
            $(this).closest('li').css({
                'background-color': '', // Сбрасываем фон
                'border-radius': '' // Сбрасываем радиус
            });
        }

        updateCounters(); // Обновляем счетчики при изменении чекбоксов
    });

    // Кнопка сброса
    $('#reset-btn').click(function() {
        $('.analis-checkbox').prop('checked', false); // Снимаем все галочки
        $('li').css('background-color', ''); // Сбрасываем фон
        updateCounters(); // Обновляем счетчики
    });
    $('#reset-btn-pc').click(function() {
        $('.analis-checkbox').prop('checked', false); // Снимаем все галочки
        $('li').css('background-color', ''); // Сбрасываем фон
        updateCounters(); // Обновляем счетчики
    });

    // Открытие модального окна с выбранными анализами
    $('#open-list-btn').click(function() {
        let selectedList = '';
        let totalPrice = 0;

        $('.analis-checkbox:checked').each(function() {
            const name = $(this).data('name'); // Получаем имя анализа
            const price = $(this).val(); // Получаем цену
            selectedList += `<li>${name}: ${price} pуб</li>`; // Формируем элементы списка
            totalPrice += parseInt(price); // Подсчитываем общую стоимость
        });

        $('#selected-analyses-list').html(selectedList); // Заполняем список в модальном окне
        $('#modal-total').text(totalPrice + ' pуб'); // Обновляем сумму в модальном окне
        $('#modal').css('display', 'block'); // Показываем модальное окно
    });

    // Закрытие модального окна
    $('.close').click(function() {
        $('#modal').css('display', 'none'); // Скрываем модальное окно
    });

    // Закрытие модального окна при клике вне его
    $(window).click(function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').css('display', 'none');
        }
    });

//полурабочая логика калькулятора
    // const analysesByCategory = {
    //     "Популярное": [
    //         { name: "Анализ 1", value: 440 },
    //         { name: "Анализ 2", value: 560 },
    //         { name: "Анализ 3", value: 780 },
    //     ],
    //     "Аллергодиагностика": [
    //     { name: "Анализ 4", value: 660 },
    //     { name: "Анализ 5", value: 780 },
    //     ],
    //     "Бактериологические исследования": [
    //         { name: "Анализ 6", value: 470 },
    //         { name: "Анализ 7", value: 590 },
    //     ],
    //     "Биохимические исследования": [
    //         { name: "Анализ 8", value: 670 },
    //     ],
    //     "Гистологические и цитологические исследования": [
    //         { name: "Анализ 1", value: 440 },
    //     ],
    // };

    // // Функция для загрузки анализов по выбранной категории
    // function loadAnalyzes(selectedCategory) {
    //     const analyses = analysesByCategory[selectedCategory];
    //     const list = $('.content_item__list');
    //     list.empty(); // Очищаем список

    //     analyses.forEach(analysis => {
    //         const analysisItem = `
    //             <li>
    //                 <label class="checkbox-container">
    //                     <input type="checkbox" class="analis-checkbox" value="${analysis.value}" data-name="${analysis.name}">
    //                     <span class="checkmark"></span>
    //                     ${analysis.name}
    //                 </label>
    //             </li>
    //         `;
    //         list.append(analysisItem); // Добавляем элемент в список
    //     });
    // }

    // // Кастомный селект
    // const $selectedOption = $('.selected-option');
    // const $optionsContainer = $('.options');
    // const $optionsList = $('.option');

    // // Показать или скрыть список опций при нажатии на выбранную опцию
    // $selectedOption.on('click', function () {
    //     $optionsContainer.toggle(); // Переключаем видимость списка опций
    // });

    // // Выбор опции
    // $optionsList.on('click', function () {
    //     const selectedText = $(this).text(); // Получаем текст выбранной опции
    //     $selectedOption.children('p').text(selectedText); // Обновляем текст выбранной опции
    //     const selectedValue = $(this).data('value'); // Получаем значение опции
    //     loadAnalyzes(selectedValue); // Загружаем анализы для выбранной категории
    //     $optionsContainer.hide(); // Скрываем список после выбора
    // });

    // // Закрытие списка при клике вне кастомного селекта
    // $(document).on('click', function (event) {
    //     if (!$(event.target).closest('.custom-select').length) {
    //         $optionsContainer.hide(); // Скрываем выпадающий список, если кликнули вне него
    //     }
    // });

    // /* Калькулятор выбора услуг и подсчет стоимости */
    // function updateCounters() {
    //     let totalCount = 0;
    //     let totalPrice = 0;

    //     $('.analis-checkbox:checked').each(function () {
    //         totalCount += 1; // Увеличиваем количество выбранных анализов
    //         totalPrice += parseInt($(this).val()); // Суммируем стоимость
    //     });

    //     $('.calculate_analis_selected').eq(0).text(totalCount); // Обновляем количество анализов
    //     $('.calculate_analis_selected').eq(1).text(totalPrice + ' pуб'); // Обновляем сумму
    // }

    // // Обработчик на изменение состояния чекбокса
    // $(document).on('change', '.analis-checkbox', function () {
    //     // Изменяем фон родительского элемента списка
    //     if ($(this).is(':checked')) {
    //         $(this).closest('li').css({
    //             'background-color': '#F9C8B6', // Меняем фон на #F9C8B6
    //             'border-radius': '22px' // Устанавливаем радиус скругления
    //         });
    //     } else {
    //         $(this).closest('li').css({
    //             'background-color': '', // Сбрасываем фон
    //             'border-radius': '' // Сбрасываем радиус

    //         });
    //     }

    //     updateCounters(); // Обновляем счетчики при изменении чекбоксов
    // });

    // // Кнопка сброса
    // $('#reset-btn').click(function () {
    //     $('.analis-checkbox').prop('checked', false); // Снимаем все галочки
    //     $('li').css('background-color', ''); // Сбрасываем фон
    //     updateCounters(); // Обновляем счетчики
    // });

    // // Открытие модального окна с выбранными анализами
    // $('#open-list-btn').click(function () {
    //     let selectedList = '';
    //     let totalPrice = 0;

    //     $('.analis-checkbox:checked').each(function () {
    //         const name = $(this).data('name'); // Получаем имя анализа
    //         const price = $(this).val(); // Получаем цену
    //         selectedList += `<li>${name}: ${price} pуб</li>`; // Формируем элементы списка
    //         totalPrice += parseInt(price); // Подсчитываем общую стоимость
    //     });

    //     $('#selected-analyses-list').html(selectedList); // Заполняем список в модальном окне
    //     $('#modal-total').text(totalPrice + ' pуб'); // Обновляем сумму в модальном окне
    //     $('#modal').css('display', 'block'); // Показываем модальное окно
    // });

    // // Закрытие модального окна
    // $('.close').click(function () {
    //     $('#modal').css('display', 'none'); // Скрываем модальное окно
    // });

    // // Закрытие модального окна при клике вне его
    // $(window).click(function (event) {
    //     if ($(event.target).is('#modal')) {
    //         $('#modal').css('display', 'none');
    //     }
    // });

    // // Инициализация с первой категорией
    // loadAnalyzes("Популярное");















    // $('.tab_down').on('click', function() {
    //     var target = $(this).data('target');

    //     $('html, body').animate({
    //         scrollTop: $(target).offset().top
    //     }, 1000);
    // });

    //якоря
    $('.tab_down').on('click', function (event) {
        event.preventDefault();
        var target = $(this).data('target');

        if ($(target).length) {
            var offset = $(target).offset().top;
            var headerHeight = $('.content-fixed').outerHeight() || 0;
            var additionalOffset = 30;

            $('html, body').animate({
                scrollTop: offset - headerHeight - additionalOffset
            }, 600);
        }
    });

});



// Проверяем наличие куки с согласием
if (document.cookie.indexOf("cookieConsent=true") === -1) {
    $("#cookieConsent").fadeIn(); // Показываем окно
}

// Обработчик кнопки согласия
$("#acceptCookies").on("click", function() {
    // Устанавливаем куки на 30 дней
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 дней
    var expires = "expires=" + date.toUTCString();
    document.cookie = "cookieConsent=true;" + expires + ";path=/"; // Устанавливаем куки
    $("#cookieConsent").fadeOut(); // Скрываем окно
});

// Обработчик нажатия на кнопку закрытия
$("#closeModal").on("click", function() {
    $("#cookieConsent").fadeOut(); // Скрываем окно
});



//определение города
//   $(document).ready(function(){
//     ymaps.ready(function(){
//         var geolocation = ymaps.geolocation;
//         $('#tow').html(geolocation.city);
//     });
// });

$(window).resize(function () {
    activateItems();
});