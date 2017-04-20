$.post(baseurl+"cnotas/getNotas",
	function(data){
		//alert(data);
		var obj = JSON.parse(data);
		var estilo = "background: transparent;border:0px;outline: none;text-align:center;width: 100%";
		$.each(obj, function(i, item){
			$('#tblNotas tbody').append(
				'<tr class="filaNotas">'+
					'<td>1</td>'+
					'<td><div class="alum" id="'+item.idPersona+'"></div>'+item.alumno+'</td>'+
					'<td><input type="text" value="'+item.a+'" style="'+estilo+'" maxlength="2" class="nota1"></td>'+
					'<td><input type="text" value="'+item.b+'" style="'+estilo+'" maxlength="2" class="nota2"></td>'+
					'<td><input type="text" value="'+item.c+'" style="'+estilo+'" maxlength="2" class="nota3"></td>'+
					'<td><input type="text" value="'+item.d+'" style="'+estilo+'" maxlength="2" class="nota4"></td>'+
					'<td><input type="text" value="'+item.notafinal+'" style="'+estilo+'" maxlength="2" class="notafinal"></td>'+
				'</tr>'
				);
		});

		$('input[type=text]').focus(function(){
			$(this).select();
		});

		$('input[type=text]').focusout(function(){
			if ($(this).val()>20) {
				alert('Valor no valido');
				$(this).focus();
				$(this).select();
			}
		});

		$('#tblNotas .nota4').keyup(function(){
			var i = $('.nota4').index(this);

			var n1 = $('.nota1:eq('+i+')').val();
			var n2 = $('.nota2:eq('+i+')').val();
			var n3 = $('.nota3:eq('+i+')').val();

			var promedio = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat($(this).val()))/4;
			
			$('.notafinal:eq('+i+')').val(promedio);
		});
	});

$('#btnGrabarNotas').click(function(){
	var i = 0;
	$('#tblNotas .filaNotas').each(function(){
		var idPer = $('.alum:eq('+i+')').attr('id');
		var n1 = $('.nota1:eq('+i+')').val();
		var n2 = $('.nota2:eq('+i+')').val();
		var n3 = $('.nota3:eq('+i+')').val();
		var n4 = $('.nota4:eq('+i+')').val();
		var nf = $('.notafinal:eq('+i+')').val();

		$.post(baseurl+"cnotas/saveNotas",
			{
				idPer:idPer,
				n1:n1,
				n2:n2,
				n3:n3,
				n4:n4,
				nf:nf
			},
			function(data){
				//alert(data);
			});
		i++;

	});
	alert('Se guardo satisfactoriamente');
});