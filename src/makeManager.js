
function makeManagerCard(data) {
    return `
        
    <!-- team manager -->
    <div class="col s12 m3 card custom-card">
      <div>
        <h4 class="center purple-text custom-h4 teamName">${data[0]}</h4>
        <h5 class="center purple-text custom-h5 teamRole"> <i class="material-icons">event_seat</i> Manager</h5>
      
        <ul class="card-content custom-content">
          <li class="cardList">ID: <span class="teamId">${data[1]}</span></li>
          <li class="cardList">Email: <a class="teamEmail" href="mailto:${data[2]}" target="_blank">${data[2]}</a></li>
          <li class="cardList">Office Number: <span class="teamOffice">${data[3]}</span></li>
        </ul>
      </div>
    </div>
  `
  };
  
  module.exports = makeManagerCard;
