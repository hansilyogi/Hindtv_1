$(document).ready(function () {
  var COMPANY;
  var SUBCOMPANY;
  REMOVEFILTER = 0;
  // $("#startdate").val(createdate());
  // $("#enddate").val(createdate());

  // function createdate() {
  //   var month = d.getMonth() + 1;
  //   var day = d.getDate();
  //   date =
  //     d.getFullYear() +
  //     "-" +
  //     (month < 10 ? "0" : "") +
  //     month +
  //     "-" +
  //     (day < 10 ? "0" : "") +
  //     day;
  //   return date;
  // }

  loadcompany();


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
          for (i = 0; i < data.Data.length; i++) {
            $("#company").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                "</option>"
            );
          }
          subcompany();
        }
      },
    });
  }

  function subcompany() {
    var id = COMPANY;
    console.log(id);
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
          $("#subcompany").append(
            "<option value=0>All</option>"
          );
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
      beforeSend: function () {
        $("#displaydata").html(
          '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
        );
      },
      success: function (data) {
        if (data.isSuccess == true) {
          $("#displaydata").html("");
          if (data.Data.length > 0) {
            for (i = 0; i < data.Data.length; i++) {
              $("#displaydata").append(
                "<tr><td>" +
                  data.Data[i].Name +
                  "</td><td>" +
                  "<a href=attendance.php?id=" +
                  data.Data[i]._id +
                  ">View</a>" +
                  "</td></tr>"
              );
            }
          }
        } else {
          $("#displaydata").html(
            '<tr><td colspan="4" class="text-center font-weight-bold">No Records Found.</td></tr></center>'
          );
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

  $('#txt_searchemployee').keyup(function(){
    var search = $(this).val();
    $('table tbody tr').hide();
    var len = $('table tbody tr:not(.notfound) td:contains("'+search.charAt(0).toUpperCase()+'")').length;
    if(len > 0){
      $('table tbody tr:not(.notfound) td:contains("'+search.charAt(0).toUpperCase() + search.slice(1)+'")').each(function(){
        $(this).closest('tr').show();
      });
    }else{
      $('.notfound').show();
    }
  });

  $(document).on("click", "#btn-remove-filter", function (e) {
    e.preventDefault();
    REMOVEFILTER = 1;
    var id = $(location).attr("href").split("=")[1];
    if (id != undefined) {
      loadsingleemployee();
    } else {
      loaddata();
    }
  });

  $(document).on("click", "#btn-apply-filter", function (e) {
    console.log('asd');
    e.preventDefault();
    REMOVEFILTER = 0;
    var id = $(location).attr("href").split("=")[1];
    if (id != undefined) {
      loadsingleemployee();
    } else {
      loaddata();
    }
  });

});
