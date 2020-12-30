$(document).ready(function () {

    // var emp_id = localStorage.getItem("empid");
    // console.log(emp_id);
    const ad_params = new URLSearchParams(window.location.search);
    const admin_Param = ad_params.get('id');
    final = admin_Param.slice(1,-1);
    emp_id = final;
    var ein=0;
    var eout=0;
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
            url: "http://15.206.236.83/api/dashboard/getempdataWeb",
            data : {
                "adminLoginId" : emp_id
            },
            dataType: "json",
            cache: false,
            success: function(data){
                console.log(data);
                var res = data.Data.Attendance;
                var mem = data.Data.MemoData;
                var lea = data.Data.LeaveData;
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
                    if(data.Data.Attendance[i].Status == "in"){
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
                for (i = 0; i < data.Data.MemoData.length; i++){
                    $("#displaydata_memo").append(
                            "<tr><td>" +
                            mem[i].Eid.Name +
                            "</td><td>" +
                            mem[i].ReasonSend+
                            "</td><td>"+
                            mem[i].Status+
                            "</td><td>"+
                            mem[i].Type+
                            "</td></tr>"
                    );
                }
                for (i = 0; i < data.Data.LeaveData.length; i++){
                    $("#displaydata_leave").append(
                            "<tr><td>" +
                            lea[i].EmployeeId.Name +
                            "</td><td>" +
                            lea[i].Description+
                            "</td><td>"+
                            lea[i].Reason.MasterName+
                            "</td><td>"+
                            convertdateformate(lea[i].StartDate)+
                            "</td><td>"+
                            convertdateformate(lea[i].EndDate)+
                            "</td><td>"+
                            lea[i].LeaveStatus+
                            "</td></tr>"
                    );
                }
            }
        })
    }
});