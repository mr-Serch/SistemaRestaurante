$.post(baseurl+"cciudad/getCiudades",
  {
    "sitReg": 1
  },
  function (data) {
    var c = JSON.parse(data);
    $.each(c,function(i,item){
      $('#cboCiudad').append('<option value="'+item.idCiudad+'">'+item.ciudad+'</option>');
    }); 
  });

$('#cboCiudad').change(function(){
  $('#cboCiudad option:selected').each(function(){
    var id = $('#cboCiudad').val();
    alert(id);
  });
});



//aqui se llena la tabla con datatables
$('#tblPersonas').DataTable({
	"lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
	'paging': true,
	'info': true,
	'filter': true,
	'stateSave': true,

      'ajax': {
        "url":baseurl+"cpersona/getPersonas/",
        "type":"POST",
        // "data":{
        // 	"p1":p1,
        // 	"p2":p2
        // }
        
        // dataSrc: ''
        "dataSrc": function(data){
          	// alert(data[5].nombre);
          	var suma = 0;
          	for (var i = 0; i <= data.length - 1; i++) {
          		suma += parseFloat(data[i].idPersona);
          	}

          	//alert (suma);
          	$('#spSuma').html(suma);

          return data;          
        }
      },
      'columns': [
        {data: 'rownum','sClass':'dt-body-center'},
        {data: 'nombre'},
        {data: 'app'},
        {data: 'apmaterno'},
        {data: 'dni'},
        {data: 'ciudad'},
        {data: 'intEstado'},
        {"orderable": true,
          render:function(data, type, row){
          	if (row.intEstado == 0) {
          		return '<span class="pull-right">' +
                      '<div class="dropdown">' +
                      '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                      '    Acciones' +
                      '  <span class="caret"></span>' +
                      '  </button>' +
                      '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                      '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditPersona" onClick="selPersona(\''+row.idPersona+'\',\''+row.nombre+'\',\''+row.app+'\',\''+row.apmaterno+'\',\''+row.email+'\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                      '    <li><a href="'+baseurl+'cafiliado/descargar/'+row.idPersona+'" title="Imprimir formato"><i class="glyphicon glyphicon-print" style="color:#006699"></i> Imprimir</a></li>' +
                      '    <li><a href="#" title="Aprobar afiliado" onClick="updEstadoAfiliado('+row.idPersona+','+1+')"><i style="color:green;" class="glyphicon glyphicon-ok"></i> Aprobar</a></li>' +
                      '    <li><a href="#" title="Desaprobar afiliado" onClick="updEstadoAfiliado('+row.idPersona+','+2+')"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Desaprobar</a></li>' +
                      '    </ul>' +
                      '</div>' +
                      '</span>';

          	}else if (row.intEstado == 1) {
          		return '<span class="pull-right">' +
                      '<div class="dropdown">' +
                      '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                      '    Acciones' +
                      '  <span class="caret"></span>' +
                      '  </button>' +
                      '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                      '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditPersona" onClick="selPersona(\''+row.idPersona+'\',\''+row.nombre+'\',\''+row.app+'\',\''+row.apmaterno+'\',\''+row.email+'\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                      '    <li><a href="'+baseurl+'cafiliado/descargar/'+row.idPersona+'" title="Imprimir formato"><i class="glyphicon glyphicon-print" style="color:#006699"></i> Imprimir</a></li>' +
                      '    <li><a href="#" title="Desaprobar afiliado" onClick="updEstadoAfiliado('+row.idPersona+','+2+')"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Desaprobar</a></li>' +
                      '    </ul>' +
                      '</div>' +
                      '</span>';
          	}else if (row.intEstado == 2) {
          		return '<span class="pull-right">' +
                      '<div class="dropdown">' +
                      '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                      '    Acciones' +
                      '  <span class="caret"></span>' +
                      '  </button>' +
                      '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                      '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditPersona" onClick="selPersona(\''+row.idPersona+'\',\''+row.nombre+'\',\''+row.app+'\',\''+row.apmaterno+'\',\''+row.email+'\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                      '    <li><a href="'+baseurl+'cafiliado/descargar/'+row.idPersona+'" title="Imprimir formato"><i class="glyphicon glyphicon-print" style="color:#006699"></i> Imprimir</a></li>' +
                      '    <li><a href="#" title="Aprobar afiliado" onClick="updEstadoAfiliado('+row.idPersona+','+1+')"><i style="color:green;" class="glyphicon glyphicon-ok"></i> Aprobar</a></li>' +
                      '    </ul>' +
                      '</div>' +
                      '</span>';
          	}
            	
            
          }
        }
      ],

      "columnDefs": [
        {
          "targets": [6], 
          "data": "intEstado", 
          "render": function(data, type, row) {
            
            if (data == 0) {
              return "<span class='label label-warning'>Pendiente</span>";
            }else if (data == 1) {
              return "<span class='label label-success'>Aprobado</span>";
            }else if (data == 2) {
              return "<span class='label label-danger'>Desaprobado</span>";
            }
              
          }
        },
        {
          "targets": [1], 
          "data": "nombre", 
          "render": function(data, type, row) {
            return "<span style='color:#006699;'><i class='fa fa-user'></i> &nbsp;"+data+" "+row.app+"</span><br>"+
            		"<span style='color:#555;'><i class='fa fa-calendar'></i> &nbsp;"+row.dni+"</span>";              
          }
        },
        {
          "targets": [5], 
          "data": "ciudad", 
          "render": function(data, type, row) {
            return "<span style='color:#1acc2b;'><i class='fa fa-check'></i> &nbsp;"+data+"</span>";              
          }
        }
       ],
      "order": [[ 1, "asc" ]],
	});



//con esta funcion pasamos los paremtros a los text del modal.
selPersona = function(idPersona, nombre, app, apm, email){
	$('#mhdnIdPersona').val(idPersona);
	$('#mtxtNombre').val(nombre);
	$('#mtxtApPaterno').val(app);
	$('#mtxtApMaterno').val(apm);
	$('#mtxtEmail').val(email);
  // $('#mcboOtro value(3)').prop('selected', true);
  $('[name=mcboOtro]').val(7);
  
};

//metodo update del modal
$('#mbtnUpdPerona').click(function(){
	var idP = $('#mhdnIdPersona').val();
	var nom = $('#mtxtNombre').val();
	var app = $('#mtxtApPaterno').val();
	var apm = $('#mtxtApMaterno').val();
	var mail = $('#mtxtEmail').val();
	$.post(baseurl+"cpersona/updPersona",	
	{
		mhdnIdPersona:idP,
		mtxtNombre:nom,
		mtxtApPaterno:app,
		mtxtApMaterno:apm,
		mtxtEmail:mail
	},			
	function(data){
		if (data == 1) {
			alert('Se grabo');
			$('#mbtnCerrarModal').click();

			location.reload();
		}
	});
});

// $("#capa").load('cpersona/prueba');