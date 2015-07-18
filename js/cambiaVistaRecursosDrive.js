$(document).ready(function(){
	$('#boton-vista-drive-file-wp1').click(function() {
		var botonFile = $('#boton-vista-drive-file-wp1');
		var estado = $(botonFile).attr('class');
		
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonFile).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp1');
			var enlace = $(miframe).attr('src');
			var botonList = $('#boton-vista-drive-list-wp1');
			botonList.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#list", "#grid");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-list-wp1').click(function() {
		var botonList = $('#boton-vista-drive-list-wp1');
		var estado = $(botonList).attr('class');
		console.log(estado);
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonList).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp1');
			var enlace = $(miframe).attr('src');
			var botonFile = $('#boton-vista-drive-file-wp1');
			botonFile.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#grid", "#list");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-file-wp2').click(function() {
		var botonFile = $('#boton-vista-drive-file-wp2');
		var estado = $(botonFile).attr('class');
		
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonFile).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp2');
			var enlace = $(miframe).attr('src');
			var botonList = $('#boton-vista-drive-list-wp2');
			botonList.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#list", "#grid");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-list-wp2').click(function() {
		var botonList = $('#boton-vista-drive-list-wp2');
		var estado = $(botonList).attr('class');
		console.log(estado);
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonList).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp2');
			var enlace = $(miframe).attr('src');
			var botonFile = $('#boton-vista-drive-file-wp2');
			botonFile.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#grid", "#list");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-file-wp3').click(function() {
		var botonFile = $('#boton-vista-drive-file-wp3');
		var estado = $(botonFile).attr('class');
		
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonFile).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp3');
			var enlace = $(miframe).attr('src');
			var botonList = $('#boton-vista-drive-list-wp3');
			botonList.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#list", "#grid");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-list-wp3').click(function() {
		var botonList = $('#boton-vista-drive-list-wp3');
		var estado = $(botonList).attr('class');
		console.log(estado);
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonList).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp3');
			var enlace = $(miframe).attr('src');
			var botonFile = $('#boton-vista-drive-file-wp3');
			botonFile.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#grid", "#list");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-file-wp4').click(function() {
		var botonFile = $('#boton-vista-drive-file-wp4');
		var estado = $(botonFile).attr('class');
		
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonFile).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp4');
			var enlace = $(miframe).attr('src');
			var botonList = $('#boton-vista-drive-list-wp4');
			botonList.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#list", "#grid");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-list-wp4').click(function() {
		var botonList = $('#boton-vista-drive-list-wp4');
		var estado = $(botonList).attr('class');
		console.log(estado);
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonList).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp4');
			var enlace = $(miframe).attr('src');
			var botonFile = $('#boton-vista-drive-file-wp4');
			botonFile.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#grid", "#list");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-file-wp5').click(function() {
		var botonFile = $('#boton-vista-drive-file-wp5');
		var estado = $(botonFile).attr('class');
		
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonFile).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp5');
			var enlace = $(miframe).attr('src');
			var botonList = $('#boton-vista-drive-list-wp5');
			botonList.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#list", "#grid");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
	$('#boton-vista-drive-list-wp5').click(function() {
		var botonList = $('#boton-vista-drive-list-wp5');
		var estado = $(botonList).attr('class');
		console.log(estado);
		//console.log(actual);
		if(!(estado == "btn btn-default"))
		{
			$(botonList).toggleClass("btn-default");
			var miframe = $('#iframe-recursos-wp5');
			var enlace = $(miframe).attr('src');
			var botonFile = $('#boton-vista-drive-file-wp5');
			botonFile.toggleClass("btn-default");
			//console.log(enlace);
			var nuevoEnlace = enlace.replace("#grid", "#list");
			$(miframe).attr('src', nuevoEnlace);
		}
		
	});
});