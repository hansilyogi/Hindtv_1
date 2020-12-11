<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      #map {
        height: 400px;
        width: 100%;
      }
    </style>
</head>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">Present - 
                                <label class="Sright" id="present" name="present" text="0"></label></h1>
                            </div>
                        </div>

                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Designation</th>
                                        <th>Mail</th>
                                        <th>Mobile</th>
                                        </tr>
                                    </thead>
                                    <tbody id="displaydata_e"></tbody>
                                </table>
                            </div>
                        </div><br>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/totalempmobile.js"></script>
    </body>
</html> -->

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      #map {
        height: 400px; 
        width: 100%;
      }
    </style>
</head>
<?php include('headermobile.php'); ?>
    <body class="hold-transition sidebar-mini" style="font-size:15px">
        <div class="wrapper">
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark" style="font-size:20px">Admin Dashboard</h1>
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="col-lg-5 col-12">
                                <div class="small-box shadow" style="background-color:#ede6e1">
                                    <div class="icon">
                                        <i class="fas fa-user-cog" style="color:black"></i>
                                    </div>
                                    <div class="inner">
                                        <h3><label class="right" style="font-size:25px"> Welcome </label></h3>
                                        <b><h4 class="text-dark" style="color:black;font-size:25px" id="admin_1" text="0"></b></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row"> 
                            <div class="col-lg-4 col-6">
                                <a href="">
                                <div class="small-box" style="background-color:#008B8B; height:100px;">
                                    <div class="icon">
                                        <i class="fas fa-user" style="color:black; font-size:20px"></i>
                                    </div>
                                    <div class="inner">
                                        <h3><label class="badge badge-primary right" style="font-size:20px" id="dutyin" name="dutyin" text="0"></label></h3>
                                        <h4 class="text-dark p-1" style="color:black; font-size:20px"><b> DUTY-IN </b></h4>
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-6">
                                <a href="">
                                <div class="small-box" style="background-color:#008B8B; height:100px;">
                                    <div class="icon">
                                        <i class="fas fa-sticky-note" style="color:black; font-size:20px"></i>
                                    </div>
                                    <div class="inner">
                                        <h3><label class="badge badge-danger right" style="font-size:20px" id="dutyout" name="dutyout" text="0"></label></h3>
                                        <h4 class="text-dark p-1" style="font-size:20px; color:black"><b>DUTY-OUT</b></h4>
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-6">
                                <a href="">
                                <div class="small-box" style="background-color:#008B8B; height:100px;">
                                    <div class="icon">
                                        <i class="fas fa-user" style="color:black"></i>
                                    </div>
                                    <div class="inner">
                                        <h3><label class="badge badge-success right" style="font-size:20px" id="empmemo" name="empmemo" text="0"></label></h3>
                                        <h4 class="text-dark p-1" style="color:black; font-size:20px"><b>MEMO</b></h4>
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div class="col-lg-4 col-6">
                                <a href="">
                                <div class="small-box" style="background-color:#008B8B; height:100px;">
                                    <div class="icon">
                                        <i class="fas fa-sticky-note" style="color:black"></i>
                                    </div>
                                    <div class="inner">
                                        <h3><label class="badge badge-danger right" style="font-size:20px" id="empleave" name="empleave" text="0"></label></h3>
                                        <h4 class="text-dark p-1" style="font-size:20px; color:black"><b>LEAVE</b></h4>
                                    </div>
                                </div>
                                </a>
                            </div><br><hr>
                        </div><br><br>
                        <div class="row" style="width:100%;">
                            <div class="container">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a data-toggle="tab" href="#home">Duty-In</a></li>
                                    <li><a data-toggle="tab" href="#menu1"> Duty-Out </a></li>
                                    <li><a data-toggle="tab" href="#menu2">Memo</a></li>
                                    <li><a data-toggle="tab" href="#menu3">Leave</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div id="home" class="tab-pane active">
                                        <div class="card-body p-0">
                                            <h4><b>Today Duty-In</b></h4>
                                            <div class="table-responsive">
                                                <table class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Attendence Type</th>
                                                            <th>Time</th>
                                                            <th>Wifi-Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="displaydata_in"></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu1" class="tab-pane fade">
                                        <div class="card-body p-0">
                                            <h4><b>Today Duty-Out</b></h4>
                                            <div class="table-responsive">
                                                <table class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Attendence Type</th>
                                                            <th>Time</th>
                                                            <th>Wifi-Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="displaydata_out"></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu2" class="tab-pane fade">
                                        <div class="card-body p-0">
                                            <h4><b>Today's Memo</b></h4>
                                            <div class="table-responsive">
                                                <table class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Employee Name</th>
                                                            <th>Reason Send</th>
                                                            <th>Status</th>
                                                            <th>Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="displaydata_memo"></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu3" class="tab-pane fade">
                                        <div class="card-body p-0">
                                            <h4><b>Leave Application</b></h4>
                                            <div class="table-responsive">
                                                <table class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Desscription</th>
                                                            <th>Reason</th>
                                                            <th>Start-Date</th>
                                                            <th>End-Date</th>
                                                            <th>Leave Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="displaydata_leave"></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include('script.php'); ?>
        <script src="js/totalempmobile.js"></script>
    </body>
</html>