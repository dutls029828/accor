$(function(){
    slider(".indexContainer .headlineSlider",false,false,false,0,450,true,true,'horizontal');
    slider(".indexContainer .propBox .propSlider",false,false,true,4000,400,false,false,'fade');
    slider(".indexContainer .brandSlider",false,false,true,8000,1000,false,false,'fade');
    slider(".tickerBox .tickerSlider",true,true,false,0,500000,false,false,'horizontal');
    slider(".diningServiceContainer .tileSlider",false,false,false,0,500,true,true,"fade");
    pagerCustomSlider();

    termsPopup(".offersYearContainer .horiCardslotBox ul li div span input",".btn_close");
    termsPopup("#diningSeasonFestive ul li","#diningSeasonFestive > div .btn_close");
    termsPopup("div[class*='detailContainer'] > .termsPopup+div span input", ".btn_close");
    termsPopup(".mapPopup",".btn_close");
    
    navClick();
    navFnb("header #fnbPanel b.mui ");
    signClick();
    selectClick(".roomSelect");
    selectClick(".specialComponent");
    selectClick(".selectComponent");
    selectClick(".mapSelect");
    roomSelect("#reservation fieldset div ul li:nth-of-type(3) .roomSelect","#reservation fieldset div li:nth-of-type(3) .roomSelect .compSelect input[value='Reset']");
    paymentClick();
    panelControl(".btn_open");

    wayCarousel();
    statusLevelCarousel();
    brandCarousel();

    accordionTab01(".accordionBox ul:first-of-type li");
    accordionTab02(".accordionBox ul.R422 li");
    accordionTab03(".rsvnContainer.mybooking div:last-of-type ul.R422 li");
    accordionBox(".accordionBox ul:not(:first-of-type) li strong");
    accordionBox(".accordionBox ol li strong");
    accordionBox("section[class*='termsContainer'] .accordionBox li strong");
    accordionBox("footer div:last-of-type > strong");
   
    smoothtoAnchor();
  
    tabUI(".tabUI li");
    tabUI(".accordionBox ul:first-of-type li");
    miniBoxUI(".miniBoxthumbPager li");
    
    imgSwapControl(".miniBoxthumbPager li");
    imgHoverEvent(".imgHoverList ul li img");
    allOurBrandFilter();
    numberOnly();
    mainScrollAct();
    mapEvent();
    mainPopup();
    backBtn(".historyBack");

});
function mainPopup(){
    $(".popupClose").click(function(){
        $(".mainPopup").addClass("active");
        $(".mainPopup").fadeOut();
        $(".mainPopupContent").fadeOut();
    });
}

function slider(target,tickVal,tickHover,autoVal,pauseVal,speedVal,conVal,indicator,modeVal){
    $(target).bxSlider({
        ticker: tickVal,
        tickerHover: tickHover,
        auto: autoVal,
        pause: pauseVal,
        speed: speedVal,
        controls: conVal,
        pager: indicator,
        mode: modeVal,
        touchEnabled: false
    });
}

function navClick(){
    var navButton = null;
    $(window).load(function(){
        if (window.matchMedia("(min-width: 1280px)").matches) {
            navButton = "header nav ul li";
        } else {
            navButton = ".menuBar";
        }
        initEvent(navButton);
    });
    $(window).resize(function(){
        if($(window).innerWidth()>=1280 && navButton != "header nav ul li"){
            navButton = "header nav ul li";
            initEvent(navButton);
        }else if($(window).innerWidth()<1280 && navButton != ".menuBar"){
            navButton = ".menuBar";
            initEvent(navButton);
        }
    });
    function initEvent(btn){
        $(btn).click(function(){
            $(navButton).toggleClass("active");
            $("header div nav ul").toggleClass("active");
            $("#fnbPanel").toggleClass("active");
        });
    }
}

function navFnb(btn){
    $(btn).click(function(){
        var ul = $(this).next("ul");
        var li = $(ul).children("li");
        var liHeight = $(li).outerHeight();
        var liMargin = li.outerHeight(true); - liHeight;
        var liLength = $(li).length;
        var totalHeight = liLength * liMargin;

        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        $("header #fnbPanel > div:first-of-type ul").css("height","0");
        if($(this).hasClass("active")){
            $(ul).css("height", totalHeight + "px");
        }else{ 
            $(ul).css("height", "0px");
        }
    });
}

function signClick(){
    $("header div ul.btn li").click(function(){
        $("header div ul li").toggleClass("active");
    });
}

function selectClick(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    })
}

function roomSelect(openBtn,closeBtn){
    $(openBtn).click(function(){
        $(openBtn).toggleClass("active");      
    });
    $(closeBtn).click(function(){
        $("#reservation fieldset div ul li:nth-of-type(3)").removeClass("active");
    });
}

function paymentClick(){
    var registClick = $(".addToCard ol li:first-of-type");
    var registCard = $(".addToCard ol li:last-of-type");
    var btns = $(".addToCard ol li div input[type='button']");
    $(registClick).click(function(){
        $(this).toggleClass("active");
        $(registCard).toggleClass("active");
    });
    $(btns).click(function(){
        var currentBtn = '';
        currentBtn = $(this).val();
        if(currentBtn == "Save"){
            registCard.find("input[type='text']").prop('disabled',true);
        }
        if(currentBtn == "Edit"){
            registCard.find("input[type='text']").prop('disabled',false);
        }
    });
}

function panelControl(target){
    var currentPanel = null;
    $(target).click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".btn_close").click(function(){
        $(currentPanel).removeClass("active");
    });
}

function wayCarousel(){
    var slider = $(".slideBox .wayCarousel").bxSlider({
        controls: true,
        minSlides: 1,
        maxSlides: 2,
        moveSlides: 1,
        slideWidth: 1320,
        // slideMargin: 60,
        pager: false,
        touchEnabled: false
    });

    var clickBtn = $(".slideBox .bx-wrapper .bx-controls-direction a");
    
    clickBtn.click(function(){
        var currentSlideNumber = slider.getCurrentSlide();
        var currentSlide = "." + $(".slideBox .wayCarousel li").eq(currentSlideNumber+2).attr("class");
        console.log(currentSlide);
        $(".slideBox .wayCarousel li").removeClass("active");
        $(currentSlide).addClass("active");
    });
}

function statusLevelCarousel(){
    $(".statusLevelCarousel").bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 450,
        slideMargin: 45,
        hideControlOnEnd: true,
        controls: true,
        pager: true,
        shrinkItems: true,
        touchEnabled: true,
    });
}

function brandCarousel(){
    $("div[class*='brandSubContainer'] .brandCarousel").bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 3,
        slideWidth: 410,
        slideMargin: 40,
        controls: true,
        pager: true,
        shrinkItems: true,
        touchEnabled: false
    });
}

function accordionTab01(tabBtn){
    var accordionVal = $(this).attr("data-tab");
    var tabTarget = $("#" + accordionVal);

    $(tabBtn).click(function(){
        var notTarget = $(".accordionBox ul[id^='tier']");
        $(tabTarget).addClass("active");
        $(notTarget).not(this).removeClass("active");
    });
}
function accordionTab02(tabBtn){
    var accordionVal = $(this).attr("data-tab");
    var tabTarget = $("#" + accordionVal);

    $(".accordionBox > ul.R422 li:first-of-type").addClass("active");
    $(".accordionBox > ol:first-of-type").addClass("active");

    $(tabBtn).click(function(){
        var notTarget = $(".accordionBox ol");
        $(tabTarget).addClass("active");
        $(notTarget).not(this).removeClass("active");
    });
}

function accordionTab03(tabBtn){
    var thisTab = null;
    var thisTitle = '';
    var panels = $(".rsvnContainer [id$='svn']");
    
    $(tabBtn).click(function(){
        $(tabBtn).removeClass("active");
        $(this).addClass("active");
        thisTitle = $(this).text();
        $(".rsvnContainer h4 span").text(thisTitle);
        thisTab = "#" + $(this).attr("data-tab");
        panels.removeClass("active");
        $(thisTab).addClass("active");

    });
}

function accordionBox(accordionBtn){
    $(accordionBtn).click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle(450);
    });
}

function smoothtoAnchor() {
    var urlParams = new URL(location.href).searchParams;
    var scroll = urlParams.get('scroll');
  
    if(scroll){
        $('html,body').animate({ scrollTop: $("#" + scroll).offset()?.top}, 450, 'swing');
      };
}

function termsPopup(openBtn,closeBtn){
    var dataPopVal;

    $(openBtn).click(function(){
        dataPopVal = $(this).attr("data-popup");
        $("#" + dataPopVal).addClass("active");   
    });
    $(closeBtn).click(function(){
        $("#" + dataPopVal).removeClass("active");
    });
}

function tabUI(tabBtn){
    var currentTab = null;
    
    $(tabBtn).click(function(){
        currentTab = "#" + $(this).attr("data-tab");
        
        $(tabBtn).removeClass("active");
        $(this).addClass("active");
        
        $(".tabPage").removeClass("active");
        $(currentTab).addClass("active");
    });
}

function miniBoxUI(miniBoxBtn){
    var currentBox = null;
    
    $(miniBoxBtn).click(function(){
        currentBox = "#" + $(this).attr("data-box");

        $(miniBoxBtn).removeClass("active");
        $(this).addClass("active");

        $(".miniBoxSlider").removeClass("active");
        $(currentBox).addClass("active");
    });
}

function pagerCustomSlider(){
    $(".businessMeetingContainer .headlineSlider").bxSlider({
        controls: true,
        auto: true,
        pause: 6000,
        speed: 800,
        pager: true,
        pagerType: 'full',
        mode: 'fade'
    });
}

function imgSwapControl(swapThumb){
    $(swapThumb).click(function(){
        var clickThumb = $(this).attr("data-box");
        var thisSrc = $(this).children("img").attr("src");
        var thisAlt = $(this).children("img").attr("alt");
        var swapList = $(".miniBoxSlider");
        var thumbList = $(".miniBoxthumbPaer li");
        var swapImg = swapList.children("img");
        var swapMark = $(".miniBoxSlider mark");

        swapList.removeClass("active");
        swapList.addClass("active");
        thumbList.removeClass("active");
        $(this).addClass("active");
        
        switch(clickThumb){
            case 'privateEvent_01':
                swapImg.attr('src',thisSrc);
                swapMark.text(thisAlt);
                break;
            case 'privateEvent_02':
                swapImg.attr('src',thisSrc);
                swapMark.text(thisAlt);
                break;
            case 'privateEvent_03':
                swapImg.attr('src',thisSrc);
                swapMark.text(thisAlt);
                break;
            case 'privateEvent_04':
                swapImg.attr('src',thisSrc);
                swapMark.text(thisAlt);
                break;
            case 'privateEvent_05':
                swapImg.attr('src',thisSrc);
                swapMark.text(thisAlt);
                break;
        }
    });
}

function allOurBrandFilter(){
    var clickVal = $(".allBrandTab li");
    var arrangeItem = $(".allBrandArrange li");

    arrangeItem.addClass("active");

    clickVal.click(function(){
    var clickText = $(this).find("span").text();
    clickVal.removeClass("active");
    $(this).addClass("active");

    var arrangeImg = $(".allBrandArrange li");
    var lluxFilter = arrangeImg.has("[src$='llux.png']");
    var ppreFilter = arrangeImg.has("[src$='ppre.png']");
    var mmidFilter = arrangeImg.has("[src$='mmid.png']");
    var eecoFilter = arrangeImg.has("[src$='eeco.png']");
    
    switch(clickText){
        case 'ALL':
            arrangeItem.addClass("active");
            break;
        case 'Luxury':
            arrangeItem.removeClass("active");
            lluxFilter.addClass("active");
            break;
        case 'Premium':
            arrangeItem.removeClass("active");
            ppreFilter.addClass("active");
            break;
        case 'Midscale':
            arrangeItem.removeClass("active");
            mmidFilter.addClass("active");
            break;
        case 'Economy':
            arrangeItem.removeClass("active");
            eecoFilter.addClass("active");
            break;
    }
    });
}

function imgHoverEvent(thisHover){
    $(thisHover).hover(function(){
        var currentSrc = $(this).attr('src');

        $(this).attr('src',currentSrc.replace('.png','_hover.png'));
    }, function(){
        $(this).attr('src',$(this).attr('src').replace('_hover.png','.png'));
    });
}

function numberOnly(){
    $("input:text[numberonly]").on("keyup", function(){
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });
}

function mainScrollAct(){
    $('[data-scroll="transform"]').each(function () {
      if(
        $(window).scrollTop() >
        $(this).offset().top - $(window).height() / 1.1
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
    $(window).scroll(function() {
      $('[data-scroll="transform"]').each(function () {
        if(
          $(window).scrollTop() >
          $(this).offset().top - $(window).height() / 1.1
        ) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    });
  }

  function mapEvent(){
    var countrySelect = $("#hotelCountry");
    var regionSelect = $("#hotelRegion");
    var citySelect = $("#hotelCity");
    var popupOpen =  $(".miniHotelBox figure figcaption input");
    var popupClose = $(".mapPopup .btn_close");
    var popupBox = $("#mapPopup");
    var secondStep = false;
    var thirdStep = false;

    countrySelect.click(function(){
        var firstStep = $(this).find(":selected").val();
        if(firstStep != "Select Country"){
            regionSelect.prop("disabled",false);
            secondStep = true;
        }
    });
    regionSelect.click(function(){
        if(secondStep == true){
            var secondCondition = $(this).find(":selected").val();
            if(secondCondition != "Select Region"){
                citySelect.prop("disabled",false);
                thirdStep = true;
            }
        }
    });
    citySelect.click(function(){
        if(thirdStep == true){
            var thirdCondition = $(this).find(":selected").val();
            if(thirdCondition != "Select City"){
                $(".miniHotelBox").slideDown();
                $(".miniHotelBox > input").click(function(){
                    $(this).closest(".miniHotelBox").slideUp();
                });
            }
        }
    });
    popupOpen.click(function(){
        popupBox.addClass("active");
    });
    popupClose.click(function(){
        popupBox.removeClass("active");
    });
  }

  function backBtn(button){
    $(button).click(function(){
      history.go(-1);
    });
  }