$(document).ready(function () {
    // var TOKEN=$(location).attr("href").split("=")[1];
    // var TOKEN = $("#website-token").attr("value");
    // loadpresentEmployee();
    // countleaveapply();
    loadname();
    
    function loadname(){
        console.log("asdd");
        var name = '5f0da0f5115d4a93ec03fe5f';
        $.ajax({
            type:"POST",
            url: `http://hindtv.herokuapp.com/api/login/getName/${name}`,
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