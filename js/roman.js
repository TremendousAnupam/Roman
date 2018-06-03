$(document).ready(function () {
	$('a[href^="#home"]').addClass('active');

	//smoothscroll
	$('.menuitem').on('click', function (e) {
		var athis = this;
		var target = this.hash,
			menu = target;
		$target = $(target);
		if ($target.offset()) {
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 10
			}, 900, 'swing', function () {
				window.location.hash = target;
				$('.menuitem').removeClass('active2');
				$(athis).addClass('active2');

			});
		}
	});


	$(window).scroll(function (event) {
		var scrollPos = $(document).scrollTop();
		if (scrollPos === 0) {
			$('a[href^="#home"]').addClass('active2');
			return;
		}

		$('.menuitem').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position() && refElement.position().top - 70 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.menuitem').removeClass("active2");
				currLink.addClass("active2");
			} else {
				currLink.removeClass("active2");
			}
		});

	});
});

$(document).ready(function() {
	$(".carousel").slick({
	arrows:true,
	  centerMode: true,
	  centerPadding: "60px",
	  slidesToShow: 3,
	  responsive: [
		{
		  breakpoint: 868,
		  settings: {
			arrows: true,
			centerMode: true,
			centerPadding: "40px",
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 580,
		  settings: {
			arrows: true,
			centerMode: true,
			centerPadding: "40px",
			slidesToShow: 1
		  }
		}
	  ]
	});
  });
  