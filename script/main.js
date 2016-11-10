 var maxZ = 0;

function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
	
  }
  

interact('.resize-drag')
  .draggable({
    onmove: window.dragMoveListener
  })
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true }
  })
  .on('tap', function (event) {
	  
        event.target.style.zIndex = maxZ + 1; 
		maxZ ++;

})
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';


    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });
  
  $(document).ready(function()
  {
	  $(".my-documents-window").hide();
	  $(".my-computer-window").hide();
	  $(".start-menu").hide();
	  
	 $(".close").click(function(){
		 $(this).parent().parent().hide();
		 });
	
	
	$(".my-documents-icon").click(function()
	{
		$(".my-documents-window").show();
	});
	
	$(".my-computer-icon").click(function()
	{
		$(".my-computer-window").show();
	});
	
	$(".start-button").click(function(){
		$(".start-menu").toggle();
	});
	
	$(".desktop").click(function(){
		$(".start-menu").hide();
	});
  });