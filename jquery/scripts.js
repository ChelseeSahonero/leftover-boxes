$(".dark-btm").click(
    function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  }
  );

$(".glow-btm").click(
    function(){
        $(".box").toggleClass("glow");
    }
)
$(".spin-btm").click(
    function(){
        $(".box").toggleClass("spin")
    }
)
$(".reveal-btm").click(
    function(){
        $(".bell").css("opacity","1")
        $(".reveal-btm").hide();
    }
)
$( ".draggable" ).draggable();
