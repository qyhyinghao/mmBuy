$(function(){
    console.log('------------------------------------');
    console.log(1234);
    console.log('------------------------------------');
    /* items模块的ajax请求开始 */
    $.ajax({
        type:'get',
        url:'http://182.254.146.100:3000/api/getindexmenu',
        dataType:'json',
        success:function(data){

            console.log('------------------------------------');
            console.log(data);
            console.log('------------------------------------');

            //data.result.img = data.result.images;
            var html = template('menuTemp',data);
            $("#items .row").html(html);

            $("#items .row>div:nth-of-type(8)").on("click",function(){
                console.log('------------------------------------');
                console.log("click");
                console.log('------------------------------------');
                $("#items .row>div:nth-last-of-type(-n+4)").slideToggle();
                
            });
            

        }
    });
    /* items模块的ajax请求结束 */
    /* recommend模块的ajax请求 */
    $.ajax({
        type:'get',
        url:'http://182.254.146.100:3000/api/getmoneyctrl',
        dataType:'json',
        success:function(data){
            console.log('------------------------------------');
            console.log(data);
            console.log('------------------------------------');
            var html = template('recommendTemp',data);
            $("#recommend .recommend-list").html(html);
        }
    });
    /* recommend模块的ajax请求结束 */
});
