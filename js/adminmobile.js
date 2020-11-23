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
    loadpresent();
    loadmemo();
    countleave();
    
    function loadname(){
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

    // function loadpresentEmployee(){
    //     console.log("asdddss");
    //     $.ajax({
    //         type: "POST",
    //         url: "http://hindtv.herokuapp.com/api/login/getName/5f0da0f5115d4a93ec03fe5e",
    //         dataType: "json",
    //         cache: false,
    //         success: function (data) {
    //             console.log(data);
    //             if (data.isSuccess == true) {
    //                 console.log("asd");
    //                 $("#admin_1").text("Welcome" + data.Data.Name);
    //             }
    //             loadleaveonemployee();
    //         }
    //     });
    // }

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