//Efeito de digitação
$(function () {
  var app = document.getElementById('text-banner');

  var typewriter = new Typewriter(app, {
    loop: true
  });

  typewriter.typeString('Ui/Ux Designer & Desenvolvedor Web')
    .pauseFor(2500)
    .deleteAll()
    .start();
});

//Scroll Navbar
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {

    var target = $(this.hash);
    menuHeight = $('nav').innerHeight();

    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top - menuHeight }, 4000);
      return false;
    }

  });
});

//Carregar portfólio
$(document).ready(function () {
  $("#filtroPort a").click(function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    console.log(href)
    $('#loadProject').load(href + "#loadProject");
  });
});

/* Função inativa
$("#send").click(function () {
  var form = $('#form-contact').serializeArray();
  var validate = true;

  for (let i = 0; i < form.length; i++) {
    let nameField = `#${form[i].name}Form`
    if (form[i].value === '') {
      $(nameField).addClass('border border-danger')
      validate = false
    } else {
      $(nameField).removeClass('border border-danger')
    }
  }

  if (validate === true) {

    $('#form-contact').css('display', 'none')
    $('#loading').css('display', 'block')

    $.ajax({
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      url: "/enviar-contato",
      data: {
        nome: $('#nomeForm').val(),
        email: $('#emailForm').val(),
        fone: $('#foneForm').val(),
        assunto: $('#assuntoForm').val(),
        msg: $('#msgForm').val()
      },
      dataType: "json",
      type: "POST",
      success: function (result) {
        $('#form-contact').css('display', 'block')
        $('#form-contact .field').val("");
        $('#loading').css('display', 'none')
        $('#msgContact').html(result.msg)
      }
    });
  }
});*/