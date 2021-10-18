
function makeManagerCard(data) {
    return `
        
    <!-- team engineer -->
    <div class="col s12 m3 card custom-card">
      <div>
        <h4 class="center purple-text custom-h4 teamName">${data.name}</h4>
        <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">event_seat</i> Manager</h5>
      
        <ul class="card-content custom-content">
          <li class="cardList">ID: <span class="teamId">${data.id}</span></li>
          <li class="cardList">Email: <a class="teamEmail" href="mailto:${data.email}" target="_blank">${data.email}</a></li>
          <li class="cardList">Office Number: <span class="teamOffice">${data.mangerOffice}</span></li>
        </ul>
      </div>
    </div>
  
  `
  };
  
  
  
  function makeEngineerCard(data) {
    return `
        
    <!-- team engineer -->
    <div class="col s12 m3 card custom-card">
      <div>
        <h4 class="center purple-text custom-h4 teamName">${data.name}</h4>
        <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">settings</i> Engineer</h5>
  
        <ul class="card-content custom-content">
          <li class="cardList">ID: <span class="teamId">${data.id}</span></li>
          <li class="cardList">Email: <a class="teamEmail" href="mailto:${data.email}" target="_blank">${data.email}</a></li>
          <li class="cardList">GitHub: <a class="teamGit" href="https://github.com/${data.enginerGit}" target="_blank">${data.engineerGit}</a></li>
        </ul>
      </div>
    </div>
  
  `
  };
  
  
  
  function makeInternCard(data) {
    return `
        
    <!-- team engineer -->
    <div class="col s12 m3 card custom-card">
      <div>
        <h4 class="center purple-text custom-h4 teamName">${data.name}</h4>
        <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">school</i> Intern</h5>
      
        <ul class="card-content custom-content">
          <li class="cardList">ID: <span class="teamId">${data.id}</span></li>
          <li class="cardList">Email: <a class="teamEmail" href="mailto:${data.email}" target="_blank">${data.email}</a></li>
          <li class="cardList">School: <span class="teamSchool">${data.internSchool}</span></li>
        </ul>
      </div>
    </div>
  
  `
  };
  
  module.exports = makeManagerCard;
  module.exports = makeEngineerCard;
  module.exports = makeInternCard;