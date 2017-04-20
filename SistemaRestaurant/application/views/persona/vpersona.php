<div class="row">
	<div class="col-md-11">
          <!-- Horizontal Form -->
          <div class="box box-info">
			<div class="box-header with-border ">
              <h2 class="box-title">Registro de Usuario</h2>
            </div>
			
			<form action="<?php echo base_url(); ?>cpersona/guardar" method="POST" class="form-horizontal">
				<div class="box-body">
			  
				<div class="box-header with-border ">
					<h3 class="box-title">Persona</h3>
				</div>
				<div class="form-group">
                 <label for="inputEmail3" class="col-sm-2 control-label">Ocupacion:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="txtOcupa" id="inputEmail3" maxlength="8"  placeholder="Ingresa Ocupacion">
                  </div>
                </div>
				
				<div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Nombre:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="txtNombre" id="inputEmail3" placeholder="Ingrese su Nombre">
                  </div>
                </div>
				
				<div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Apellido Paterno:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="txtApPaterno" id="inputEmail3" placeholder="Ingrese Appellido Paterno">
                  </div>
                </div>
				
				<div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Apellido Materno:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="txtApMaterno" id="inputEmail3" placeholder="Ingresar Apellido Materno">
                  </div>
                </div>
				
				<div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Email:</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" name="txtEmail" id="inputEmail3" placeholder="Ingrese e-mail">
                  </div>
                </div>
				
				<div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Fecha Nacimiento:</label>
                  <div class="col-sm-10">
                    <input type="date" class="form-control" name="datFecNac" id="inputEmail3" placeholder="Ingrese su Fecha de Nacimiento">
                  </div>
                </div>
				
				<div class="box-header with-border ">
					<h3 class="box-title">Usuario</h3>
				</div>
				
				<div class="form-group has-feedback">
                  <label for="inputEmail3" class="col-sm-2 control-label">Usuario:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="txtUsuario" id="inputEmail3" placeholder="Ingrese su Usuario">
					<span class="glyphicon glyphicon-user form-control-feedback"></span>
                  </div>
                </div>
				
				<div class="form-group has-feedback">
                  <label for="inputEmail3" class="col-sm-2 control-label">Contraseña:</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" name="txtClave" id="inputEmail3" placeholder="Ingrese su Contraseña">
					<span class="glyphicon glyphicon-lock form-control-feedback"></span>
                  </div>
                </div>
				
				<div class="form-group">
					<div class="col-md-10 pull-right">
						<button type="submit" class="btn btn-primary">Guardar</button>
					</div>
				</div>
			  
            </form>
			
			
          <!-- /.box -->
        </div>
		
			<div class="col-md-10 pull-left">
				<a href="<?php echo base_url();?>clogin" class="btn btn-danger">Regresar</a>
			</div>
		</div>
	</div>
</div>


			


	
