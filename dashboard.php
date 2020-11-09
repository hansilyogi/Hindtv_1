<!DOCTYPE html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1">

<?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">DASHBOARD</h1>
              </div>
            </div>
            
            <div class="row"> 
              <div class="col-lg-4 col-6">
                <a href="attendance.php">
                <div class="small-box" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-user" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h3><label class="badge badge-primary right" id="present" name="present" text="0"></label></h3>
                    <h4 class="text-dark p-1" style="color:black"><b>Present</b></h4>
                  </div>
                </div>
                </a>
              </div>
          
              <div class="col-lg-4 col-6">
                <a href="memo.php">
                <div class="small-box" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-sticky-note" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h3><label class="badge badge-danger right" id="memo" name="memo" text="0"></label></h3>
                    <h4 class="text-dark p-1"><b>Memo Issue</b></h4>
                  </div>
                </div>
                </a>
              </div>
        
              <div class="col-lg-4 col-6">
                <a href="employeeview.php">
                <div class="small-box" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fas fa-users" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h3><label class="badge badge-success right" id="employee" name="employee" value="0">0</label></h3>
                    <h4 class="text-dark p-1"><b>Employee</b></h4>
                  </div>
                </div>
                </a>
              </div>

              <div class="col-lg-4 col-6">
                <a href="leaveAction.php">
                <div class="small-box" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-sticky-note" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h3><label class="badge badge-danger right" id="leavecount" name="leavecount" text="0"></label></h3>
                    <h4 class="text-dark p-1"><b>Pending Leave</b></h4>
                  </div>
                </div>
                </a>
              </div>
            </div>
            <hr>
            <h5><b>Attendance Detail</b></h5>
          <div class="row">
            <div class="col-lg-4 col-6">
              <div class="small-box shadow" style="background-color:#008B8B">
                <div class="icon">
                  <i class="fas fa-map-marker-alt" style="color:black"></i>
                </div>
                <div class="inner">
                  <h3><label class="badge badge-info right" id="gpsemployee" name="gpsemployee" value="0"></label></h3>
                  <h5>Attendance Via GPS</h5>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-6">
              <div class="small-box shadow" style="background-color:#008B8B">
                <div class="icon">
                  <i class="fas fa fa-wifi" style="color:black"></i>
                </div>
                <div class="inner">
                  <h3><label class="badge badge-warning right" id="wifiemployee" name="wifiemployee" value="0"></label></h3>
                  <h5>Attendance Via WiFi</h5>
                </div>
              </div>
            </div>
          </div><br>
            <br><hr>

            <div class="card-body p-0">
              <div class="table-responsive">
                <h4>Pending Leave Application</h4>
                <table class="table table-bordered table-hover m-0 ">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Leave Type</th>
                      <th>Reason</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata_h"></tbody>
                </table>
              </div>
            </div>
              <br>
              <hr>

            <div class="card-body p-0">
              <div class="table-responsive">
                <h4>Today's Memo</h4>
                <table class="table table-bordered table-hover m-0 ">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>SubCompany Name</th>
                      <th>Date</th>
                      <th>Reason</th>
                      <th>Duty Type</th>
                      <th>Status</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata_m"></tbody>
                </table>
              </div>
            </div>
            <br>
          </div>

          <hr>

            <h5><b>Administration & Report</b></h5>
            <div class="row">
              <div class="col-lg-4 col-6 h-auto">
                <div class="small-box shadow" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-user-cog" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h5><b>Employee Management</b>
                    <ul class="pt-2">
                    <a href="employeeview.php"><li class="text-dark p-1">View Employee</li></a>
                    <a href="employee.php"><li class="text-dark p-1">Add Employee</li></a>
                    <!-- <li href="#" class="text-dark">Invite Employee</li> --></h5>
                    <br>
                    </ul>
                  </div>
                </div>
              </div>
           

              <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-plane" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h5><b>Leave Management</b>
                    <ul class="pt-1">
                    <a href="leaveform.php"><li class="text-dark p-1">Leave Apply</li></a>
                        <!-- <a href="leaveform.php"><li class="text-dark p-1">Leave Status</li></a> -->
                        <!-- <a href="leaveAction.php"><li class="text-dark p-1">Action on Leave &nbsp<label class="badge badge-danger right" id="leavecount"></label></li></a> -->
                    <br>
                    </ul></h5>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-hourglass" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h5><b>Employee Attendance</b>
                    <ul class="pt-1">
                    <a href="attendance.php"><li class="text-dark p-1">Daily Attendance</li></a>
                    <a href="employeedetails.php"><li class="text-dark p-1">Attendance Record</li></a>
                      <!-- <a href="#"><li class="text-dark p-1">Leave Manage</li></a> -->
                    <br>
                    </ul></h5>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-sticky-note" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h5><b>Report & Memo</b>
                    <ul class="pt-1">
                    <a href="employeeattendance.php"><li class="text-dark p-1">View Report</li></a>
                    <a href="memo.php"><li class="text-dark p-1">View Memo</li></a>
                      <!-- <a href="memostatus.php"><li class="text-dark p-1">Memo Status</li></a> -->
                    </ul></h5>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-clock" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h5><b>Manage Shift</b>
                    <ul class="pt-1">
                    <a href="timing.php"><li  class="text-dark p-1">Create Shift</li></a>
                    <a href="timing.php"><li class="text-dark p-1">Manage Shift</li></a>
                    </ul></h5>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-map-marker-alt" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h5><b>GPS</b>
                    <ul class="pt-1">
                    <a href="location.php"><li class="text-dark p-1">Add Location</li></a>
                    <a href="tracking.php"><li class="text-dark p-1">Track Employee</li></a>
                    </ul></h5>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-building" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h5><b>Sub-Company</b>
                    <ul class="pt-1">
                    <a href="subcompany.php"><li class="text-dark p-1">Add Sub-Company</li></a>
                    <a href="subcompany.php"><li class="text-dark p-1">View Sub-Company</li></a>
                    <br>
                    </ul></h5>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box shadow" style="background-color:#008B8B">
                  <div class="icon">
                    <i class="fas fa-brain" style="color:black"></i>
                  </div>
                  <div class="inner">
                    <h5><b>Master</b>
                    <ul class="pt-1">
                    <a href="timing.php"><li class="text-dark pt-2">Timing</li></a>
                    <a href="leavereason.php"><li class="text-dark pt-2">Reason</li></a>
                    <a href="thoughts.php"><li class="text-dark pt-2">Thoughts</li></a>
                    </ul></h5>
                  </div>
                </div>
              </div>
            </div>
          
            <!-- /.row -->
                      <!-- /.container-fluid -->
        </div>
        <div class="content">
        </div>
      </div>
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>
    <?php include('script.php'); ?>
    <script src="js/dashboard.js"></script>
  </body>
</html>
