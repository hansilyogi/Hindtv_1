$(document).ready(function(){
    loaddata();
    loadmemo();
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
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"countmemo",
                token: $("#website-token").attr("value"),
            },
            dataType: "json",
            cache: false,
            success: function(data){
              console.log(data);
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
    }function countgpsemp(){
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
    }function countwifiemp(){
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
    // document.getElementById("startdate").setAttribute('min', today);
    // document.getElementById("enddate").setAttribute('min',today);

    //load data 
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
            console.log(data);
              $("#displaydata").html("");
              for (i = 0; i < data.Data.length; i++) {   
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
                    "</td><td>" +
                    data.Data[i].SubCompany.Name +
                    "</td><td>"+
                    data.Data[i].Reason.MasterName+
                    "</td><td>"+
                    data.Data[i]["LeaveType"]+
                    "</td><td>"+
                    data.Data[i]["LeaveStatus"]+
                    "</td><td>"+
                    '<a id="edit-data" href="leaveAction.php?id=' +
                    data.Data[i]["_id"] +
                    '"><i class="fas fa-edit" aria-hidden="true"></i></a>' +
                    "</td></tr>"
                );
            }
            
          }
        },
      });
    }
    
    //change value on subcompany master's value selection
      
  
    //change value on company master's value selection
    
    //Insert value in data base
    $(document).on("click","#btn-submit",function(e){
        e.preventDefault();        
          $.ajax({
          type:"POST",
          url:$("#website-url").attr("value")+ "leaveform",
          data: {
            type:"update",
            id:UPDATEID,
            status:$("#leavestatus").val(),
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
            if(data.isSuccess ==  true){
              $("form")[0].reset();
              $("#staticmessage")
              .removeClass("text-success text-danger")
              .addClass("text-success font-weight-bold");
            $("#staticmessage").html(data["Message"]).fadeOut(10000);
            $.when($("#staticmessage").fadeOut()).then(function () {
              $("#staticmessage").html("");
              $("#staticmessage").removeAttr("style");
              $("#staticmessage");
            });
            }
            loaddata();
          },
          complete: function () {
            $("#btn-submit-on").html(
              '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>' +
                '<button type="submit" class="btn btn-danger ml-1" id="btn-cancel">Cancel</button>'
            );
          },
        });
    });
    var startdate,enddate;
//edit button function for update value
    $(document).on("click", "#edit-data", function (e) {
        e.preventDefault();
        var id = $(this).attr("href").split("=")[1];
        $.ajax({
          type: "POST",
          url: $("#website-url").attr("value") + "leaveform",
          data: { type: "getsingledata", id: id,token: $("#website-token").attr("value") },
          dataType: "json",
          cache: false,
          success: function (data) {
            if (data.isSuccess == true) {
              UPDATEID = id;
              $("#companyname").val(data.Data[0].Company.Name);
              $("#subcompanyname").val(data.Data[0].SubCompany.Name);
              $("#employeename").val(data.Data[0].EmployeeId.Name);
              $("#leavereasonname").val(data.Data[0].Reason.MasterName);
              $("#startdate").val(reversedateFormate(data.Data[0].StartDate));
              $("#enddate").val(reversedateFormate(data.Data[0].EndDate));
              $("#leaveperiod").val(data.Data[0].LeavePeriod);
              $("#leavetype").val(data.Data[0].LeaveType);
              $("#description").val(data.Data[0].Description);
              
              window.scrollTo(0, 0);
              $("#btn-submit-on").html(
                "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
                  "<button type='submit' class='btn btn-danger ml-1'id='btn-cancel'>Cancel</button>"
              );
            }
          },
        });
      });

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
