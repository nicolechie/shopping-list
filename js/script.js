$(document)
	.ready(function() {
	})
  // On enter add the new list item with checkbox
	.keydown(function(e) {
		if (e.which == 13) {
			$('ul').append('<li>'+'<span class="checkbox">' +
      '<input type="checkbox"></span>' + ' ' + $(".textbox").val() +'<button class = "delete">x</button>'+'</li>');
      		$(".textbox").val(''); 
		};
	});
  // On click add the new list item with checkbox
  $('.addItem').click(function() {
    	$('ul').append('<li>'+'<span class="checkbox">' +
        '<input type="checkbox"></span>' + ' ' + $(".textbox").val() +'<button class = "delete">x</button>'+'</li>');
        		$(".textbox").val(''); 
  });
  // Hide and show dropdown text area
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
  // Check or delete list items
  $('ul').on('click','button.delete', function(){
        $(this).parent().hide(); 
  });
  $('ul').on('click','.checkbox', function(){
        $(this).parent().toggleClass('check');
  });