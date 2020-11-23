$(document).ready(function () {
    // var TOKEN=$(location).attr("href").split("=")[1];
    // var TOKEN = $("#website-token").attr("value");
    // loadpresentEmployee();
    // countleaveapply();

    const ad_params = new URLSearchParams(window.location.search);
    const admin_Param = ad_params.get('id');
    final = admin_Param.slice(1,-1);
    console.log(final);
    emp_id = final;


    loadname();
    admin_company();
    
    function loadname(){
        emp_id="5f382e0685312720209bbe2a"
        $.ajax({
            type:"POST",
            url: `http://hindtv.herokuapp.com/api/login/getName/${emp_id}`,
            dataType: "json",
            cache: false,
            success: function(data){
                console.log(data);
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#admin_1").text(0);    
                    }
                    $("#admin_1").text(data.Data[0].Name);
                }
                else{
                    $("#admin_1").text(0);  
                }
            },
        });
    }

    function admin_company(){
        $.ajax({
            type:"POST",
            url: `https://hindtv.herokuapp.com/api/dashboard/getempdataWeb`,
            data : {
                "adminId" : "5f382e0685312720209bbe2a"
            },
            dataType: "json",
            cache: false,
            success: function(data){
                console.log(data);
                if(data.isSuccess == true){
                    if(data.EmployeeCount == 0){
                        $('#present').text(0);
                        $("#totalemp").text(0);
                        $("#memo").text(0);
                        $("#leavecount").text(0);
                    }
                    else{
                        $("#present").text(data.EmployeeCount);
                        $("#totalemp").text(data.AttendanceCount);
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
              console.log(data);
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
                console.log(data);
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
                console.log(data);
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