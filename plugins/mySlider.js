(function( $ ){

  var methods = {
    init : function( options ) { 
      $(this).addClass('my_slider');
      console.log('start '+$(this).width()+' end');
    },
    show : function( ) {
      // ПОДХОД
    },
    hide : function( ) {
      // ПРАВИЛЬНЫЙ
    },
    update : function( content ) {
      // !!!
    }
  };

  $.fn.tooltip = function( method ) {
    
    // логика вызова метода
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
    } 
  };

})( jQuery );

