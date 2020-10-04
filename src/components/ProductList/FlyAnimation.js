import jQuery from 'jquery';
import 'jqueryui';
import React, { useEffect } from 'react';



const Fly = props => {
    console.log("FLYYY");


    (function (jQuery, window, document, undefined) {
        jQuery.fn.flyto = function (options) {

            // Establish default settings

            var settings = jQuery.extend({
                item: '.flyto-item',
                target: '.cart',
                button: '.flyto-btn',
                shake: false
            }, options);


            ///console.log(this);

            return this.each(function () {
                var
                    jQuerythis = jQuery(this),
                    flybtn = jQuerythis.find(settings.button),
                    target = jQuery(settings.target),
                    itemList = jQuerythis.find(settings.item);

                console.log("this.each");
                console.log("flybtn", flybtn);
                /*
                 console.log("target", target);
                 console.log("itemList", itemList);
                 console.log("  jQuerythis", jQuerythis); */

                //flybtn.on('click', function () {
                console.log("flybtn.on");
                var _this = jQuery(this),

                    eltoDrag = _this.parent().find("img").eq(0);

                console.log("_this", _this.eltoDrag);
                if (eltoDrag) {
                    var imgclone = eltoDrag.clone()
                        .offset({
                            top: eltoDrag.offset().top,
                            left: eltoDrag.offset().left
                        })
                        .css({
                            'opacity': '0.5',
                            'position': 'absolute',
                            'height': eltoDrag.height() / 2,
                            'width': eltoDrag.width() / 2,
                            'z-index': '100'
                        })
                        .appendTo(jQuery('body'))
                        .animate({
                            'top': target.offset().top + 10,
                            'left': target.offset().left + 15,
                            'height': eltoDrag.height() / 2,
                            'width': eltoDrag.width() / 2
                        }, 1000, 'easeInOutExpo');

                    if (settings.shake) {
                        setTimeout(function () {
                            target.effect("shake", {
                                times: 2
                            }, 200);
                        }, 1500);
                    }


                    imgclone.animate({
                        'width': 0,
                        'height': 0
                    }, function () {
                        jQuery(this).detach()
                    });
                }
                console.log("_this", _this);
                // });
            });
        }
    })(jQuery, window, document)



    jQuery('.prodContainer').flyto({
        item: '.items',
        target: '.cart',
        button: '.my-btn'
    });

    return (
        <React.Fragment>

        </React.Fragment>)

}




export default Fly; 