



function makePage(data) {
    // var addLicense = renderLicenseSection(data);
    // var addTech = technologies(data);
    // var addTech = addTech.join("\n");

    return `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
      <title>Meet Our Team!</title>
    
      <!-- CSS  -->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection" />
      <link href="./style.css" type="text/css" rel="stylesheet" media="screen,projection" />
    </head>
    
    <body>
      <nav class="clasps lighten-1" role="navigation">
    
        <div class="nav-wrapper container"><img src="./images/planet-express-logo.jpg" height=60 width=60><a id="logo-container" href="#" class="brand-logo center custom-brand">Meet Our Team!</a>
        </div>
      </nav>
    
    
      <div class="container">
        <div class="section">
    
          <!--   Icon Section   -->
          <div class="row">
            <!-- row start -->
    
            <!-- team manager -->
            <div class="col s12 m3 card custom-card">
              <div>
                <h4 class="center purple-text custom-h4 teamName">John Smith</h4>
                <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">event_seat</i> Manager</h5>
    
                <ul class="card-content custom-content">
                  <li class="cardList" >ID: <span class="teamId" ></span></li>
                  <li class="cardList" >Email: <span class="teamEmail" ></span></li>
                  <li class="cardList" >Office Number: <span class="teamOffice" ></span></li>
                </ul>
              </div>
            </div>
    
            <!-- team engineer -->
            <div class="col s12 m3 card custom-card">
              <div>
                <h4 class="center purple-text custom-h4 teamName">John Smith</h4>
                <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">settings</i> Engineer</h5>
    
                <ul class="card-content custom-content">
                  <li class="cardList" >ID: <span class="teamId" ></span></li>
                  <li class="cardList" >Email: <span class="teamEmail" ></span></li>
                  <li class="cardList" >GitHub: <span class="teamGit" ></span></li>
                </ul>
              </div>
            </div>
    
            <!-- team engineer -->
            <div class="col s12 m3 card custom-card">
              <div>
                <h4 class="center purple-text custom-h4 teamName">John Smith</h4>
                <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">settings</i> Engineer</h5>
    
                <ul class="card-content custom-content">
                  <li class="cardList" >ID: <span class="teamId" ></span></li>
                  <li class="cardList" >Email: <span class="teamEmail" ></span></li>
                  <li class="cardList" >GitHub: <span class="teamGit" ></span></li>
                </ul>
              </div>
            </div>
    
            <!-- team intern -->
            <div class="col s12 m3 card custom-card">
              <div>
                <h4 class="center purple-text custom-h4 teamName">John Smith</h4>
                <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">school</i> Intern</h5>
    
                <ul class="card-content custom-content">
                  <li class="cardList" >ID: <span class="teamId" ></span></li>
                  <li class="cardList" >Email: <span class="teamEmail" ></span></li>
                  <li class="cardList" >School: <span class="teamSchool" ></span></li>
                </ul>
              </div>
            </div>
    
    
            <!-- row end -->
          </div>
    
        </div>
      </div>
    
      <footer class="page-footer clasps">
        <div class="container">
          <div class="row">
            <div class="col l6 s12 about">
              <h5 class="black-text">About Us</h5>
              <p class="black-text text-lighten-4">Here at Planet Express, no request is too outrageous and no galaxy its too far! Please reach out today to see how we can best meet your needs. 1233 Coastal Lane, New New York, NorthEast Sector, North American, United States of Earth. Hologram number: 63454-gdd-54453hn-45-gfd. </p>
            </div>
            <div class="col l6 s12 center">
              <img src="images/futurama-stamp.png" height=150 width=198>
            </div>
          </div>
          <div class="footer-copyright">
            A subsidiary of MomCorp and MomCorp Holdings LLC. 3021
          </div>
      </footer>
    
      <!--  Scripts-->
      <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="js/materialize.js"></script>
      <script src="./index.js"></script>
    
    </body>
    
    </html>
  `;
}


module.exports = makePage;