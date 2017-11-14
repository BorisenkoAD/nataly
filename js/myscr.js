	jQuery(document).ready(function() {
            jQuery('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav:true, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:3000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
            });
        });
	jQuery(document).ready(function() {
		
		var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear'
		};		
		 
		jQuery().UItoTop({ easingType: 'easeOutQuart' });
		 
		});

	//Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	jQuery.stellar({
		horizontalScrolling: false,
		responsive: true
	});