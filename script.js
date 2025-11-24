
document.addEventListener('DOMContentLoaded', () => {

  console.log("DOMcaricato!");

  const teamContainer = document.getElementById('team-cards');
  const addBtn = document.getElementById('addCardBtn');

  let addedMembers = [];

  function createCard(member) {
    console.log(member);

    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card team-card">
        <img src="${member.img}" class="team-img" alt="Foto membro">
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">Occupazione: ${member.role}</p>
          <p class="card-text">Email: ${member.email}</p>
        </div>
      </div>
    `;

    teamContainer.appendChild(col);
    
    console.log(member.name);
  }

  fetch("https://boolean-teachers.github.io/mock/api/members/")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);

      addedMembers = data;
      console.log(addedMembers);

      data.forEach(member => {
        console.log(`${member.name}`);
        createCard(member);
      });

      console.log("Card iniziali create!");
    })
    .catch(err => {
      console.error(err);
    });

  addBtn.addEventListener('click', () => {
    let newMember;
    let i = 1;

    do {
      newMember = {
        name: `Nuovo Membro ${i}`,
        role: 'Occupazione Generica',
        email: `nuovo.membro${i}@example.com`,
        img: 'https://pngpix.com/images/file/placeholder-profile-icon-20tehfawxt5eihco.jpg'
      };
      i++;
    } while (addedMembers.some(m => m.name === newMember.name));

    console.log( newMember);

    addedMembers.push(newMember);
    console.log(addedMembers);

    createCard(newMember);

    console.log("Nuova card creata");
  });
});

