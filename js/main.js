/* *** jquery.easing.1.3.js *** */
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ТЉ 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ТЉ 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/* jQuery Carousel 0.9.
Copyright 2010 Thomas Lanciaux and Pierre Bertet.
This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/
;(function($){
    
    $.fn.carousel = function(params){
        
        var params = $.extend({
            direction: "horizontal",
            loop: false,
            dispItems: 1,
            pagination: false,
            paginationPosition: "inside",
            nextBtn: '<input type="button" value="Next" />',
            prevBtn: '<input type="button" value="Previous" />',
            btnsPosition: "inside",
            nextBtnInsert: "insertAfter",
            prevBtnInsert: "insertBefore",
            nextBtnInsertFn: false,
            prevBtnInsertFn: false,
            autoSlide: false,
            autoSlideInterval: 3000,
            delayAutoSlide: false,
            combinedClasses: false,
            effect: "slide",
            slideEasing: "swing",
            animSpeed: 300,
            equalWidths: "true",
            verticalMargin: 0,
            callback: function () {},
            completeAnimate: function() {},
            useAddress: false,
            adressIdentifier: "carousel",
            tabLabel: function (tabNum) { return tabNum; },
            showEmptyItems: true,
            ajaxMode:false,
            ajaxUrl:"",
            stopSlideBtn: false,
            stopSlideTextPause: "Pause",
            stopSlideTextPlay: "Play"
        }, params);
        
        // Buttons position
        if (params.btnsPosition == "outside"){
            params.prevBtnInsert = "insertBefore";
            params.nextBtnInsert = "insertAfter";
        }
        
        // Slide delay
        params.delayAutoSlide = 0 + params.delayAutoSlide;
        
        return this.each(function(){
            
            // Env object
            var env = {
                $elts: {},
                params: params,
                launchOnLoad: []
            };
                    
            // Carousel main container
            env.$elts.carousel = $(this).addClass("js");
            
            // Carousel content
            env.$elts.content = $(this).children().css({position: "absolute", "top": 0});
            
            // Content wrapper
            env.$elts.wrap = env.$elts.content.wrap('<div class="carousel-wrap"></div>').parent().css({overflow: "hidden", position: "relative"});
            
            // env.steps object
            env.steps = {
                first: 0, // First step
                count: env.$elts.content.children().length // Items count
            };
            
            // Loader
            env.$elts.loader = $('<div class="loader"></div>').css({'position':'absolute'});
            
            // Last visible step
            env.steps.last = env.steps.count - 1;
            
            // Pagination
            if (env.params.pagination) {
                initPagination(env);
            }
            
            // Prev Button
            if ($.isFunction(env.params.prevBtnInsertFn)) {
                env.$elts.prevBtn = env.params.prevBtnInsertFn(env.$elts);
            } else {
                if (params.btnsPosition == "outside"){
                    env.$elts.prevBtn = $(params.prevBtn)[params.prevBtnInsert](env.$elts.carousel);
                } else {
                    env.$elts.prevBtn = $(params.prevBtn)[params.prevBtnInsert](env.$elts.wrap);
                }
            }
            
            // Next Button
            if ($.isFunction(env.params.nextBtnInsertFn)) {
                env.$elts.nextBtn = env.params.nextBtnInsertFn(env.$elts);
            } else {
                if (params.btnsPosition == "outside"){
                    env.$elts.nextBtn = $(params.nextBtn)[params.nextBtnInsert](env.$elts.carousel);
                } else {
                    env.$elts.nextBtn = $(params.nextBtn)[params.nextBtnInsert](env.$elts.wrap);
                }
            }
            
            // Add buttons classes / data
            env.$elts.nextBtn.addClass("carousel-control next carousel-next");
            env.$elts.prevBtn.addClass("carousel-control previous carousel-previous");
            
            // Last items to load in ajaxMode var
            env.lastItemsToLoad;
            
            // Bind events on next / prev buttons
            initButtonsEvents(env);
            
            // Bind events on focus for keyboard control
            env.$elts.carousel.attr('tabindex',0).add(env.$elts.carousel.children()).bind({
                focus : function(e){
                    $(document).bind('keypress', function(e){
                        switch (e.keyCode) {
                            case 39 : env.$elts.nextBtn.click(); break;
                            case 37 : env.$elts.prevBtn.click(); break;
                        }
                        switch (e.charCode) {
                            case 110 : env.$elts.nextBtn.click(); break;
                            case 112 : env.$elts.prevBtn.click(); break;
                        }
                    });
                },
                blur : function(){
                    $(document).unbind('keypress');
                }
            });
            
            // Address plugin
            initAddress(env);
            
            // On document load...
            $(function(){
                
                // Launch carousel initialization
                initCarousel(env);
                
                // Launch function added to "document ready" event
                $.each(env.launchOnLoad, function(i,fn){
                    fn();
                });
                
                // Launch autoslide
                if (env.params.autoSlide){
                    initAutoSlide(env);
                }
                
                // Control Slide Button
                if(params.stopSlideBtn == true){
                    env.$elts.stopSlideBtn = $('<button type="button" class="slide-control play">'+params.stopSlideTextPause+'</button>');
                    createBtnStopAutoslide(env);
                }
                
            });
            
        });
        
    };
    
    // Init carousel dimensions
    function initCarousel(env){
        //Set max Height with the highest element
        var $items = env.$elts.content.children();
        var $maxHeight = 0;
        
        $items.each(function () {
            $item = $(this);
            $itemHeight = $item.outerHeight();
            if ($itemHeight > $maxHeight) {
                $maxHeight = $itemHeight;
            }
        });
        if (env.params.verticalMargin > 0) {
            $maxHeight = $maxHeight + env.params.verticalMargin;
        }
        
        $items.height($maxHeight);
        // First item
        var $firstItem = env.$elts.content.children(":first");
        
        // Width 1/1 : Get default item width
        env.itemWidth = $firstItem.outerWidth();
        
        // Width 2/3 : Define content width
        if (env.params.direction == "vertical"){
            env.contentWidth = env.itemWidth;
            
        } else {
            
            if (env.params.equalWidths) {
                env.contentWidth = env.itemWidth * env.steps.count;
                
            } else {
                env.contentWidth = (function(){
                        var totalWidth = 0;
                        
                        env.$elts.content.children().each(function(){
                            totalWidth += $(this).outerWidth();
                        });
                        
                        return totalWidth;
                    })();
            }
        }
        
        // Width 3/3 : Set content width to container
        env.$elts.content.width(env.contentWidth);
        
        // Height 1/2 : Get default item height
        env.itemHeight = $maxHeight;
        
        // Height 2/2 : Set content height to container
        if (env.params.direction == "vertical") {
            env.$elts.content.css({
                height: env.itemHeight * env.steps.count + "px"
            });
            env.$elts.content.parent().css({
                height: env.itemHeight * env.params.dispItems + "px"
            });
        } else {
            env.$elts.content.parent().css({
                height: env.itemHeight + "px"
            });
        }
        
        // Update Next / Prev buttons state
        updateButtonsState(env);
    }
    
    // Next / Prev buttons events only
    function initButtonsEvents(env){
    
        env.$elts.nextBtn.add(env.$elts.prevBtn)
            
            .bind("enable", function(){
                
                var $this = $(this)
                    .unbind("click")
                    .bind("click", function(){
                        // Ajax init
                        if(env.params.ajaxMode && $this.is('.next') && getActivePageIndex(env) == (getPageTotal(env)-1) && !env.lastItemsToLoad) {
                            // Append content in ajax
                            ajaxLoad(env);
                            // Go to next page of the carousel
                            env.$elts.content.ajaxSuccess(function() {
                                                            
                            });
                        }else{
                            goToStep( env, getRelativeStep(env, ($this.is(".next")? "next" : "prev" )) );
                            
                            if(env.params.stopSlideBtn == true){
                                env.$elts.stopSlideBtn.trigger('pause');
                            } else {
                                stopAutoSlide(env);
                            }
                        }
                    })
                    .removeClass("disabled").removeAttr('disabled');
                
                // Combined classes (IE6 compatibility)
                if (env.params.combinedClasses) {
                    $this.removeClass("next-disabled previous-disabled").removeAttr("disabled");
                }
            })
            .bind("disable", function(){
                
                var $this = $(this).unbind("click").addClass("disabled").attr("disabled","disabled");
                
                // Combined classes (IE6 compatibility)
                if (env.params.combinedClasses) {
                    
                    if ($this.is(".next")) {
                        $this.addClass("next-disabled");
                        
                    } else if ($this.is(".previous")) {
                        $this.addClass("previous-disabled");
                        
                    }
                }
            })
            .hover(function(){
                $(this).toggleClass("hover");
            });
    };
    
    // Pagination
    function initPagination(env) {
            env.$elts.pagination = $('<div class="center-wrap"><div class="carousel-pagination"><p></p></div></div>')[((env.params.paginationPosition == "outside") ? "insertAfter" : "appendTo")](env.$elts.carousel).find("p");
            env.$elts.paginationBtns = $([]);

            env.$elts.content.children().each(function (i) {
                if (i % env.params.dispItems == 0) {
                    addPage(env, i);
                }
            });
    };
    
    // Add a page in pagintion (@ the end)
    function addPage(env, firststep) {
        if(env.params.pagination){
            env.$elts.paginationBtns = env.$elts.paginationBtns.add($('<a role="button"><span>' + env.params.tabLabel(env.$elts.paginationBtns.length + 1) + '</span></a>').data("firstStep", firststep))
            .appendTo(env.$elts.pagination);
            env.$elts.paginationBtns.slice(0, 1).addClass("active");
            env.$elts.paginationBtns.click(function (e) {
                goToStep(env, $(this).data("firstStep"));
                if(env.params.stopSlideBtn == true){
                    env.$elts.stopSlideBtn.trigger('pause');
                } else {
                    stopAutoSlide(env);
                }
            });
        }
    }
    
    // Address plugin
    function initAddress(env) {
        
        if (env.params.useAddress && $.isFunction($.fn.address)) {
            
            $.address
                .init(function(e) {
                    var pathNames = $.address.pathNames();
                    if (pathNames[0] === env.params.adressIdentifier && !!pathNames[1]) {
                        goToStep(env, pathNames[1]-1);
                    } else {
                        $.address.value('/'+ env.params.adressIdentifier +'/1');
                    }
                })
                .change(function(e) {
                    var pathNames = $.address.pathNames();
                    if (pathNames[0] === env.params.adressIdentifier && !!pathNames[1]) {
                        goToStep(env, pathNames[1]-1);
                    }
                });
        } else {
            env.params.useAddress = false;
        }
    };
    
    function goToStep(env, step) {
        
        // Callback
        env.params.callback(step);
        
        // Launch animation
        transition(env, step);
        
        // Update first step
        env.steps.first = step;
        
        // Update buttons status
        updateButtonsState(env);
        
        // Update address (jQuery Address plugin)
        if ( env.params.useAddress ) {
            $.address.value('/'+ env.params.adressIdentifier +'/' + (step + 1));
        }
        
    };
    
    // Get next/prev step, useful for autoSlide
    function getRelativeStep(env, position) {
        if (position == "prev") {
            if (!env.params.showEmptyItems) {
                if (env.steps.first == 0) {
                    return ((env.params.loop) ? (env.steps.count - env.params.dispItems) : false);
                } else {
                    return Math.max(0, env.steps.first - env.params.dispItems);
                }
            } else {
                if ((env.steps.first - env.params.dispItems) >= 0) {
                    return env.steps.first - env.params.dispItems;
                } else {
                    return ((env.params.loop) ? (env.steps.count - env.params.dispItems) : false);
                }
            }
        } else if (position == "next") {
            if ((env.steps.first + env.params.dispItems) < env.steps.count) {
                if (!env.params.showEmptyItems) {
                    return Math.min(env.steps.first + env.params.dispItems, env.steps.count - env.params.dispItems);
                } else {
                    return env.steps.first + env.params.dispItems;
                }
            } else {
                return ((env.params.loop) ? 0 : false);
            }
        }
    };
    
    // Animation
    function transition(env, step) {
        
        // Effect
        switch (env.params.effect){
            
            // No effect
            case "no":
                if (env.params.direction == "vertical"){
                    env.$elts.content.css("top", -(env.itemHeight * step) + "px");
                } else {
                    env.$elts.content.css("left", -(env.itemWidth * step) + "px");
                }
                break;
            
            // Fade effect
            case "fade":
                if (env.params.direction == "vertical"){
                    env.$elts.content.hide().css("top", -(env.itemHeight * step) + "px").fadeIn(env.params.animSpeed);
                } else {
                    env.$elts.content.hide().css("left", -(env.itemWidth * step) + "px").fadeIn(env.params.animSpeed);
                }
                break;
            
            // Slide effect
            default:
                
                function CallBackAnimate() {
                    env.params.completeAnimate(step);
                }

                if (env.params.direction == "vertical"){
                    env.$elts.content.stop().animate({
                        top : -(env.itemHeight * step) + "px"
                    }, env.params.animSpeed, env.params.slideEasing, CallBackAnimate);
                } else {
                    env.$elts.content.stop().animate({
                        left : -(env.itemWidth * step) + "px"
                    }, env.params.animSpeed, env.params.slideEasing, CallBackAnimate);
                }
                break;
        }
        
    };
    
    // Update all buttons state : disabled or not
    function updateButtonsState(env){
        
        if (getRelativeStep(env, "prev") !== false) {
            env.$elts.prevBtn.trigger("enable");
            
        } else {
            env.$elts.prevBtn.trigger("disable");
        }
        
        if (getRelativeStep(env, "next") !== false) {
            env.$elts.nextBtn.trigger("enable");
            
        } else {
            env.$elts.nextBtn.trigger("disable");
        }
        
        if (env.params.pagination){
            env.$elts.paginationBtns.removeClass("active")
            .filter(function(){
                return ($(this).data("firstStep") == env.steps.first)
            })
            .addClass("active");
        }
    };
    
    // Launch Autoslide
    function initAutoSlide(env) {
        env.delayAutoSlide = window.setTimeout(function(){
            env.autoSlideInterval = window.setInterval(function(){
                goToStep( env, getRelativeStep(env, "next") );
            }, env.params.autoSlideInterval);
        }, env.params.delayAutoSlide);
    };
    
    // Stop autoslide
    function stopAutoSlide(env) {
        window.clearTimeout(env.delayAutoSlide);
        window.clearInterval(env.autoSlideInterval);
        env.params.delayAutoSlide = 0;
    };
    
    // Create button "stop autoslide"
    function createBtnStopAutoslide(env){
        var jButton = env.$elts.stopSlideBtn;
        
        jButton.bind({
            'play' : function(){
                initAutoSlide(env);
                jButton.removeClass('pause').addClass('play').html(env.params.stopSlideTextPause);
            },
            'pause' : function(){
                stopAutoSlide(env);
                jButton.removeClass('play').addClass('pause').html(env.params.stopSlideTextPlay);
            }
        });
        
        jButton.click(function(e){
            if(jButton.is('.play')){
                jButton.trigger('pause');
            } else if (jButton.is('.pause')){
                jButton.trigger('play');
            }
        });
        
        jButton.prependTo(env.$elts.wrap);
    };
    
    // Get total number of page in the carousel
    function getPageTotal(env) {
        return env.$elts.pagination.children().length;
    };
    
    function getActivePageIndex(env){
        return env.steps.first/env.params.dispItems;
    }
    
    // Load next page via Ajax
    function ajaxLoad(env) {
        // insert loader
        env.$elts.carousel.prepend(env.$elts.loader);
        
        // ajax call
        $.ajax({
            url: env.params.ajaxUrl,
            dataType: 'json',
            success: function(data) {
                // set if the last item of the carousel have been loaded and add items to the carousel
                env.lastItemsToLoad = data.bLastItemsToLoad;
                $(env.$elts.content).append(data.shtml);
                
                // reinit count (number of items have changed after ajax call)
                env.steps = {
                    first: env.steps.first + env.params.dispItems,
                    count: env.$elts.content.children().length
                };
                env.steps.last = env.steps.count - 1;
                
                // rewrite carousel dimensions
                initCarousel(env);
                // rewrite/append pagination
                addPage(env,env.steps.first);
                
                // slide to next page
                goToStep( env, env.steps.first );
                if(env.params.stopSlideBtn == true){
                    env.$elts.stopSlideBtn.trigger('pause');
                } else {
                    stopAutoSlide(env);
                }
                
                // remove loader
                env.$elts.loader.remove();
            }
        });
    }
    
})(jQuery);

 /* *** jquery.tipsy.js *** */
 // tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

(function($) {
    
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 1,
        title: 'title',
        trigger: 'hover'
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
    
})(jQuery);

/* *** superfish.js *** */

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: false,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);

// Theme Scripts Start

var demo = true;
var ie = false;
var mobileDevice = false;
var smallDevice = false;
var androidDevice = false;
if(
	navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPad/i) ||
	navigator.userAgent.match(/iPod/i))
{
	mobileDevice = true;
}
if ($.browser.msie && $.browser.version < 9) { 
    ie = true;	
}
if (navigator.userAgent.match(/Android/i)) {
	var androidDevice = true;
	$('html').addClass('android');
}
if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
	var smallDevice = true;
	$('html').addClass('smallDevice');
}

$(document).ready(function() {
    //Menu SetUp and animation
    $('.nav').find('li:has(ul)').addClass('has-menu');
    $('.nav').children('li.has-menu').addClass('level1');
    $('.nav').find('li.level1').find('ul.sub-menu').children('li.has-menu').addClass('level2');
    $('ul.nav').superfish();
    //MobileMenu
    $('header').append('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
    $('.mobile_menu').html($('header').find('.nav').html());
    $('.btn-navbar').click(function(){
	$('.mobile_menu_wrapper').slideToggle(300);
    });
        
    if (!mobileDevice) {
	$('.footer-socials').find('a').tipsy({gravity: 's', fade: true});
    }
       
    $('.our-team').each(function(){
	dispNum = parseInt($(this).attr('data-count'));
	if ($(window).width()< 766) {
            dispNum = 1;
	}
	$(this).carousel({
            dispItems: dispNum,
            showEmptyItems: 0,
            nextBtn: '<img src="images/next.png" alt="next" width="9" height="16" />',
            prevBtn: '<img src="images/prev.png" alt="previous" width="9" height="16" />'			
	});				
    });
    $('.our-partners').each(function(){
	dispNum = parseInt($(this).attr('data-count'));
	if ($(window).width()< 459) {
            dispNum = 1;
	}
        else if ($(window).width()< 766) {
            dispNum = 2;
	}
	$(this).carousel({
            dispItems: dispNum,
            showEmptyItems: 0,
            nextBtn: '<img src="images/next.png" alt="next" width="9" height="16" />',
            prevBtn: '<img src="images/prev.png" alt="previous" width="9" height="16" />'			
	});				
    });
    
    if ($(window).width()> 766) {
        $('body').append('<a href="javascript:void(0)" class="btn2top"></a>');
    }    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('body').find('.btn2top').fadeIn(300);
            } else {
                $('body').find('.btn2top').fadeOut(300);
            }
        });
        $('.btn2top').click( function(){
            $("html:not(:animated)" +( !$.browser.opera ? ",body:not(:animated)" : "")).animate({ scrollTop: 0}, 500 );
            return false;		
        });
    });
        
});
