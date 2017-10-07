import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-shopping-single',
  templateUrl: './shopping-single.component.html',
  styleUrls: ['./shopping-single.component.css']
})
export class ShoppingSingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var abrirModal = function() {
      $('.modal, .nosso-overlay').fadeIn();
    }

    var fecharModal = function() {
      $('.modal, .nosso-overlay').fadeOut();
      $('.modal-content').removeClass('show');
      $('#efetuar-compra').addClass('show');
    }

    var abrirConfirmar = function() {
      $('#efetuar-compra').removeClass('show');
      $('#confirmar-compra').addClass('show');
    }

    var fecharConfirmar = function() {
      $('.modal-content').removeClass('show');
      $('#efetuar-compra').addClass('show');
    }

    var animacaoConfirmar = function() {
      $('.modal-content').removeClass('show');
      $('#compra-efetuada').addClass('show');
    }

    $('.openModal').click(abrirModal);
    $('.nosso-overlay').click(fecharModal);
    $('.info-course .coins a').click(abrirConfirmar);
    $('#btn-cancelar').click(fecharConfirmar);
    $('#btn-confirmar').click(animacaoConfirmar);
    $('#btn-fechar').click(fecharModal);
  }

}
