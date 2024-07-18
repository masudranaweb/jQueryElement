// $(document).ready(function(){
//    alert('welcome');
// });



// ex-1 show and hide text 

$(document).ready(function(){
   $("#j_hide").on("click", function() {
      $("#ttext").hide("slow");
    });
    
    $("#j_show").on("click", function() {
      $("#ttext").show("slow");
    });

 });


// ex-2 text toggle

$(document).ready(function(){
   $("#q_toggle").on("click", function(){
      $("#t_text").toggle(900);
   })
})
// ex-3 click the text to hide
$(document).ready(function(){
   $(".ttext").on("click", function(){
      $(this).hide(900);
   })
})

// ex-4 Element with class
$(document).ready(function(){
   $("p.ttext").on(function(){
      $(this).hide();
   });
   $("h1.ttext").on(function(){
      $(this).hide();
   })
})

// ex-5 Selects the first
$(document).ready(function(){
   $("h5:first").on("click", function(){
      $(this).hide();
   })
})

// ex-6 Selects the first
$(document).ready(function(){
   $("#h_href").on("click", function(){
      $("[href]").hide();
   })
})
// ex-7 tr, th, td selector css customise
$(document).ready(function(){
   $("tr:even").css("background-color","red");
   $("tr:odd").css("background-color","blue");
   $("td").css("color","white");
})

// ex-8 mouseenter alert message
$(document).ready(function(){
   $("#t_alert").mouseenter(function(){
      alert("This is lorem text for mouseenter");
   })
})

// ex-9 mouseleave alert message
$(document).ready(function(){
   $(".t_alert").mouseleave(function(){
      alert("This is lorem text for mouseleave");
   })
})

// ex-10 mousedown alert message
$(document).ready(function(){
   $(".tt_alert").mousedown(function(){
      alert("This is lorem text for mousedown");
   })
})

// ex-11 mousehover alert message
$(document).ready(function(){
   $(".h_alert").hover(function(){
      alert("This is lorem text for mousehover");
   })
})

// ex-12 blur and focus css
$(document).ready(function(){
   $("input").focus(function(){
     $(this).css("background-color", "red");
   });
   $("input").blur(function(){
     $(this).css("background-color", "blue");
   });
 });

 // ex-13 Fade in 
 $(document).ready(function(){
   $("#fade_in").on("click", function(){
      $("#fade_img").fadeIn(3000).attr("src","images/noblur.png");
   })
})

 // ex-14 Fade out 
 $(document).ready(function(){
   $("#img_fadeout").on("click", function(){
      $("#fade_out").fadeOut(1000);
   })
})

 // ex-15 Fade out 
 $(document).ready(function(){
   $("#btn_fadetoggle").on("click", function(){
      $("#fade_toggle").fadeToggle(1000);
   })
})

 // ex-16 Fade To
 $(document).ready(function(){
   $("#btn_fadeto").on("click", function(){
      $("#fade_to").fadeTo("slow",0.1);
   });
})
 // ex-17 Fade To
 $(document).ready(function(){
   $("#btn_slideup").on("click", function(){
      $("#img_slideup").slideUp("slow");
   });
})

 // ex-18 Fade Down
 $(document).ready(function(){
   $("#btn_slidedown").on("click", function(){
      $("#img_slidedown").slideUp("slow");
   });
})

 // ex-19 slide Toggle
 $(document).ready(function(){
   $("#btn_slidetoggle").on("click", function(){
      $("#img_slideToggle").slideToggle("slow");
   });
})

 // ex-20 Start Animation
 $(document).ready(function(){
   $("#start_animation").on("click", function(){
      $("#animation_img").animate({
      left: '400px',
      height: '300px',
      width: '300px',
      });
   });
})

 // ex-21 Animation
 $(document).ready(function(){
   $("#plus_animation").on("click", function(){
      $("#animation_plus").animate({
      left: '300px',
      height: '+=50px',
      width: '+=50px',
      });
   });


   $("#minus_animation").on("click", function(){
      $("#animation_plus").animate({
      left: '300px',
      height: '-=50px',
      width: '-=50px',
      });
   });
})

 // ex-22 Animation
 $(document).ready(function(){
   $("#toggle_animation").on("click", function(){
      $("#animation_toggle").animate({
      height: 'toggle',
      
      },"slow");
   });
})

 // ex-23 text Animation
 $(document).ready(function(){
   $("#btn_textanimation").on("click", function(){
      $("#text_animation").css({"background-color": "black", "font-size": "50px", "text-align":"center", "color":"white", "left":"250px", "text-style":"bold",
      });
   });
   
   $("#btn_textanimation").on("click", function(){
      $("#text_animation").animate({
         height:'toggle',
      });
   }) 
});
 
// EX-24 click the button to stop the slide

$(document).ready(function(){
   $("#btn_slideUp").on("click", function(){
      $("#text_slideStop").slideUp(5000);
   });

   $("#btn_slideStop").on("click", function(){
      $("#text_slideStop").stop();
   });
})

// ex-25 click the button to clling back alert
$(document).ready(function(){
   $("#btn_calling").on("click", function(){
      $("#text_callingback").hide("slow", function(){
         alert("The paragraph is now hidden");
      });
   });
});

//ex-26 click the button to chaining
$(document).ready(function(){
   $("#btn_chaining").on("click", function(){
      $("#text_chaining").slideUp(3000).slideDown(3000);
   })
})

//ex-26 click the button to  get function
$("document").ready(function(){
   $("#btn_getText").on("click", function(){
      alert("text:" + $("#text_get").text());
   });
   $("#btn_getHTML").on("click", function(){
      alert("HTML:" + $("#text_get").html());
   });
   $("#btn_gethref").on("click", function(){
      alert($("#text_href").attr("href"));
   });
})

// ex-27 click the button to insert after

$(document).ready(function(){
   let x= "Welcome! <br> ";
   let y=" Masud Rana <br> "
   $("#btn_insertafter").on("click", function(){
      $("#text_appendText").append(x,y);
   })
})

//ex-28 click the button to  remove the text

$(document).ready(function(){
   var x="#removeText";
   $("#btn_removeText").on("click", function(){
      $(x).remove();
   });
})

//ex-29 click the button to  remove the text

$(document).ready(function(){
   $("#btn_css_class").on("click", function(){
      $("#cssClass").css("color","blue");
      $("#cssClass").css("font-size","25px");
   });

   // $("#btn_css_toggle").toggle(
   //    function(){$("#cssClass").css({"color": "red"});},
   //    function(){$("#cssClass").css({"color": "blue"});},
   //    function(){$("#cssClass").css({"color": "green"});
   //  });
})

// ex-30 Send an HTTP GET request to a page and get the result back
$(document).ready(function(){
   $("#btn_get_post").on("click", function(){
     $.post("demo_test_post.asp",
     {
       name: "Donald Duck",
       city: "Duckburg"
     },
     function(data,status){
       alert("Data: " + data + "\nStatus: " + status);
     });
   });
 });

//ex-31 click the button to  empty div
$(document).ready(function(){
   $("#btn_empty").on("click", function(){
      $(".empty_box").empty();
   })
})
//ex-32 click the button to  background color show
$(document).ready(function(){
   $("#btn_bgShow").on("click", function(){
      alert("Background Color:    " +   $("#bgShow").css("background-color"));
   });
   $("#bgShow").on("dblclick", function(){
      alert("Color:    " +   $("#bgShow").css("color"));
   });

})
