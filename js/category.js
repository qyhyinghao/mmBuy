  /**
   * category.js文件
   */ 

    $(function(){
        $.ajax({
            type:'get',
            url:'http://182.254.146.100:3000/api/getcategorytitle',
            dataType:'json',
            success:function(data){
                console.log('------------------------------------');
                console.log(data);
                console.log('------------------------------------');
                var html = template('categoryTemp',data);
                $("#accordion").html(html);
                // $("#accordion .panel-heading:first-of-type").on("click",function(){
                // 	var parent = $(this).parent();
                // 	$.ajax({
                // 		type:'get',
                // 		url:'http://182.254.146.100:3000/api/getcategory',
                // 		data:{
                // 			titleid:$(this).attr("titleId")
                // 		},
                // 		dataType:'json',
                // 		success:function(data){
                // 			console.log('------------------------------------');
                // 			console.log(data);
                // 			console.log('------------------------------------');
                // 			var html = template('getcategoryTemp',data);
                // 			parent.find(".row").html(html);
                // 			console.log('------------------------------------');
                // 			console.log(data);
                // 			console.log('------------------------------------');

                // 		}
                // 	});
                // }).trigger("click");
                $("#accordion .panel-heading").on("click",function(){
                    var parent = $(this).parent();
                    $.ajax({
                        type:'get',
                        url:'http://182.254.146.100:3000/api/getcategory',
                        data:{
                            titleid:$(this).attr("titleId")
                        },
                        dataType:'json',
                        success:function(data){
                            console.log('------------------------------------');
                            console.log(data);
                            console.log('------------------------------------');
                            var html = template('getcategoryTemp',data);
                            parent.find(".row").html(html);
//                          console.log(parent.find(".row"));
//                          var a = parent.find(".row").find("a");
//                          console.log(a);
//                          a.on("click",function(){
//                          	
//                          })
                        }
                    });
                });
            }

        });
    });
