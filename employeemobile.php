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
                            <h1 class="m-0 text-dark">Employee Dashboard</h1>
                        </div>
                    </div>
                    <div class="row"> 
                        <div class="col-lg-5 col-12">
                            <!-- <div class="small-box shadow" style="background-color:#ede6e1"> -->
                            <div class="small-box shadow" style="background-color:#00bfff">
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
                <div class="col-lg-4 col-6">
                    <a href="#">
                    <div class="small-box" style="background-color:lightblue; height:150px;">
                        <div class="icon">
                            <i class="fas fa-user" style="color:black"></i>
                        </div>
                        <div class="inner">
                            <h3><label class="badge badge-primary right" id="leave" name="leave" text="0"></label></h3>
                            <h4 class="text-dark p-1" style="color:black"><b>Leave Request</b></h4>
                        </div>
                    </div>
                    </a>
                </div>
          
                <div class="col-lg-4 col-6">
                    <a href="#">
                    <div class="small-box" style="background-color:lightblue; height:150px;">
                        <div class="icon">
                            <i class="fas fa-sticky-note" style="color:black"></i>
                        </div>
                        <div class="inner">
                            <h3><label class="badge badge-danger right" id="memo" name="memo" text="0"></label></h3>
                            <h4 class="text-dark p-1" style="color:black"><b>Total Memo</b></h4>
                        </div>
                    </div>
                    </a>
                </div><br>
            </div>
            <div class="card-body p-0">
                <h4><b>All Leave Request</b></h4>
              <div class="table-responsive" style="height:200px;">
                <table class="table table-bordered table-hover table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Reason</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata_h"></tbody>
                </table>
              </div>
            </div><br>
            <div class="card-body p-0">
              <h4><b>All Memo's</b></h4>
              <div class="table-responsive" style="height:200px;">
                <table class="table table-bordered table-hover table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Reason</th>
                      <th>Duty Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata_m"></tbody>
                </table>
              </div>
            </div><br><br>
            </div>
        </div>
        <?php include('script.php'); ?>
    <script src="js/employeemobile.js"></script>
  </body>
</html>