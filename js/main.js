document.addEventListener('DOMContentLoaded', function(){
	
	//	tablet menu
	if ( window.innerWidth <= 1024 ) {
		$(".header-site__nav ul li.has-child > a:nth-child(1)").on("click", function(e){
			if ( !($(this).parent("li").hasClass("open")) ) {
				e.preventDefault()
				$(this).closest("ul").find(".open").removeClass("open")
				$(this).parent("li").addClass("open")
			}
		})
	}
	
	//	mobile menu
	
	const mobileClose = document.querySelector(".mobile-menu__close")
	const mobileToggle = document.querySelector(".mobile-toggle")
	const mobileMenu = document.querySelector(".mobile-menu")
	
	if ( window.innerWidth <= 576 ) {
		mobileToggle.addEventListener("click", ()=> {
			mobileMenu.classList.add("open")
			document.body.classList.add("no-scroll")
		})
		mobileClose.addEventListener("click", (e)=> {
			e.preventDefault()
			mobileMenu.classList.remove("open")
			document.body.classList.remove("no-scroll")
		})
		$(".mobile-menu ul:nth-child(2) > li.has-child > a").on("click", function(e){
			if ( !($(this).parent("li").hasClass("open")) ) {
				e.preventDefault()
				$(this).closest("ul").find(".open").removeClass("open")
				$(this).parent("li").addClass("open")
			}
		})
	}
	
	//	open/close popup
	const buttons = document.querySelectorAll(".btn")
	const btnOrder = document.querySelector(".btn-order")
	const overlay = document.querySelector(".overlay")
	const popupForm = document.querySelector(".popup-form")
	const formClose = document.querySelector(".form-close")
	const successPopup = document.querySelector(".popup-success")
	const errorPopup = document.querySelector(".popup-error")
	const closeList = []
	closeList.push(overlay, formClose)
	function closeSuccessForm( popupName ) {
		overlay.classList.remove("open")
		successPopup.classList.remove("open")
	}
	function closeErrorForm( popupName ) {
		overlay.classList.remove("open")
		errorPopup.classList.remove("open")
	}
	
	buttons.forEach((element) => {
		element.addEventListener("click", ()=> {
			overlay.classList.add("open")
			popupForm.classList.add("open")
		})
	})
	
	closeList.forEach((element) => {
		element.addEventListener("click", ()=> {
			overlay.classList.remove("open")
			popupForm.classList.remove("open")
		})
	})
	
	//	primary-slider
	const primary = document.querySelector(".primary")
	if ( primary ) {
		const primarySlider = new Swiper('.primary-slider', {
			// Optional parameters
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '"><span class="pagination-circle"></span></span>';
				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
	
	//	footer menu tablet/mobile
	$("footer .footer-menu .footer-menu__single.single-list p.list-title").on("click", function(e){
		if ( !($(this).parent("div").hasClass("open")) ) {
			e.preventDefault()
			$("footer .footer-menu .footer-menu__single.single-list").removeClass("open")
			$(this).parent("div").addClass("open")
		}	else {
			$(this).parent("div").removeClass("open")
		}
	})
	
	//	mask phone
	
	$(".form-phone").mask("+7(999) 999-9999");
	
	const formPhone = document.querySelector(".form-phone")
	
	formPhone.addEventListener('mouseover', function () {
		formPhone.classList.remove("error")
	})
	
	formPhone.addEventListener('mouseout', function () {
		let formPhoneLength = formPhone.value.replace(/[^0-9]/g, "").length
		console.log(formPhoneLength)
		if( formPhoneLength < 11 ) {
			formPhone.classList.add("error")
		}
	})

	//  send form contact
	$("form").submit(function(e){
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize(),
			success: function() {
				popupForm.classList.remove("open")
				successPopup.classList.add("open")
				setTimeout(closeSuccessForm, 3000)
			},
			error: function() {
				popupForm.classList.remove("open")
				errorPopup.classList.add("open")
				setTimeout(closeErrorForm, 3000)
			}
		});
	});
})