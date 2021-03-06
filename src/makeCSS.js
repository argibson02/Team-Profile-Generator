function makeCss() {
    return `
    /* Custom Stylesheet */

    .clasps {
      background-color: #AB321B;
    }
    
    body {
      background-color: #a1a078;
    }
    
    .custom-h4 {
      font-size: 23px;
    }
    
    .custom-h5 {
      font-size: 21px;
    }
    
    .custom-card {
      border-radius: 10px;
      box-shadow:  2px 2px 4px 0px #459D81;
      padding: 5px;
      border: 5px solid rgb(63, 63, 63);
    }
    
    .custom-content {
      font-size: 16px;
      padding: 8px !important;
    }
    
    .icon-block {
      padding: 0 15px;
    }
    
    .icon-block .material-icons {
        font-size: inherit;
    }
    
    .about{
      background-color: #459D81;
      border-radius: 10px;
      border: 1px solid #a1a078;
    }
    
    @media only screen and (max-width : 950px) {
      #logo-container {
        font-size: 20px;
      }
    }
    
    @media only screen and (max-width : 640px) {
      #logo-container {
        font-size: 16px;
      }
    }

  `;
};

module.exports = makeCss