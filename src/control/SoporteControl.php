<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of LoginCont
 *
 * @author Yeoshua
 */
require_once(__ROOT__ . "/servicio/SoporteServicio.php");

class SoporteControl {

    private $error;

    public function getError() {
        return $this->error;
    }

    public function setError($error): void {
        $this->error = $error;
    }

    public function getCatalogoSoporte() {
        $servicio = new SoporteServicio();
        return $servicio->get_soporte();
    }
    
    public function printCheck($catalogo) {
        echo '<label>Escoge el soporte de tu pelicula:</label>';
        echo '<select id="idsoporte" name="idsoporte">';
        foreach ($catalogo as $value){
            echo ' <option value="',$value->getId(),'">',$value->getNombre(),'</option>';
        }
        echo '</select>';         
    }

}
