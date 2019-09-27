$(document).ready(function(){
	$('form').on('click', 'button', function(event){
		event.preventDefault();
		$('ul').append('<li> <span class="shopping-item">'+ $('input').val() + '</span><div class="shopping-item-controls">	<button class="shopping-item-toggle">  <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span>  </button> </div> </li> ');
	})
	$('ul').on('click','.shopping-item-delete', function(event){
		$(this).closest('li').remove();
	})
	$('ul').on('click','.shopping-item-toggle', function(event){
		$(this).parent().prev('.shopping-item').toggleClass('shopping-item__checked');
	});
});