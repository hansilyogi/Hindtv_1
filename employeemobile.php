<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      /* Set the size of the div element that contains the map */
      #map {
        height: 400px; /* The height is 400 pixels */
        width: 100%; /* The width is the width of the web page */
      }
    </style>
</head>
<?php include('header.php'); ?>
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
                <div class="col-lg-4 col-6">
                    <a href="#">
                    <div class="small-box" style="background-color:lightblue">
                        <div class="icon">
                            <i class="fas fa-user" style="color:black"></i>
                        </div>
                        <div class="inner">
                            <h3><label class="badge badge-primary right" id="leave" name="leave" text="0"></label></h3>
                            <h4 class="text-dark p-1" style="color:black"><b>Total Leave</b></h4>
                        </div>
                    </div>
                    </a>
                </div>
          
                <div class="col-lg-4 col-6">
                    <a href="#">
                    <div class="small-box" style="background-color:lightblue">
                        <div class="icon">
                            <i class="fas fa-sticky-note" style="color:black"></i>
                        </div>
                        <div class="inner">
                            <h3><label class="badge badge-danger right" id="memo" name="memo" text="0"></label></h3>
                            <h4 class="text-dark p-1"><b>Total Memo</b></h4>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <h4>All Memo's</h4>
                <table class="table table-bordered table-hover m-0 ">
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
            </div>
            </div>
        </div>
        <?php include('script.php'); ?>
    <script src="js/employeemobile.js"></script>
  </body>
</html>

