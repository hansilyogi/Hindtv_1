<!DOCTYPE html>
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
<?php include('headermobile.php'); ?>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">Admin Dashboard</h1>
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="col-lg-5 col-12">
                                <div class="small-box shadow" style="background-color:#ede6e1">
                                    <div class="icon">
                                        <i class="fas fa-user-cog" style="color:black"></i>
                                    </div>
                                    <div class="inner">
                                        <h3><label class="right"> Welcome </label></h3>
                                        <b><h4 class="text-dark" style="color:black" id="admin_1" text="0"></b></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="card-body p-0">
                                <h4><b>Today Duty-Out</b></h4>
                                <div class="table-responsive" style="height:200px;">
                                    <table class="table table-bordered table-hover table-head-fixed text-nowrap">
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
                            </div><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include('script.php'); ?>
        <script src="js/totalempmobile.js"></script>
    </body>
</html>