<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      #map {
        height: 400px; /* The height is 400 pixels */
        width: 100%; /* The width is the width of the web page */
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
                                <h1 class="m-0 text-dark">Present - 
                                <label class="Sright" id="present" name="present" text="0"></label></h1>
                            </div>
                        </div>

                        <div class="card-body p-0">
                            <div class="table-responsive" style="height:200px;">
                                <table class="table table-bordered table-hover table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                        <th>Date</th>
                                        <th>Eid</th>
                                        <th>Reason</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody id="displaydata_m"></tbody>
                                </table>
                            </div>
                        </div><br>
                    </div>
                </div>
            </div>
        </div>
        <?php include('script.php'); ?>
        <script src="js/totmemomobile.js"></script>
    </body>
</html>