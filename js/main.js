const selectSingle = document.querySelector('.select-one');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');
const selectContent = selectSingle.querySelectorAll('.select__content-row');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	});
}
/*2
***
***
***
*/
const selectSingle_modal = document.querySelector('.select-modal');
const selectSingle_title_modal = selectSingle_modal.querySelector('.select__title');
const selectSingle_labels_modal = selectSingle_modal.querySelectorAll('.select__label');

// Toggle menu
selectSingle_title_modal.addEventListener('click', () => {
	if ('active' === selectSingle_modal.getAttribute('data-state')) {
		selectSingle_modal.setAttribute('data-state', '');
	} else {
		selectSingle_modal.setAttribute('data-state', 'active');
	}
});

// Close when click to option
for (let i = 0; i < selectSingle_labels_modal.length; i++) {
	selectSingle_labels_modal[i].addEventListener('click', (evt) => {
		selectSingle_title_modal.textContent = evt.target.textContent;
		selectSingle_modal.setAttribute('data-state', '');
	});
}







// 
$("#select__title").click(function () { 
	$("#select__content-row").toggleClass('ov-scroll'); 
	$("#select__content-row").toggleClass('select__content-row-active'); 
});
$("#select__content-row .select__label").click(function () { 
	$("#select__content-row").toggleClass('ov-scroll'); 
	$("#select__content-row").toggleClass('select__content-row-active'); 
});
$("#select__title-modal").click(function () {
	$("#select__content-row-modal").toggleClass('ov-scroll');
	$("#select__content-row-modal").toggleClass('select__content-row-active');
});
$("#select__content-row-modal .select__label").click(function () {
	$("#select__content-row-modal").toggleClass('ov-scroll');
	$("#select__content-row-modal").toggleClass('select__content-row-active');
});

//
$('.find__btn').click(function () { 
	$('.find__input').toggleClass("find__input-active");
});


//Modal
var modal = document.querySelector(".header__modal");
var btn = document.querySelector(".header__btn");
var span = document.querySelector(".header__modal-close");

 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
 }





/* Slider */




/*if desktop*/
if (window.matchMedia("(min-width: 480px)").matches) {

	$(function () {
		/* Pagination */
		var items = $(".list__wrapper .list__item");
		var numItems = items.length;
		var perPage = 1;

		items.slice(perPage).hide();

		$('#pagination-container').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "&laquo;",
			nextText: "&raquo;",
			onPageClick: function (pageNumber) {
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).show();
			}
		});
	});

}
/*if mob */
else {
	$(document).ready(function () {
		/*var offset = $('.stories__dots').offset(); 
		var topPadding = 0;*/
		$('.pagination__slider').slick({
			dots: true,
			dotsClass: 'slider-dots',
			/*arrows: false,*/
			mobileFirst: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 480,
					settings: "unslick"
				}]
		});
	});
}

/* Animation */
let animItems = document.querySelectorAll(".anim");
let anim_block_left = document.querySelectorAll(".anim-left");
let anim_block_right = document.querySelectorAll(".anim-right");

if (animItems.length > 0){
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll(params) {
		for (let index = 0;index < animItems.length; index++){
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add("active");
			} else {
				animItem.classList.remove("active");
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	},300);
}

