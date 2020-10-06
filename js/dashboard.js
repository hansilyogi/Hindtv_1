$(document).ready(function(){
    loaddata();
    function loaddata(){
        console.log("word");
        $.ajax({
            type:"POST",
            url: $("#website-url").attr("value") + "dashboard",
            data : {
                type:"getempdata",
            },
            beforeSend: function () {
                $("#displaydata").html(
                  '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
                );
              },
            success: function(data){
                console.log(data);
                $("#displaydata").html("");
                if(data.isSuccess == true){
                    for(i=0;i<data.Data.length;i++){
                        $("#displaydata").append(
                            "<tr><td>" +
                              data.Data[i]["SubCompanyName"] +
                              "</td><td>" +
                              data.Data[i]["Attendance"] +
                              "</td></tr>"
                          );
                    }
                }
                else {
                    $("#displaydata").html(
                      '<tr><td colspan="5" class="text-center font-weight-bold">' +
                        data.Message +
                        "</td></tr></center>"
                    );
                }
            },

        });
    }
});
