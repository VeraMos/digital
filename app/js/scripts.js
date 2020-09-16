$(document).ready(function () {


    // $('.main-slider__list').slick({
    //     prevArrow: '<button class="prev-left"></button>',
    //     nextArrow: '<button class="prev-right"></button>',
    //     dots: true
    // });


   $('.clients-slider').slick({
   		slidesToShow: 3,
  		slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>',
        responsive: [
    	{
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      	}
    	},
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          }
      }
    	]

       });

     // tabs 
  // $(document).ready(function () {
  //   $(".tabs__content-item:not(:first-child)").hide();
  //   $(".tabs__container div.tabs__content-item.active-tab").show();
  //   $('ul.tabs__list > li').click(function () {
  //     if (!($(this).hasClass('active'))) {
  //       var thisLi = $(this);
  //       var numLi = thisLi.index();
  //       thisLi.addClass('active').siblings().removeClass('active');
  //       thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
  //     }
  //   });

});

   