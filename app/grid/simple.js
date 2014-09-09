//Fill the grid with the template.
var template = require('../templates/grid');
$('#gridContainer').html(template());
//Register the plugin.
$(".gridster ul").gridster({
  widget_margins: [10, 10],
  widget_base_dimensions: [140, 140],
  draggable:{
    handle: 'li[data-drag]',
    start: function(e, ui, $widget){
      if(e.target.getAttribute('data-change')){
        //e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
  }
});