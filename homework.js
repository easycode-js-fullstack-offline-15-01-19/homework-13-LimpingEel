// -------------------------- Home work --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------


;(function ($) {
	const menuName = $('.menu-name');
	const menuList = $('.menu-list');

	menuName.on('mouseover', function(e) {
		menuList.removeClass('active');
		menuName.removeClass('active');
		$(this).parent('.menu').find('ul').addClass('active');
		menuList.removeClass('menu-name-after');
		menuName.removeClass('menu-name-after');
		$(this).addClass('menu-name-after')
	});

}(jQuery));