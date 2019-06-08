var pageObj = {
    pageStart: function(){

        //Hamburger menu
        jQuery(".hamburger-menu").click(function(){

            jQuery(".hamburger").toggleClass('is-active');
            jQuery(".header-m-pan").toggleClass('is-active');
            jQuery("body").toggleClass('is-active');

        });

        //Timeago
        jQuery.timeago.settings.strings.suffixAgo = "전";
        jQuery.timeago.settings.strings.suffixFromNow = "지금부터";
        jQuery.timeago.settings.strings.inPast = "지금";
        jQuery.timeago.settings.strings.seconds = "1분 이내";
        jQuery.timeago.settings.strings.mintue = "약 1분";
        jQuery.timeago.settings.strings.mintues = "%d분";
        jQuery.timeago.settings.strings.hour = "약 1시간";
        jQuery.timeago.settings.strings.hours = "약 %d시간";
        jQuery.timeago.settings.strings.day = "약 1시간";
        jQuery.timeago.settings.strings.days = "%d시간";
        jQuery.timeago.settings.strings.month = "약 1달";
        jQuery.timeago.settings.strings.months = "%d달";
        jQuery.timeago.settings.strings.year = "약 1년";
        jQuery.timeago.settings.strings.years = "%d년";


        jQuery.timeago.settings.allowFuture = true;
        jQuery("time.timeago").timeago();

        //Typed...
        // $(".typed-1").typed({
        //     strings: [" 달리고"," 심고"," 열고"],
        //     stringsElement:null,
        //     typeSpeed: 200,
        //     startDelay: 1000,
        //     backSpeed: 100,
        //     backDelay: 3000,
        //     loop: true,
        //     loopCount: 5,
        //     showCursor: false,
        //     cursorChar: "|",
        //     attr: null,
        //     contentType: 'html',
        //     callback: function() {},
        //     preStringTyped: function() {},
        //     onStringTyped: function() {},
        //     resetCallback: function() {}
        // });
        // $(".typed-2").typed({
        //     strings: [" 심는다"," 열다"," 잇다"],
        //     stringsElement:null,
        //     typeSpeed: 200,
        //     startDelay: 2000,
        //     backSpeed: 100,
        //     backDelay: 3000,
        //     loop: true,
        //     loopCount: 5,
        //     showCursor: false,
        //     cursorChar: "|",
        //     attr: null,
        //     contentType: 'html',
        //     callback: function() {},
        //     preStringTyped: function() {},
        //     onStringTyped: function() {},
        //     resetCallback: function() {}
        // });

        //Code Highlighting...
        hljs.initHighlightingOnLoad();
        var aCodes = document.getElementsByTagName('pre code');
        for (var i=0; i < aCodes.length; i++) {
            hljs.highlightBlock(aCodes[i]);
        }
        /*
        jQuery('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
        */

        //Magnific popup
        jQuery('.justified-gallery').each(function() { // the containers for all your galleries
            jQuery(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });

        //justifiedGallery...
        $(".justified-gallery").justifiedGallery({
            rowHeight:200,
            lastRow:'justify',
            randomize:true,
            captions:false,
            margins:1,
            maxRowHeight:200
        });

        // //Video
        // var vid = $("#background-video");
        // var ksec = 0;
        // vid.bind('timeupdate', function(){
        //     var ct = this.currentTime;
        //     var sec = Math.floor(ct);
        //     if(sec != ksec){
        //         ksec = sec;
        //         console.log(sec);
        //         if(sec == 1){
        //             pageObj.typeText("내일을 잇다");
        //         }
        //
        //     }
        // });

    },
    // typeText:function(str){
    //     $(".typed-1").typed({
    //         strings: [str],
    //         stringsElement:null,
    //         typeSpeed: 50,
    //         startDelay: 0
    //         backSpeed: 0,
    //         backDelay: 0,
    //         loop: false,
    //         loopCount: 0,
    //         showCursor: false,
    //         cursorChar: "|",
    //         attr: null,
    //         contentType: 'html',
    //         callback: function() {},
    //         preStringTyped: function() {},
    //         onStringTyped: function() {},
    //         resetCallback: function() {}
    //     });
    // },
    //When scrolling add bar shadow class...
    pageScroll:function(){

        var scroll = jQuery(this).scrollTop();
        var vh = jQuery('.visual').height(); //Visual Height...
        var hh = jQuery('.header').height(); //Header Height...
        var hmh = jQuery('.header-m').height(); //Header Height...

        if(scroll) {
            if(scroll >= (vh-hh) && !jQuery('.header').hasClass('scrolled')){
                jQuery('.header').addClass('scrolled');
                jQuery('.back-to-top').addClass('scrolled');
            }else if(scroll <= (vh-hh) && jQuery('.header').hasClass('scrolled')){
                jQuery('.header').removeClass('scrolled');
                jQuery('.back-to-top').removeClass('scrolled');
            }
        } else {
            jQuery('.header').removeClass('scrolled');
            jQuery('.back-to-top').removeClass('scrolled');
        }

        if(scroll) {
            if(scroll >= (vh-hmh) && !jQuery('.header-m').hasClass('scrolled')){
                jQuery('.header-m').addClass('scrolled');
            }else if(scroll <= (vh-hmh) && jQuery('.header-m').hasClass('scrolled')){
                jQuery('.header-m').removeClass('scrolled');
            }
        } else {
            jQuery('.header-m').removeClass('scrolled');
        }

        if(scroll){
            jQuery('.back-top-top').addClass('scrolled');
        } else{
            jQuery('.back-top-top').removeClass('scrolled');
        }
    },
    //Random Timeline Images..
    pageResize: function(){

    },
    shuffleItems: function(container){
        var parent = $(container);
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    },
    catalogCheck: function(){

        jQuery("#catalog-sidebar input[type=checkbox]").each(function(){
            //console.log(jQuery(this).attr('class'));
            jQuery(this).click(function(){
                var cname = "."+jQuery(this).attr('class');
                jQuery(cname).toggle(this.checked);
            }).triggerHandler("click");
        });
    },
    breweryCheck: function(){

        jQuery("#brewery-sidebar input[type=checkbox]").each(function(){
            console.log(jQuery(this).attr('class'));
            jQuery(this).click(function(){
                var cname = "."+jQuery(this).attr('class');
                jQuery(cname).toggle(this.checked);
            }).triggerHandler("click");

        });
    },
    itemCheck: function(){
        jQuery("#item-sidebar input[type=checkbox]").each(function(){
            //console.log(jQuery(this).attr('class'));
            jQuery(this).click(function(){
                var cname = "."+jQuery(this).attr('class');
                jQuery(cname).toggle(this.checked);
            }).triggerHandler("click");
        });
    },
    reversefootnote:function(){
        jQuery(".reversefootnote").each(function(){
            console.log("YES");
            jQuery(this).text("");
            jQuery(this).append("<i class='icon-reply-all'></i>");
        });
    }    
};

jQuery(document.body).ready(function(){

    if (!window.getComputedStyle) {
        window.getComputedStyle = function(element) {
            return element.currentStyle;
        }
    }
    pageObj.pageStart();
    pageObj.reversefootnote();
    jQuery(window).resize(pageObj.pageResize);
    jQuery(window).scroll(pageObj.pageScroll);
});


