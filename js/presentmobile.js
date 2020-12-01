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
                console.log(data);
                var res = data.Data.Attendance;
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
                    if(data.EmployeeCount == 0){
                        $('#present').text(0);
                    }
                    else{
                        $("#present").text(data.AttendanceCount);
                    console.log(data.Data.AttendanceCount);

                    }
                }
                for(i = 0; i < data.Data.Attendance.length; i++){
                    $("#displaydata_p").append(
                        "<tr><td>" +
                          res[i].Date +
                          "</td><td>" +
                          res[i].EmployeeId.Name+
                          "</td><td>"+
                          res[i].Time+
                          "</td></tr>"
                      );
                }
            }
        })
    }
});