function makeInternCard(data) {
    return `
        
    <!-- team intern -->
    <div class="col s12 m3 card custom-card">
      <div>
        <h4 class="center purple-text custom-h4 teamName">${data[i].name}</h4>
        <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">school</i> Intern</h5>
      
        <ul class="card-content custom-content">
          <li class="cardList">ID: <span class="teamId">${data[i].id}</span></li>
          <li class="cardList">Email: <a class="teamEmail" href="mailto:${data[i].email}" target="_blank">${data[i].email}</a></li>
          <li class="cardList">School: <span class="teamSchool">${data[i].internSchool}</span></li>
        </ul>
      </div>
    </div>
  `
  };

  module.exports = makeInternCard;