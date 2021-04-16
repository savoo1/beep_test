$( ".tabs_c .cont .tab .arrowl" ).click(function(e) {
    e.preventDefault();
    $(".tabs_c .cont .tab_active").removeClass("tab_active");
    $(this).parent().prev().addClass("tab_active");

    var atrad = "." + $(".tab_active").attr( "alt" );
    $(".tabs_c .line .activeone").removeClass("activeone");
    $(".tabs_c .line").find(atrad).addClass("activeone");
});
$( ".tabs_c .cont .tab .arrowr" ).click(function(e) {
    e.preventDefault();
    $(".tabs_c .cont .tab_active").removeClass("tab_active");
    if($(this).parent().next().is('div')) {
    	$(this).parent().next().addClass("tab_active");
    }else{
    	$(".tabs_c .cont .tab1").addClass("tab_active");
    }

    var atrad = "." + $(".tab_active").attr( "alt" );
    $(".tabs_c .line .activeone").removeClass("activeone");
    $(".tabs_c .line").find(atrad).addClass("activeone");
});

$( ".tabs_c .line .ctab" ).click(function(e) {
    e.preventDefault();
    var atrad = "." + $(this).attr( "alt" );
    $(".tabs_c .cont .tab_active").removeClass("tab_active");
    $(atrad).addClass("tab_active");

    $(".tabs_c .line .activeone").removeClass("activeone")
    $(this).addClass("activeone");
});
$( ".menuop .hasitems" ).click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("menuactivated_it")){
        $(this).parent().removeClass("menuactivated_it");
    }else{
        $(this).parent().addClass("menuactivated_it");
    }
});

$( ".tabs_c .cont .tab ul li" ).click(function(e) {
    e.preventDefault();
    $(this).parent().find(".activeli").removeClass("activeli");
    $(this).addClass("activeli");
});
$( ".navbar2 ul .dropdownc a" ).click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("menuactivated_it")){
        $(this).parent().removeClass("menuactivated_it");
    }else{
        $(this).parent().addClass("menuactivated_it");
    }
});


$( ".navbar .treelines" ).click(function(e) {
    e.preventDefault();
    $(".menuop").addClass("menuop_active");
    $("body").css("overflow","hidden");
});
$( ".menuop .wrapper .xicon" ).click(function(e) {
    e.preventDefault();
    $(".menuop").removeClass("menuop_active");
    $("body").css("overflow","auto");
});





$( ".navbar2 .treelines" ).click(function(e) {
    e.preventDefault();
    if($(this).parent().hasClass("ul_active")){
        $(this).parent().removeClass("ul_active");
        $("body").css("overflow","auto");
    }else{
        $(this).parent().addClass("ul_active");
        $("body").css("overflow","hidden");
    }
});


// scroll section
$( window ).scroll(function() {
  var heightofwin = $(window).height() / 1.5;
  var toppossition = $(".navbar2").offset().top;
  var positionofc1 = $(".p2_sec2 .c1").offset().top - heightofwin;
  var positionofc2 = $(".p2_sec2 .c2").offset().top - heightofwin;
  var positionofc3 = $(".p2_sec2 .c3").offset().top - heightofwin;
  var positionofc4 = $(".p2_sec2 .c4").offset().top - heightofwin;
  if(toppossition > positionofc1){
    $(".p2_sec2 .activatedc").removeClass("activatedc");
    $(".p2_sec2 .c1").addClass("activatedc");
    $(".p2_sec2 .noof").removeClass("move2");
    $(".p2_sec2 .noof").removeClass("move3");
    $(".p2_sec2 .noof").removeClass("move4");
  }
  if(toppossition > positionofc2){
    $(".p2_sec2 .activatedc").removeClass("activatedc");
    $(".p2_sec2 .c2").addClass("activatedc");
    $(".p2_sec2 .noof").addClass("move2");
    $(".p2_sec2 .noof").removeClass("move3");
    $(".p2_sec2 .noof").removeClass("move4");
  }
  if(toppossition > positionofc3){
    $(".p2_sec2 .activatedc").removeClass("activatedc");
    $(".p2_sec2 .c3").addClass("activatedc");
    $(".p2_sec2 .noof").addClass("move3");
    $(".p2_sec2 .noof").removeClass("move4");
  }
  if(toppossition > positionofc4){
    $(".p2_sec2 .activatedc").removeClass("activatedc");
    $(".p2_sec2 .c4").addClass("activatedc");
    $(".p2_sec2 .noof").addClass("move4");
  }
});













