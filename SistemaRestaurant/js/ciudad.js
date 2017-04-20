 //lista 1
 $.post(baseurl+"cciudad/getCiudades",
	{sitReg:1},
	function(data){
		// alert(data);
		var obj = JSON.parse(data);
		var output = '';
		var estilo = 'width: 100px;height: 100px;-moz-border-radius: 50%;-webkit-border-radius: 50%;border-radius: 50%;background: #5cb85c;';
		$.each(obj, function(i,item){
			output += 
			'<li>' +
	        '  <div style="'+estilo+'" id="'+item.idCiudad+'" class="miMesa">'+item.idCiudad+'</div>' +
	        '  <a class="users-list-name nomMesa" href="#">'+item.ciudad+'</a>' +
	        '  <span class="users-list-date">Today</span>' +
	        '</li>';
		});
		$('#listCiudades').append(output);

		$('#listCiudades .miMesa').click(function(index){
			var i = $('.miMesa').index(this);

			alert($(this).attr('id') + " " + $('.nomMesa:eq('+i+')').html());
		});

	});

$('#btnGrabar').click(function(){
	var i = 0;
	$('.miMesa').each(function(i, item){
		alert($('.miMesa:eq('+i+')').attr('id'));
		i++;
	});
	
})

//lista tabla
$.post(baseurl+"cciudad/getCiudades",
	{sitReg:1},
	function(data){
		// alert(data);
		var obj = JSON.parse(data);
		var output = '';
		$.each(obj, function(i,item){
			output += 
			'<tr>' +
			'	<td>'+item.idCiudad+'</td>' +
			'	<td>'+item.ciudad+'</td>' +
			'	<td>'+item.cantHabit+'</td>' +
	        '  	<td><a class="btn btn-default"><i class="fa fa-eye"></i> &nbsp;Ver</a></td>' +
	        '</tr>';
		});
		$('#tblListCiudades tbody').append(output);

	});

$('#txtBuscarCiudad').keyup(function(){
	

	var text = $('#txtBuscarCiudad').val();
	var lt = $('#txtBuscarCiudad').val().length;
	// alert(lt);
	if (lt >= 5) {
		$('#tblListCiudades tbody').html('');
		$.post(baseurl+"cciudad/getCiudadByNombre",
		{texto : text},
		function(data){
			// alert(data);
			var obj = JSON.parse(data);
			var output = '';
			$.each(obj, function(i,item){
				output += 
				'<tr>' +
				'	<td>'+item.idCiudad+'</td>' +
				'	<td>'+item.ciudad+'</td>' +
				'	<td>'+item.cantHabit+'</td>' +
		        '  	<td><a class="btn btn-default"><i class="fa fa-eye"></i> &nbsp;Ver</a></td>' +
		        '</tr>';
			});
			$('#tblListCiudades tbody').append(output);

		});
	}else if(lt == 0){
		$('#tblListCiudades tbody').html('');
	}
	
});
