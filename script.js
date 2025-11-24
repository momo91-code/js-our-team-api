document.addEventListener('DOMContentLoaded', () => {

  const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainer = document.getElementById('team-cards');
const addBtn = document.getElementById('addCardBtn');

let addedMembers = [...teamMembers];

function createCard(member) {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';
  col.innerHTML =`
  <div class="card team-card">
    <img src="${member.img}" class="team-img" alt="Foto membro">
    <div class="card-body">
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">Occupazione:${member.role}</p>
      <p class="card-text">Email:${member.email}</p>
    </div>
  </div>
  `;
  teamContainer.appendChild(col);
}
teamMembers.forEach(member => createCard(member));

addBtn.addEventListener('click', () => {

  let newMember;
  let i = 1;
  do {
    newMember = {
      name:`Nuovo Membro ${i}`,
      role: 'Occupazione Generica',
      email:`nuovo.membro${i}@example.com`,
      img:'https://via.placeholder.com/150'
    };
    i++;
  } while (addedMembers.some(m => m.name === newMember.name));

  addedMembers.push(newMember);
  createCard(newMember);  
  });
});


