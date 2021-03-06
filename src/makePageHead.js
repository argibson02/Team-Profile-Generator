function makePageHead() {
    return `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
      <title>Meet Our Team!</title>
    
      <!-- CSS  -->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="../css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection" />
      <link href="./teamPageCss.css" type="text/css" rel="stylesheet" media="screen,projection" />
    </head>
    
    <body>
      <nav class="clasps lighten-1" role="navigation">
    
        <div class="nav-wrapper container"><img src="../images/planet-express-logo.jpg" height=60 width=60><a id="logo-container" href="#" class="brand-logo center custom-brand">Meet Our Team!</a>
        </div>
      </nav>
    
    
      <div class="container">
        <div class="section">
          <!--   Card Section   -->
          <div class="row" id="cardsRow">

  `;
};

module.exports = makePageHead