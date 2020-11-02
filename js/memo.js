$(document).ready(function () {
  var SUBCOMPANY;
  var EMPLOYEE;
  var d = new Date();
  $("#startdate").val(createdate());
  $("#enddate").val(createdate());

  loadcompany();
  loadmemo_data();

  function createdate() {
    var month = d.getMonth() + 1;
    var day = d.getDate();
    date =
      d.getFullYear() +
      "-" +
      (month < 10 ? "0" : "") +
      month +
      "-" +
      (day < 10 ? "0" : "") +
      day;
    return date;
  }

  function loadcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "company",
      data: { type: "getdata", token: $("#website-token").attr("value") },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#company").html("");
          COMPANY = data.Data[0]._id;
          subcompany();
        }
      },
    });
  }

  function subcompany() {
    var id = COMPANY;
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
      data: {
        type: "getsinglecompany",
        CompanyId: id,
        token: $("#website-token").attr("value"),
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#subcompany").html("");
          SUBCOMPANY = data.Data[0]._id;
          $("#subcompany").append('<option value=0>All</option>');
          SUBCOMPANY = $("#subcompany").val();
          for (i = 0; i < data.Data.length; i++) {
            $("#subcompany").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                "</option>"
            );
          }
          employee();
        }
      },
    });
  }

  function employee() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: {
        type: "getsubcompanyemployee",
        SubCompany: SUBCOMPANY,
        token: $("#website-token").attr("value"),
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#employee").html("");
          if (data.Data.length > 0) {
            EMPLOYEE = data.Data[0]._id;
            for (i = 0; i < data.Data.length; i++) {
              $("#employee").append(
                "<option value=" +
                  data.Data[i]._id +
                  ">" +
                  data.Data[i].Name +
                  "</option>"
              );
            }
          }
        }
      },
    });
  }

  $(document).on("change", "#company", function () {
    COMPANY = $("#company").val();
    subcompany();
  });
  $(document).on("change", "#subcompany", function () {
    SUBCOMPANY = $("#subcompany").val();
    employee();
  });

  $(document).on("click", "#btn-search-date", function (e) {
    e.preventDefault();
    val = validation();
    if (val == 1) {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "memo",
        data: {
          type: "datememo",
          startdate:
            $("#startdate").val().split("-")[2] +
            "/" +
            $("#startdate").val().split("-")[1] +
            "/" +
            $("#startdate").val().split("-")[0],
          enddate:
            $("#enddate").val().split("-")[2] +
            "/" +
            $("#enddate").val().split("-")[1] +
            "/" +
            $("#enddate").val().split("-")[0],
          employee: $("#employee").val(),
          token: $("#website-token").attr("value"),
        },
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#displaydata").html(
            "<tr><td colspan=6 class='text-center font-weight-bold'>Loading...</td></tr>"
          );
        },
        success: function (data) {
          console.log(data);
          $("#displaydata").html("");
          if (data.isSuccess == true) {
            if (data.Data.length > 0) {
              for (i = 0; i < data.Data.length; i++) {
                k = i + 1;
                var mess =
                  data.Data[i].Type == "in" ? "was late." : "went early.";
                $("#displaydata").append(
                  "<tr><td>" +
                    k +
                    "</td><td>" +
                    data.Data[i].Eid.Name +
                    "</td><td>" +
                    data.Data[i].Date +
                    "</td><td>" +
                    Math.abs(data.Data[i].Hour) +
                    " hr " +
                    Math.abs(data.Data[i].Minutes) +
                    " mn " +
                    mess +
                    "</td><td>" +
                    data.Data[i].Type +
                    "</td><td>" +
                    "<a target='_blank' href='memodetails.php?id=" +
                    data.Data[i]._id +
                    "'>View Here</a>" +
                    "</td><td>" +
                    data.Data[i].Status +
                    "</td></tr>"
                );
              }
            }
          } else {
            $("#displaydata").html(
              "<tr><td colspan=6 class='text-center font-weight-bold'>" +
                data.Message +
                "</td></tr>"
            );
          }
        },
      });
    }
  });

  function validation() {
    val = 1;
    if ($("#startdate").val() == "" || $("#enddate").val() == "") {
      toastr.error("Either Start Date or End Date is empty.");
      val = 0;
    }
    return val;
  }

  function loadmemo_data(){
    $.ajax({
      type:"POST",
      url:"http://hindtv.herokuapp.com/api/attendance/memoExist",
      dataType: "json",
      cache: false,
      success:function(data){
        console.log(data);
        if(data.isSuccess ==  true){
          $("#memo").text(data.Data.length);
          $("#displaydata_m").html("");
          for (i = data.Data.length - 1; i > 0; i--) { 
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
                    '"><button class="btn btn-primary" style="widht:50px">Approve</button></a>' +"  "+
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

  function convertdateformate(date){
    if(date.includes('T')){
      date = date.split('T')[0];
      date = date.split('-');
      date = date[2]+'/'+date[1]+'/'+date[0];
    }
    return date;
  }

});
