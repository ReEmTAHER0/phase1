function render(data){
    var html = "<div class='comentBox'><div class='leftPanelImg'><img src='pl.jpeg'/></div><div class='rightPanel'><span>"+data.subject+"</span><div class='cont'>"+data.submit+"</div><p>"+data.comment+"</p></div>";
        $('#container').append(html);
    }
    
    $(document).ready(function(){
    
        var coment = [
            {"subject": "Blog", "comment": "this is the first blog"}
        ];
    
        for(var i=0;i<coment.length;i++){
            render(coment[i]);
        }
    
    $('submit').click(function(){
       var addObj = {
           "subject": $('#subject').val(),
           "comment": $('#commentText').val()
           
       };
       coment.push(addObj);
       render(addObj);
       $('#subject').val('');
       $('#commentText').val('');
    })
    
    });
    