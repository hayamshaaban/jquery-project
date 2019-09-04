
    


    $("#openicon").click(function(){
        let opW=$("#menu-box").outerWidth()
        if($("#openicon").css("left")=='0px')
        {
            $("#openicon").animate({left:'+'+opW},1000);
            $("#menu-box").show(500);
        }
        else{
            $("#openicon").animate({left:'0'},1000);
        }
    })
    $(" #close").click(function(){
        $("#menu-box").hide(500);
        $("#openicon").animate({left:'0'},1000);
    })
    


    $("#singerone").click(function(){
        $("#singerp1").slideToggle(1000);
        $("#singerp2").hide(1000);
        $("#singerp3").hide(1000);
        $("#singerp4").hide(1000)
    })
    $("#singertwo").click(function(){
        $("#singerp2").slideToggle(1000)
        $("#singerp1").hide(1000)
        $("#singerp3").hide(1000)
        $("#singerp4").hide(1000)
    
    })
    $("#singerthree").click(function(){
        $("#singerp3").slideToggle(1000)
        $("#singerp1").hide(1000)
        $("#singerp2").hide(1000)
        $("#singerp4").hide(1000)
    
    })
    
    $("#singerfour").click(function(){
        $("#singerp4").slideToggle(1000)
        $("#singerp2").hide(1000)
        $("#singerp3").hide(1000)
        $("#singerp1").hide(1000)
    
    })



   
    
    // Set the date we're counting down to
var countDownDate = new Date("August 26, 2020 1:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(seconds <10){
    seconds="0"+seconds;
  }

  // Display the result in the element with id="demo"
 
  $("#countDay").html(days+ " D ");
  $("#countHour").html(hours+ " H ");
  $("#countMiunte").html(minutes+ " M ");
  $("#countSecond").html(seconds+ " S ");


  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    $("#countDay #countHour #countMiunte #countSecond ").html("Expired");
  }
}, 1000);
    























    
        
    //char remaining
    $(function(){
    let max=200;
    $('textarea').keyup(function(){
    let length= $(this).val().length;
    let remainChara=max-length;
    $("#char").text(remainChara);
    });
    
    })