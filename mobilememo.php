<!DOCTYPE html>
<html lang="en">
<head>    
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta value="http://15.206.236.83/api/" id="website-url">
    <!-- <meta value="http://localhost:3000/api/" id="website-url"> -->
    <!-- <meta value="https://itfutrz-attendance-system.herokuapp.com/api/" id="website-url">     -->    
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>HIND TV</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css" />
    <link rel="stylesheet" href="plugins/toastr/toastr.min.css">
    <!-- Google Font: Source Sans Pro -->
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
      rel="stylesheet"
    />
    <style>
      /* Set the size of the div element that contains the map */
      #map {
        height: 400px; /* The height is 400 pixels */
        width: 100%; /* The width is the width of the web page */
      }
    </style>
  </head>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">    
      <div class="content-wrapper">        
        <div class="content-header">         
        </div>        
        <div class="content" id="displaydata">                        
        </div>
        </div>
        <!-- /.content -->
      </div>      
    </div>        
    <?php include('script.php'); ?>
    <script src="js/mobilememo.js"></script>
  </body>
</html>