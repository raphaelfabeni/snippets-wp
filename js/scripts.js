jQuery(document).ready(function($) {
	prettyPrint();	

	var countries = [];

	var titulos = document.getElementsByTagName('h2');
	for( var i = 0; i < titulos.length; i++ ) {
		// Armazenando valores em variáveis
		var current = titulos[i],
		curText = $(current).text(),
		curID = curText.replace(/\s/g, '-').toLowerCase(),
		objeto = {},
		proximo = countries.length;

		// Adicionando ID em cada título
		$(current).attr('id', curID);

		objeto.value = curText;
		objeto.data = curID;

		countries[proximo] = objeto;
	}

	$('#autocomplete').autocomplete({
		lookup: countries,
		onSelect: function (suggestion) {
			$('html, body').animate({
				scrollTop: ( $('#' + suggestion.data).offset().top ) - 60
			}, 1600);		
			$('#autocomplete').val('');
		}
	});

	// Evento scroll
	$(window).on('scroll', function(event){
      // Armazenando variáveis: Janela, distância do topo e imagem de abertura
      var janela = $(window),
      topo = janela.scrollTop(),
      header = $('.header');
         // Verifica distância do scroll para iniciar animação
         if( topo > 30 ) {         	
         	if( ! header.hasClass('fixed') ) {
         		header.addClass('fixed');
         	}
         } else {
         	if( header.hasClass('fixed') ) {
         		header.removeClass('fixed');
         	}
         }
   });
});
