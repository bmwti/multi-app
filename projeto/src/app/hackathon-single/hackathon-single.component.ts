import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-hackathon-single',
  templateUrl: './hackathon-single.component.html',
  styleUrls: ['./hackathon-single.component.css']
})
export class HackathonSingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var abrirModal = function() {
      $('.modal, .nosso-overlay').fadeIn();
    }

    var fecharModal = function() {
      $('.modal, .nosso-overlay').fadeOut();
      $('.modal-content').removeClass('show');
      $('#confirmar-participar').addClass('show');
    }

    var animacaoConfirmar = function() {
      $('.modal-content').removeClass('show');
      $('#participacao-concluida').addClass('show');
    }

    $('.openModal').click(abrirModal);
    $('.nosso-overlay').click(fecharModal);
    $('#btn-cancelar').click(fecharModal);
    $('#btn-confirmar').click(animacaoConfirmar);
    $('.btn-fechar').click(fecharModal);
  }

}
