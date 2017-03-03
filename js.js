
$(document).ready(function() {
   $("body").keypress(function (e) {
       if(e.which == 13) {
           let firstn = $("#first").val();
           let secondn = $("#second").val();
           /*$.ajax({type: "post", url: "/ajax.php", data: {firstn: firstn, secondn: secondn}}).done(function (html) {
               $("#screen").text(html);
           });*/
           var url="/file.xml";
           var ajax = new XMLHttpRequest();
           ajax.onreadystatechange = function (xmlHttp) {
               if (ajax.readyState == 4) {
                   if (ajax.status == 200) {
                       var guitars = ajax.responseText;
                       //var guitar = document.getElementsByTagName("guitar");
                       //console.log( guitar);
                       var respond = "";
                       /*for (var i = 0; i < guitar.length; i++) {
                           respond += "Guitar: "
                           var manufacturer = books[i].getAttribute("manufacturer");
                           alert(manufacturer);
                           respond += manufacturer + "";
                           var model = books[i].getAttribute("model");
                           respond += manufacturer + ";";
                       }*/
                       $(guitars).find("guitar").each(function() {
                           respond += "Guitar: "
                           var manufacturer = $(this).find("manufacturer");
                           respond += manufacturer.text() + " ";
                           var model =$(this).find("model");
                           respond += model.text() + " ; ";
                       });
                       $("#screen").text(respond)

                   } else {
                       // Код опрацювання помилки
                   }
               }
           }
            if ($("#method").val() == "POST") {
                ajax.open("POST", url, true);
            }
           else
            if ($("#method").val() == "GET")
                ajax.open("GET", url, true);
           ajax.send(null);

       }
   });
});