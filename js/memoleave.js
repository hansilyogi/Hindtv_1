$(document).ready(function () {

    var emp_id = localStorage.getItem("empid");
    console.log(emp_id); 
    var ein=0;
    var eout=0;
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
                for (i = 0; i < data.Data.Attendance.length; i++){
                    if(data.Data.LeaveData[i].Status == "in"){
                        ein++;
                        $("#displaydata_in").append(
                            "<tr><td>" +
                            res[i].EmployeeId.Name +
                            "</td><td>" +
                            res[i].AttendanceType+
                            "</td><td>"+
                            res[i].Time+
                            "</td><td>"+
                            res[i].WifiName+
                            "</td></tr>"
                        );
                    }
                }
                for (i = 0; i < data.Data.Attendance.length; i++){
                    if(data.Data.Attendance[i].Status == "out"){
                        eout++;
                        $("#displaydata_out").append(
                            "<tr><td>" +
                            res[i].EmployeeId.Name +
                            "</td><td>" +
                            res[i].AttendanceType+
                            "</td><td>"+
                            res[i].Time+
                            "</td><td>"+
                            res[i].WifiName+
                            "</td></tr>"
                        );
                    }
                }
                if(data.isSuccess == true){
                    if(data.EmployeeCount == 0){
                        $('#dutyin').text(0);
                        $('#dutyout').text(0);
                        $('#empmemo').text(0);
                        $('#empleave').text(0);
                    }
                    else{
                        $('#dutyin').text(ein);
                        $('#dutyout').text(eout);
                        $('#empmemo').text(data.MemoCount);
                        $('#empleave').text(data.LeaveCount);
                    }
                }
            }
        })
    }
});