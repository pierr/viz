var drag = d3.behavior.drag()
			.on("drag", function(d,i){
				d.x +=d3.event.dx;
			});