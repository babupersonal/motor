// JavaScript Document
$(function(){
	$(".box1").ready(function(){
		$(".box1").delay(3000).fadeOut(800);
	});
	$(".no").ready(function(){
		$(".no").delay(2500).fadeIn(800);
	});
	
	$(".t1").click(function(){
		$("html,body").animate({scrollTop:$(".t01").offset().top},1000);
	});
	$(".t2").click(function(){
		$("html,body").animate({scrollTop:$(".t02").offset().top},1000);
	});
	$(".t3").click(function(){
		$("html,body").animate({scrollTop:$(".t03").offset().top},1000);
	});
	$(".t4").click(function(){
		$("html,body").animate({scrollTop:$(".t04").offset().top},1000);
	});
	$(".t5").click(function(){
		$("html,body").animate({scrollTop:$(".t05").offset().top},1000);
	});
	$(".t6").click(function(){
		$("html,body").animate({scrollTop:$(".t06").offset().top},1000);
	});
	$(".box5btn").click(function(){
		$("html,body").animate({scrollTop:$(".t05").offset().top},1000);
	});
	$(".box8-2").click(function(){
		$("html,body").animate({scrollTop:$(".t01").offset().top},1000);
	});
	$(".b61").click(function(){
		alert("訂閱成功");
		$(".box6btn1").val("");
	});
	$(".b62").click(function(){
		$(".box6btn3").val("");
	});
	$(".b63").click(function(){
		alert("感謝你的參與");
		$(".box6btn3").val("");
	});
	
	$(".box5item2").hide();
	$(".box5item3").hide();
	$(".b51").click(function(){
		$(".box5item1").show();
		$(".box5item2").hide();
		$(".box5item3").hide();
	});
	$(".b52").click(function(){
		$(".box5item2").show();
		$(".box5item1").hide();
		$(".box5item3").hide();
	});
	$(".b53").click(function(){
		$(".box5item3").show();
		$(".box5item2").hide();
		$(".box5item1").hide();
	});
	
	$(".box8-3").hide();
	$(".box8-1").mousemove(function(){
		$(".box8-3").show(300);
	});
	$(".box8-3").mouseleave(function(){
		$(".box8-3").hide();
	});
	$(".b83").click(function(){
		$("p").remove(".box8-3-1 p");
		$("h4").remove(".box8-3-1 p");
		$(".box8btn").hide();
	});
	

	$(".b81").click(function(){
		$(".box8-3-1").prepend("<h4>目前會員招募即將開始，請稍後。</h4>");
		$(".box8-3-1").prepend("<p>會員申請</p>");
	});
	
	$(".box8btn").hide();
	$(".b82").click(function(){
		 $(".box8btn").show(); 
	});
	
	$(".b82").click(function(){
		$(".box8-3-1").prepend("<h4>我們會聽取你的意見盡快來做處理。</h4>");
		$(".box8-3-1").prepend("<p>意見回饋</p>");
	});

	
	
	
	$(".box8btn").click(function(){
		$("html,body").animate({scrollTop:$(".t05").offset().top},1000);
	});
	
	$(".box9item1").hide();
	$(".box9item2").hide();
	$(".box9item3").hide();
	$(".box9item4").hide();
	$(".box9item5").hide();
	$(".box9item6").hide();
	
	$(".b91").click(function(){
		$(".box9item1").hide();
		$(".box9item2").hide();
		$(".box9item3").hide();
		$(".box9item4").hide();
		$(".box9item5").hide();
		$(".box9item6").hide();
	});
	$(".b92").click(function(){
		alert("補貨中。。。。。。")
		$(".box9item1").hide();
		$(".box9item2").hide();
		$(".box9item3").hide();
		$(".box9item4").hide();
		$(".box9item5").hide();
		$(".box9item6").hide();
	});
	
	
	$(".b41").click(function(){
		$(".box9item1").show();
	});
	$(".b42").click(function(){
		$(".box9item2").show();
	});
	$(".b43").click(function(){
		$(".box9item3").show();
	});
	$(".b44").click(function(){
		$(".box9item4").show();
	});
	$(".b45").click(function(){
		$(".box9item5").show();
	});
	$(".b46").click(function(){
		$(".box9item6").show();
	});
	
	$(".box10item2").hide();
	
	$(".b101").click(function(){
		$(".box10item1").show();
		$(".box10item2").hide();
	});
	$(".b102").click(function(){
		$(".box10item2").show();
		$(".box10item1").hide();
	});
	
	$(".box11").click(function(){
		$("html,body").animate({scrollTop:$(".t03").offset().top},1000)
	});
	
	$(window).scroll(function(){
		var t=$(window).scrollTop();
		if (t>1000){
			$("").fadeIn(800);
		}
		else{
			$("").fadeOut(800);
		}
	});
	
	
	$(".c1").click(function(){
		var v1=parseFloat$(("#v1").val());
		var v1a=(v1)*599;
		pd1=parseFloat(v1);
		$(".p1").text(v1);
		$(".p1a").text(v1a);
		$(".p7a").text(pd1*599+pd2*599+pd3*599+pd4*599+pd5*599+pd6*599);
	});
	
	
});
pd1=0
pd2=0
pd3=0
pd4=0
pd5=0
pd6=0




var sm=43200;
	function ct(){
		sm -=1;
		var ck=document.getElementById("ck");
		var h=Math.floor(sm/3600);
		var m=Math.floor(Math.floor(sm%3600)/60);
		var s=sm%60;
		ck.innerHTML=h+"小時"+m+"分"+s+"秒";
	}
var mm=window.setInterval("ct()",1000);










