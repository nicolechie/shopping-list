$(document)
	.ready(function() {
	})
	.keydown(function(e) {
		if (e.which == 13) {
			$('ul').append('<li>'+'<span class="checkbox">' +
      '<input type="checkbox"></span>' + $(".textbox").val() +'<button class = "delete">x</button>'+'</li>');
      		$(".textbox").val(''); 
		};
	});
$('ul').on('click','button.delete', function(){
      $(this).parent().hide();
});
$('ul').on('click','.checkbox', function(){
      $(this).parent().toggleClass('check');
});