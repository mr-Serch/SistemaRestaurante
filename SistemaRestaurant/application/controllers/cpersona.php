<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* 
*/
class Cpersona extends CI_Controller{
	function __construct(){
		parent::__construct();
		$this->load->model('mpersona');
		$this->load->model('musuario');
		$this->load->library('encrypt');
		//validar si el usuario inicio session si no lo redirecciona
		//if(!$this->session->userdata('s_idUsuario')){
			//redirect('clogin');
		//}
	}

	public function index(){
		$this->load->view('layout/header');
		$this->load->view('layout/menu');
		$this->load->view('persona/vpersona');
		$this->load->view('layout/footer');
	}

	public function guardar(){
		//persona
		$param['ocupacion'] = $this->input->post('txtOcupa');
		$param['nombre'] = $this->input->post('txtNombre');
		$param['appaterno'] = $this->input->post('txtApPaterno');
		$param['apmaterno'] = $this->input->post('txtApMaterno');
		$param['email'] = $this->input->post('txtEmail');
		$param['fecnac'] = $this->input->post('datFecNac');
		//usuario
		$paramUsu['nomUsuario'] = $this->input->post('txtUsuario');				
		$paramUsu['clave'] = $this->encrypt->sha1($this->input->post('txtClave'));
		
		$lastId = $this->mpersona->guardar($param);

		if ($lastId > 0) {
			$paramUsu['idPersona'] = $lastId;
			$this->musuario->guardarUsuario($paramUsu);
		}
	}
	
	public function actualizarDatos(){
		$param['nombre'] = $this->input->post('txtNombre');
		$param['appaterno'] = $this->input->post('txtApPaterno');
		$param['apmaterno'] = $this->input->post('txtApMaterno');
		$param['email'] = $this->input->post('txtEmail');
		
		$this->mpersona->actualizarDatos($param);
		
		$this->load->view('persona/vpersona');
	}
	
	
	public function eliminarPersona(){
		$idP = $this->input->post('txtIdPersona');
		$this->musuario->eliminarUsuario($idP); 
		$this->mpersona->eliminarPersona($idP); 
	}
}