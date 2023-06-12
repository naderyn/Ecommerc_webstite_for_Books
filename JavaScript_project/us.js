// Team members data
const teamMembers = [
    {
      name: 'Nader Sayed',
      role: 'IOT Devloper'
    },
    {
      name: 'Mohamed Eid',
      role: 'IOT Devloper'
    },
    {
      name: 'Ebrahim Elshemy',
      role: 'IOT Devloper'
    }
  ];
  
  // Special thanks content
  const specialThanksContent = 'We would like to express our gratitude to all our supporters and contributors from Eng.Mina Nagy & Eng.Menna Hamdy. Thank you!';
  
  // Function to update team members section
  function updateTeamMembers() {
    teamMembers.forEach((member, index) => {
      const memberNameElement = document.getElementById(`member${index + 1}-name`);
      const memberRoleElement = document.getElementById(`member${index + 1}-role`);
  
      memberNameElement.textContent = member.name;
      memberRoleElement.textContent = `Role: ${member.role}`;
  
      memberNameElement.addEventListener('mouseover', () => {
        memberNameElement.style.color = 'red';
      });
  
      memberNameElement.addEventListener('mouseout', () => {
        memberNameElement.style.color = 'black';
      });
    });
  }
  
  // Function to update special thanks section
  function updateSpecialThanks() {
    const specialThanksElement = document.querySelector('.special-thanks-section p');
    specialThanksElement.textContent = specialThanksContent;
  
    specialThanksElement.addEventListener('mouseover', () => {
      specialThanksElement.style.backgroundColor = 'green';
      specialThanksElement.style.color = 'white';
    });
  
    specialThanksElement.addEventListener('mouseout', () => {
      specialThanksElement.style.backgroundColor = 'initial';
      specialThanksElement.style.color = 'initial';
    });
  }
  
  // Call the functions to update the content
  updateTeamMembers();
  updateSpecialThanks();
  