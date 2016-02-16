$(document)
	.ready(function() {
	})
	.keydown(function(e) {
		if (e.which == 13) {
			$('ul').append('<li>'+'<span class="checkbox">' +
      '<input type="checkbox"></span>' + ' ' + $(".textbox").val() +'<button class = "delete">x</button>'+'</li>');
      		$(".textbox").val(''); 
		};
	});
$('.addItem').click(function() {
  	$('ul').append('<li>'+'<span class="checkbox">' +
      '<input type="checkbox"></span>' + ' ' + $(".textbox").val() +'<button class = "delete">x</button>'+'</li>');
      		$(".textbox").val(''); 
});
	$('button.hideDropDown').click(function() {    
		$(this).hide();
      	$('button.showDropDown').show();
      	$('.dropDown').hide();
      	$('.masthead').css('height', '10rem');
      	$('.list').css('top', '10.5rem');
  	});
  	$('button.showDropDown').click(function() {
      	$(this).hide();
      	$('button.hideDropDown').show();            
      	$('.dropDown').show();
      	$('.masthead').css('height', '14rem');
      	$('.list').css('top', '14.5rem');
    });
$('ul').on('click','button.delete', function(){
      $(this).parent().hide(); 
});
$('ul').on('click','.checkbox', function(){
      $(this).parent().toggleClass('check');
});