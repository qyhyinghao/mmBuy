$(function(){
//	$().dropdown('toggle');
	console.log(3445);
	
	var category = GetQueryString("category");
	var categoryId = GetQueryString("categoryId");
	console.log(category);
	console.log(categoryId);
	
});



function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}