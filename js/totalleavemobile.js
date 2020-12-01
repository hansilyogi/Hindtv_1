$(document).ready(function () {

    var emp_id = localStorage.getItem("empid");
    console.log(emp_id); 

    admin_company();

    function convertdateformate(date){
        if(date.includes('T')){
          date = date.split('T')[0];
          date = date.split('-');
          date = date[2]+'/'+date[1]+'/'+date[0];
        }
        return date;
    }

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
                var res = data.Data.LeaveData;
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
                    if(data.LeaveCount == 0){
                        $('#totalemp').text(0);
                    }
                    else{
                        $("#totalemp").text(data.LeaveCount);
                    console.log(data.Data.LeaveCount);

                    }
                }
                for(i = 0; i < data.Data.LeaveData.length; i++){
                    $("#displaydata_l").append(
                        "<tr><td>" +
                          res[i].EmployeeId +
                          "</td><td>" +
                          res[i].Description+
                          "</td><td>"+
                          convertdateformate(res[i].StartDate)+
                          "</td><td>"+
                          convertdateformate(res[i].EndDate)+
                          "</td><td>"+
                          res[i].LeaveStatus+
                          "</td></tr>"
                      );
                }
            }
        })
    }
});