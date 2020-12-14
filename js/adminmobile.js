$(document).ready(function () {
    
    const ad_params = new URLSearchParams(window.location.search);
    const admin_Param = ad_params.get('id');
    final = admin_Param.slice(1,-1);
    emp_id = final;

    admin_company();
    
    function admin_company(){
        $.ajax({
            type:"POST",
            url: "http://hindtv.herokuapp.com/api/dashboard/getempdataWeb",
            data : {
                "adminId" : emp_id
            },
            dataType: "json",
            cache: false,
            success: function(data){
                var res = data.Data.Absent;
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
                        $("#totalemp").text(0);
                        $("#memo").text(0);
                        $("#leavecount").text(0);
                    }
                    else{
                        $("#present").text(data.AttendanceCount);
                        $("#totalemp").text(data.EmployeeCount);
                        $("#memo").text(data.MemoCount);
                        $("#leavecount").text(data.LeaveCount);

                    }
                }
            }
        })
    }

    function loadpresent(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getempdata",
                token: $("#website-token").attr("value"),
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#present").text(0);    
                    }
                    $("#present").text(data.Data);
                }
                else{
                    $("#present").text(0);  
                }
            },
        });
    }

    function loadmemo(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "attendance/memoExist",
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#memo").text(0);    
                    }
                    $("#memo").text(data.Data.length);
                }
                else{
                    $("#memo").text(0);  
                }
            },
        });
    }

    function countleave(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"countleave",
                token: $("#website-token").attr("value"),
            },
            dataType: "json",
            cache: false,
            success: function(data){
            //   console.log(data);
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#leavecount").text(0);    
                    }
                    $("#leavecount").text(data.Data);
                }
                else{
                    $("#leavecount").text(0);  
                }
            },
        });
    }


    function loadleaveonemployee(){
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "adminmobile",
            data: { type: "employeeonleave", 
            token: TOKEN,
            },
            dataType: "json",
            cache: false,
            success: function (data) {
                // console.log(data);
                if (data.isSuccess == true) {
                    $("#leave").text(data.Data);
                }
                countleaveapply();
            }
        });
    }
    function countleaveapply(){
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "adminmobile",
            data: { type: "countleave", 
            token: TOKEN,
            },
            dataType: "json",
            cache: false,
            success: function (data) {
                // console.log(data);
                if (data.isSuccess == true) {
                    $("#leaverequest").text(data.Data);
                }
                countmemorequest();
            }
        });
    }
    function countmemorequest(){
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "adminmobile",
            data: { type: "memoissued", 
            token: TOKEN,
            },
            dataType: "json",
            cache: false,
            success: function (data) {
                if (data.isSuccess == true) {
                    $("#memorequest").text(data.Data);
                }
            }
        });
    }
});