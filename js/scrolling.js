$(document).ready(function () {
	if($(window).width() > 590) {

		var scroll_length = 525;
		var arrow_fade_speed = 300;

		var swap_arrow_left = function() {
			$("#arrow").animate({opacity: 0}, arrow_fade_speed, function() {
				$("#arrow").css({"right": "auto", "left": "10px", "border-left": "none", "border-right": "15px solid black"});
				$("#arrow").animate({opacity: 1}, arrow_fade_speed, function() {
					$("#arrow").off();
					$("#arrow").click(left_handler);
				});
			});
		}

		var swap_arrow_right = function() {
			$("#arrow").animate({opacity: 0}, arrow_fade_speed, function() {
				$("#arrow").css({"left": "auto", "right": "10px", "border-right": "none", "border-left": "15px solid black"});
				$("#arrow").animate({opacity: 1}, arrow_fade_speed, function() {
					$("#arrow").off();
					$("#arrow").click(right_handler);
					clicked = false;
				});
			});
		}

		var right_handler = function() {
			clicked = true;
			$("#content").animate({
		      scrollLeft: scroll_length
		  }, 1600, "easeOutCubic", function() {
			});

		}

		var left_handler = function() {
			clicked = true;
			$("#content").animate({
		      scrollLeft: 0
		  }, 1600, "easeOutCubic", function() {
			});
		}

		$("#content").scroll(function() {
			if($("#content").scrollLeft() == $("#content").prop("scrollWidth") - 850) {
				swap_arrow_left();
			} else if($("#content").scrollLeft() == 0) {
				swap_arrow_right();
			}
		});

		$("#arrow").click(function() {
			right_handler();
		});
	}
});
