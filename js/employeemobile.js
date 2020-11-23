$(document).ready(function () {
    
    emp_id = "5f0da2976d1e74002493fa48";

    loadleave();
    loadmemo();
    
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
                console.log(data)
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#leave").text(0);   
                    }
                    $("#leave").text(data.Count);
                }
                else{
                    $("#leave").text(0);
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
                console.log(data);
                if(data.isSuccess == true){
                    if(data.Data == null){
                        $("#memo").text(0);    
                    }
                    $("#memo").text(data.Count);
                }
                else{
                    $("#memo").text(0);  
                }
                for (i = data.Data.length - 1; i > 0; i--){
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