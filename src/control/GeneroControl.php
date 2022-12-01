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
require_once(__ROOT__ . "/servicio/GeneroServicio.php");

class GeneroControl {

    public function getCatalogoGenero() {
        $servicio = new GeneroServicio();
        return $servicio->get_genero();
    }

    public function printCatalogo($catalogo) {
        echo '<table cellpadding="0" cellspacing="0" class="center">';
        echo '<tr><th>Opción</th><th>Nombre</th><th>Descripción</th></tr>',"\n";
        foreach ($catalogo as $value) {
            echo '<tr id="'.$value->getId().'">';
            echo '<td>', '<input type="radio" id="genero" name="genero" value="'.$value->getId().'">', '</td>';
            echo '<td>', $value->getNombre(), '</td>';
            echo '<td>', $value->getDescripcion(), '</td>';
            echo '</tr>',"\n";
        }
        echo '</table><br />';
    }

}
