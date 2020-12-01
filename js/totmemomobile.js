$(document).ready(function () {

    var emp_id = localStorage.getItem("empid");
    console.log(emp_id); 

    admin_company();

    function admin_company(){
        $.ajax({
            type:"POST",
            url: `https://hindtv.herokuapp.com/api/dashboard/getempdataWeb`,
            data : {
                "adminId" : emp_id
            },
            dataType: "json",
            cache: false,
            success: function(data){
                var res = data.Data.MemoData;
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#admin_1").text(0);    
                    }
                    $("#admin_1").text(data.Data.AdminName[0].name);
                }
                else{
                    $("#admin_1").text(0);  
                }
                if(data.isSuccess == true){
                    if(data.MemoCount == 0){
                        $('#totalemp').text(0);
                    }
                    else{
                        $("#totalemp").text(data.MemoCount);
                    console.log(data.Data.MemoCount);

                    }
                }
                for(i = 0; i < data.Data.MemoData.length; i++){
                    $("#displaydata_m").append(
                        "<tr><td>" +
                          res[i].Date +
                          "</td><td>" +
                          res[i].Eid+
                          "</td><td>"+
                          res[i].Reason+
                          "</td><td>"+
                          res[i].Type+
                          "</td><td>"+
                          res[i].Status+
                          "</td></tr>"
                      );
                }
            }
        })
    }
});