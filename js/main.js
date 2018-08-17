
        //nombre de caracteres de texte
        $("#tailletext").click(function(){
            var txt = $("#texte").val();
            alert(txt.length);
        })
        //selectionner le texte
        $("#select").click(function(){
          $('#texte').select();
        })
        //retourne le dernier texte ecrit
        var c;
        $("#affiche").click(function(){
           $("#texte").val(c);
          })
        //supprimer le texte
        $("#supprimer").click(function(){
            c=$("#texte").val();
            $('#texte').val("");
          })
        //mettre le texte en gras
        $("#gras").click(function(){
        $('#texte').css("fontWeight","bold");
            })
         //mettre le texte italique
        $("#italique").click(function(){
        $('#texte').css("fontStyle","italic");
                })
          //mettre le texte souligne
       $("#under").click(function(){
       $('#texte').css("textDecoration","underline");
            })
         //retourne un texte normal
       $("#normal").click(function(){
        $('#texte').css("fontWeight","normal");
         $('#texte').css("textDecoration","none");
         $('#texte').css("fontStyle","normal");
         $('#texte').css("color","black");
         $('#texte').css("fontFamily","Arial");
         $('#texte').css("fontSize","");
        })
       //selectionner la taille correspandante
     $("#fontSize").change ( function () {
       
       var txtBox = $("#texte");
       var c=$("#fontSize").val();
       txtBox.css("fontSize",c +"px");
     });
      //selectionner le type de fontfamily
     $("#fontfamily").change(function() {
     $("#texte").css("fontFamily" , $("#fontfamily").val());
     })
      //selectionner la coleur prefere
    $("#color").change(function() {
    $("#texte").css("color" , $("#color").val());
    })