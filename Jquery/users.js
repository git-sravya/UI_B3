$(function()
{

    $('#btn1').click(function(){

        $.ajax({
            type:'GET',
            url:'https://jsonplaceholder.typicode.com/users?name='+$('#txt1').val(),
            success:function(data){
               
              //   $.each(data,function(i,item){
                    $('table').append('<tr><td>'+item.name+'</td><td>'
                            +item.username+'</td><td>'+item.email+'</td></tr>')
                    console.log(data);
                   
                // })
                
            },
            error:function()
            {
                console.log('error occured');
            }
    
        });
    })
    

$.ajax({
    type:'GET',
    url:'https://jsonplaceholder.typicode.com/users/',
    sucess:function(data){
        console.log('hi')
    $.each(data,function(i,item){  
        console.log(item)      
            // $('table').append('<tr><td>'+item.name+'</td><td>'
            //             +item.username+'</td><td>'+item.email+'</td></tr>')
    })

    },
    error:function(){
        console.log('error')
    }
})

})