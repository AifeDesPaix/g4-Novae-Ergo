// alert("bonsoir");
// alert("aaaa");

$(document).ready(function () {
    // $("img[src=https://www.novae.info/v4/m2img/vbscb1-e_over.gif").css("display", 'none');

    $("img[src='../images/home_logo.jpg']").attr("src", "https://i.ytimg.com/vi/D-PnRiH7fPg/maxresdefault.jpg");
    // console.log($("img[name=p7TBim10]"));
    // $("img[name=p7TBim10]").replaceWith( "<div alt=\"informations\" name=\"p7TBim10\" id=\"p7TBim10\" >Mes Infos</div>" );

    // console.log($("div[id^='p7TBsub']"));

    $("body").append('<div id="menu"></div>');
    $("body").append('<div id="menuBtn"><li class="fa fa-chevron-circle-left"></li> Menu</div>');


    $("#menuBtn").on("click", function () {
        $("#menu").slideToggle();
    });

    const menuElems = $("div[id^='p7TBsub']");
    const menuTitles = $("div[id^='p7TBtrig']");
    if(menuElems.length > 0) {
        menuElems.each(function () {
            $("#menu").append($(this).children());
        });
        menuTitles.css("display", "none");
    } else {
        $("body").append(`<form action="/v4/etudiants/nov1_logetu.php" method="post" name="form1" id="form1" class="coulolMdrJeSuce">
      <div align="right" class="style3">Login  eNovae </div>
      <input name="login" type="text" class="p7tbsub" id="login" size="30">
      <div align="right" class="style3">Mot de passe </div>
      <input name="mp" type="password" class="p7tbsub" id="mp" size="30">
      <div>     
          <input type="submit">
    </div>
</form>`);
    }

});
