(function ($) {
    "use strict";
    $(document).on('ready', function () {
        var $bodyEl = $('body');
        if ($().pageScroller) {

            if($devicewidth < 768){
                $bodyEl.pageScroller({
                    navigation: '.ct-menuMobile .onepage', sectionClass: 'section', scrollOffset: -70
                });
            }
            else if ($devicewidth > 768 && $devicewidth < 998){
                $bodyEl.pageScroller({
                    navigation: '.nav.navbar-nav .onepage', sectionClass: 'section', scrollOffset: -126
                });
            }
            else{
                $bodyEl.pageScroller({
                    navigation: '.nav.navbar-nav .onepage', sectionClass: 'section', scrollOffset: -91
                });
            }
        }
    })
})(jQuery);