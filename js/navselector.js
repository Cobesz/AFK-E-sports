console.log("Started: navselector.js");

$('.stickyheader').find('a').click(function(){
	$('span').removeClass('selected');
	$('span').addClass('unselected');
	$(this).find('span').removeClass('unselected');
	$(this).find('span').addClass('selected');
	});

$('#subscribe').find('img').click(function(){
	$('.stickyheader').find('span').removeClass('selected');
	$('.stickyheader').find('span').removeClass('unselected');
	$('.stickyheader').find('.subscribe').addClass('selected');
});