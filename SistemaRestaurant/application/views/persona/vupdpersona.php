<div class="row">
	<div class="col-md-11">
          <!-- Horizontal Form -->
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title"><?php echo "Usuario: ".$this->session->userdata('s_usuario');?></h3>
            </div>
			
			<div class="box-header with-border ">
              <h3 class="box-title"><ABBR>PANEL DE CONTROL DEL GERENTE</ABBR></h3>
            </div>
			
            <!-- /.box-header -->
            <!-- form start -->
			<form action="<?php echo base_url();?>cpersona/actualizarDatos" method="POST" class="form-horizontal">
              <div class="box-body">
				
				<div class="form-group">
					<div class="col-md-10 pull-right">
						<button type="submit" class="btn btn-primary">REPORTE DE MATERIAS PRIMAS</button>
					</div>
				</div>

        <div class="form-group">
          <div class="col-md-10 pull-right">
            <button type="submit" class="btn btn-primary">   CONTROL DE EMPLEADOS    </button>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-10 pull-right">
            <button type="submit" class="btn btn-primary">   CONTROL DE REPORTES     </button>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-10 pull-right">
            <button type="submit" class="btn btn-primary">   CONTROL DE ALMACEN     </button>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-10 pull-right">
            <button type="submit" class="btn btn-primary">VALIDAR MÉNU</button>
          </div>
        </div>
			  
            </form>

      <div class="box-header with-border ">
              <h3 class="box-title">Registro de Personal</h3>
            </div>


      <div class="col-md-10 pull-right">
        <a href="<?php echo base_url();?>cpersona" class="btn btn-danger">Registrar Personal</a>
        
      </div>
				
          <!-- /.box -->
        </div>
		</div>
	</div>
</div>