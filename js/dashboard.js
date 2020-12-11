$(document).ready(function(){
    loaddata();
    loadmemo_data();
    // loadmemo();
    countgpsemp();
    countwifiemp();
    getempdata();
    countleave();
    display_leave();


    function loaddata(){
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
              console.log(data);
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#present").text(0);    
                    }
                    $("#present").text(++data.Data);
                }
                else{
                    $("#present").text(0);  
                }
            },
        });
    }

    function loadmemo_data(){
      $.ajax({
        type:"POST",
        url: $("#website-url").attr("value") + "attendance/memoExist",
        dataType: "json",
        cache: false,
        success:function(data){
          // console.log(data);
          if(data.isSuccess ==  true){
            $("#memo").text(data.Data.length);
            $("#displaydata").html("");
            for(i = 0; i <= data.Data.length; i++) { 
              // console.log(data.Data.length);
              if(data.Data[i]["Eid"]==null || data.Data[i]["Eid"] == "-" || data.Data[i]["Eid"] == undefined ){
                i--;
              } 
              else{
                  data.Data[i]["Eid"] =
                  data.Data[i]["Eid"] == undefined
                    ? "-"
                    : data.Data[i]["Eid"];
  
                    data.Data[i]["Status"] =
                    data.Data[i]["Status"] == "false"
                    ? "-"
                    : data.Data[i]["Status"];
  
                    data.Data[i]["Date"] =
                    data.Data[i]["Date"] == undefined
                      ? "-"
                      : convertdateformate(data.Data[i]["Date"]);
    
                    data.Data[i]["Reason"] = 
                      data.Data[i]["Reason"] == undefined
                      ? "-"
                      : data.Data[i]["Reason"];

                  $("#displaydata_m").append(
                    "<tr><td>" +
                      data.Data[i]["Eid"].Name +
                      "</td><td>" +
                      data.Data[i]["Eid"].SubCompany.Name +
                      "</td><td>" +
                      convertdateformate(data.Data[i]["Date"]) +
                      "</td><td>" +
                      data.Data[i]["Reason"]+
                      "</td><td>"+
                      data.Data[i]["Type"]+
                      "</td><td>"+
                      data.Data[i]["Status"]+
                      "</td><td>"+
                      '<a id="approve_m" href="memodetails.php?id=' +
                      data.Data[i]["_id"] +
                      '"><button class="btn btn-primary" style="">Approve</button></a>' +"  "+
                      '<a id="disapprove_m" href="memodetails.php?id=' +
                      data.Data[i]["_id"] +
                      '"><button class="btn btn-danger" style="widht:50px">Disapprove</button></a>' +
                      "</td></tr>"
                  );
                }
              }
          }
        },
      });
    }

    $(document).on("click", "#approve_m",function(e){
      e.preventDefault();
      var id = $(this).attr("href").split("=")[1];
      $.ajax({
        type:"POST",
        url: $("#website-url").attr("value") + "memo",
        data: {
          "type" : "updatedata",
          "id" : id,
          "status" : "Approved",
          token: $("#website-token").attr("value")
          },
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#btn-submit").html(
            '<button class="btn btn-primary float-right" type="button">\
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
            Loading...\
            </button>'
          );
        },
        success: function(data){
          if(data.isSuccess == true){
            location.reload();
          }
        }
      });
    });

    $(document).on("click", "#disapprove_m",function(e){
      e.preventDefault();
      var id = $(this).attr("href").split("=")[1];
      $.ajax({
        type:"POST",
        url: $("#website-url").attr("value") + "memo",
        data: {
          "type" : "updatedata",
          "id" : id,
          "status" : "Rejected"
          },
        dataType: "json",
        cache: false,
        success: function(data){
          if(data.isSuccess == true){
            location.reload();
          }
        }
      });
    });
  
    // $(document).on("click", "#disapprove_m",function(){
    //   console.log('Memo undone');
    // });

    function loadmemo(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"countmemo",
                token: $("#website-token").attr("value"),
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#memo").text(0);    
                    }
                    $("#memo").text(data.Data);
                }
                else{
                    $("#memo").text(0);  
                }
            },
        });
    }
    
    function countgpsemp(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getgpsemp",
                token: $("#website-token").attr("value"),
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#gpsemployee").text(0);    
                    }
                    $("#gpsemployee").text(data.Data);
                }
                else{
                    $("#gpsemployee").text(0);  
                }
            },
        });
    }
    
    function countwifiemp(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getwifiemp",
                token: $("#website-token").attr("value"),
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#wifiemployee").text(0);    
                    }
                    $("#wifiemployee").text(data.Data);
                }
                else{
                    $("#wifiemployee").text(0);  
                }
            },
        });
    }
    
    function getempdata(){
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getempnum",
                token: $("#website-token").attr("value"),
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#employee").text(0);    
                    }
                    $("#employee").text(data.Data);
                }
                else{
                    $("#employee").text(0);  
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
              // console.log(data);
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
    var today = new Date().toISOString().split('T')[0];

    function display_leave(){
      $.ajax({
        type:"POST",
        url:$("#website-url").attr("value")+ "leaveform",
        data: {
          type:"getdata",
          token: $("#website-token").attr("value"),
        },
        success:function(data){
          if(data.isSuccess ==  true){
            // console.log(data);
            $("#displaydata_h").html("");
            for (i = 0; i < data.Data.length; i++) {
              if(data.Data[i]["LeaveStatus"] == "Pending"){
              data.Data[i]["EmployeeId"] =
                data.Data[i]["EmployeeId"] == undefined
                  ? "-"
                  : data.Data[i]["EmployeeId"];
  
                  data.Data[i]["SubCompany"] =
                data.Data[i]["SubCompany"] == undefined
                  ? "-"
                  : data.Data[i]["SubCompany"];
  
                  data.Data[i]["Reason"] =
                data.Data[i]["Reason"] == undefined
                  ? "-"
                  : data.Data[i]["Reason"];
  
                  data.Data[i]["StartDate"] =
                  data.Data[i]["StartDate"] == undefined
                    ? "-"
                    : convertdateformate(data.Data[i]["StartDate"]);
  
                  data.Data[i]["EndDate"] =
                  data.Data[i]["EndDate"] == undefined
                    ? "-"
                    : convertdateformate(data.Data[i]["EndDate"]);
  
                    data.Data[i]["LeaveStatus"] =
                    data.Data[i]["LeaveStatus"] == undefined
                      ? "Pending"
                      : data.Data[i]["LeaveStatus"];
              $("#displaydata_h").append(
                "<tr><td>" +
                  data.Data[i]["EmployeeId"].Name +
                  "</td><td>"+
                  data.Data[i]["LeaveType"]+
                  "</td><td>"+
                  data.Data[i].Reason.MasterName+
                  "</td><td>" +
                  convertdateformate(data.Data[i]["StartDate"]) +
                  "</td><td>" +
                  convertdateformate(data.Data[i]["EndDate"]) +
                  "</td><td>"+
                  data.Data[i]["LeaveStatus"]+
                  "</td><td>"+
                  '<a id="approve" href="leaveAction.php?id=' +
                  data.Data[i]["_id"] +
                  '"><button class="btn btn-primary" style="widht:50px">Approve</button></a>' +"  "+
                  '<a id="disapprove" href="leaveAction.php?id=' +
                  data.Data[i]["_id"] +
                  '"><button class="btn btn-danger" style="widht:50px">Disapprove</button></a>' +
                  "</td></tr>"
              );
            }
           }
          }
        },
      });
    }

    $(document).on("click", "#approve", function (e) {
      e.preventDefault();        
      var id = $(this).attr("href").split("=")[1];
      $.ajax({
      type:"POST",
      url:$("#website-url").attr("value")+ "leaveform",
      data: {
        type:"update",
        id:id,
        status:"Approved",
        token: $("#website-token").attr("value")
      },
      beforeSend: function () {
        $("#btn-submit").html(
          '<button class="btn btn-primary float-right" type="button">\
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
          Loading...\
          </button>'
        );
      },
      success:function(data){
        // console.log(data);
        if(data.isSuccess ==  true){
          countleave();
          display_leave();
        }
      },
      });
    });
    
    $(document).on("click", "#disapprove", function (e) {
      e.preventDefault();        
      var id = $(this).attr("href").split("=")[1];
      $.ajax({
      type:"POST",
      url:$("#website-url").attr("value")+ "leaveform",
      data: {
        type:"update",
        id:id,
        status:"Rejected",
        token: $("#website-token").attr("value")
      },
      beforeSend: function () {
        $("#btn-submit").html(
          '<button class="btn btn-primary float-right" type="button">\
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
          Loading...\
          </button>'
        );
      },
      success:function(data){
        // console.log(data);
        if(data.isSuccess ==  true){
          countleave();
          display_leave();
        }
      },
    });
  });

  var startdate,enddate;

//check validation
    function validation(){
      var stdate = document.getElementById("startdate").value;
      var eddate = document.getElementById("enddate").value;
      var today = new Date();
      if (Date(stdate) < today || Date(eddate) < today) {
        return false;
      }
      else if($("#startdate").val() === "" &&  $("#enddate").val() === ""){
        return false;
      }
      else if(new Date(stdate).getTime() > new Date(eddate).getTime()){
        return false;
      }
      return true;
    }
// convert date into 
    function convertdateformate(date){
        if(date.includes('T')){
          date = date.split('T')[0];
          date = date.split('-');
          date = date[2]+'/'+date[1]+'/'+date[0];
        }
        return date;
    }
//convert into dd/mm/yyyy formate
    function reversedateFormate(date){
        date = date.split('T')[0];
        date = date.split("-");
        date = date[0]+'-'+date[1]+'-'+date[2];
        return date;
    }

});
