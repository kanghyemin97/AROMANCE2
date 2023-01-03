
	$(function() {
		$('ul.tab li').click(function() {
			var activeTab = $(this).attr('data-tab');
			$('ul.tab li').removeClass('current');
			$('.tabcontent').removeClass('current');
			$(this).addClass('current');
			$('#' + activeTab).addClass('current');
	
		})
		
	});

$(document).on('ready', function() {

      $(".regular").slick({
		autoplay:true,//자동 갤러리 구문(삭제시 수동으로 변함.)
		autoplaySpeed:2000,//자동 갤러리가 넘어가는 시간
        dots: true,
        infinite: true,
        slidesToShow: 3,//보여지는 갤러리 수
        slidesToScroll: 1,//넘어가는 갤러리 수
		speed: 2000,//다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
		pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */ 
		responsive: [
			{ /* 반응형웹*/
				breakpoint: 1024, /* 기준화면사이즈 */
				settings: {slidesToShow:2 } /* 사이즈에 적용될 설정 */
			},
				{ /* 반응형웹*/
				breakpoint: 459, /* 기준화면사이즈 */
				settings: {slidesToShow:1 } /* 사이즈에 적용될 설정 */
				
			},
		]
      });
    });
	
	(function(){

	
		$.fn.smint = function( options ) {
	
			// 사용자 div에 클래스 추가
			$(this).addClass('smint')
	
			var settings = $.extend({
				'scrollSpeed '  : 500
				}, options);
	
	
			return $('.smint a').each( function() {
	
				
				if ( settings.scrollSpeed ) {
	
					var scrollSpeed = settings.scrollSpeed
	
				}
			   $(this).on('click', function(e){
	
	
					// 사용자 div의 높이를 가져옵니다. 이것은 스크롤을 해제하는 데 사용되므로 emenu가 처음 스크롤 한 div의 내용과 겹치지 않습니다.
					var selectorHeight = $('.smint').height();   
	
					// 클릭하면 페이지 점프를 만드는 빈 hrefs 중지
					e.preventDefault();
	
					// 방금 클릭 한 버튼의 ID를 가져옵니다.
					 var id = $(this).attr('id');
					
					// 버튼 ID에서 탐색 메뉴의 높이를 뺀 것과 일치하는 div 클래스의 상단에서 거리를 가져옵니다. 이것은 탐색이 처음에 내용과 겹치지 않음을 의미합니다.
					var goTo =  $('div.'+ id).offset().top -selectorHeight;
					
					// 페이지를 원하는 위치로 스크롤하십시오!
					$("html, body").animate({ scrollTop: goTo }, scrollSpeed);
				});	          
			});
		}
	})();
	
	
	
	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if (height > 100                                                          ) {
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut();
		}
	});

	

	$(function(){
		// 스크롤 시 header fade-in
		$(document).on('scroll', function(){
			if($(window).scrollTop() > 100){
				$("#header").removeClass("deactive");
				$("#header").addClass("active");
			}else{
				$("#header").removeClass("active");
				$("#header").addClass("deactive");
			}
		})
	
	});
	

