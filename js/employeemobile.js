$(document).ready(function () {
    
    // emp_id = "5f0da2976d1e74002493fa48";
    emp_id = "5f4778062549e46190fec1c5";

    loadname();
    loadleave();
    loadmemo();

    // var jss = document.cookie;
    // console.log(jss);

    function loadname(){
        $.ajax({
            type:"POST",
            url: `http://hindtv.herokuapp.com/api/login/getName/${emp_id}`,
            dataType: "json",
            cache: false,
            success: function(data){
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
    
    function loadleave(){
        $.ajax({
            type:"POST",
            url: 'https://hindtv.herokuapp.com/api/employee/employeeLeave',
            data : {
                "EmpId": emp_id
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#leave").text(0);   
                    }
                    $("#leave").text(data.Count);
                }
                else{
                    $("#leave").text(0);
                }
                for (i = 0; i < data.Data.length; i++){
                    $("#displaydata_h").append(
                        "<tr><td>" +
                          convertdateformate(data.Data[i].ApplyDate) +
                          "</td><td>" +
                          data.Data[i].Description+
                          "</td><td>"+
                          data.Data[i].Reason.MasterName+
                          "</td><td>"+
                          data.Data[i].LeaveStatus+
                          "</td></tr>"
                      );
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

    function loadmemo(){
        $.ajax({
            type:"POST",
            url: 'https://hindtv.herokuapp.com/api/employee/employeeMemo',
            data : {
                "EmpId": emp_id
            },
            dataType: "json",
            cache: false,
            success: function(data){
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#memo").text(0);    
                    }
                    $("#memo").text(data.Count);
                }
                else{
                    $("#memo").text(0);  
                }
                for (i = 0; i < data.Data.length; i++){
                    $("#displaydata_m").append(
                        "<tr><td>" +
                          convertdateformate(data.Data[i].Date) +
                          "</td><td>" +
                          data.Data[i].Reason+
                          "</td><td>"+
                          data.Data[i].Type+
                          "</td><td>"+
                          data.Data[i].Status+
                          "</td></tr>"
                      );
                }
            },
        });
    }
});