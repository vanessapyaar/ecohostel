/**
 * Brazilian translation for bootstrap-datepicker
 * Cauan Cabral <cauan@radig.com.br>
 */
;(function($){
    $.fn.datepicker.dates['pt-BR'] = {
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        monthsTitle: "Meses",
        clear: "Limpar",
        format: "dd-mm-yyyy"
    };
}(jQuery));

(function ($) {
    "use strict";
    $(window).on('load', function() {
        var $datePicker = $('.ct-js-datePicker');
        if ($().datepicker){
            if ($datePicker.length > 0) {
                $datePicker.each(function(){
                    var $this = $(this),
                        $todayHighlight = parseBoolean($this.attr("data-todayHighlight"), true),
                        $calendarWeeks = parseBoolean($this.attr("data-calendarWeeks"), false),
                        $autoClose = parseBoolean($this.attr("data-autoClose"), true),
                        $keyboardNavigation = parseBoolean($this.attr("data-keyboardNavigation"), false);
                    $this.datepicker({
                        language: 'pt-BR',
                        startDate: new Date(),
                        todayHighlight: $todayHighlight,
                        calendarWeeks: $calendarWeeks,
                        autoclose: $autoClose,
                        keyboardNavigation: $keyboardNavigation
                    });
                    var $a = $('.ct-js-datePicker'),
                        $b = $a.innerWidth();
                    $a.on('focus', function() {
                        var $datepicker = $('.datepicker');
                        $datepicker.css('min-width', $b);
                        $datepicker.find('table').css('width', '100%');
                    });
                });
            }
        }
    });
})(jQuery);

