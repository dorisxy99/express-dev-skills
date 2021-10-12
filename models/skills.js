const skills = [
    {id: 1, skill: 'HTML', mastered: true},
    {id: 2, skill: 'JavaScript', mastered: true},
    {id: 3, skill: 'CSS', mastered: true},
    {id: 4, skill: 'Git', mastered: true},
    {id: 5, skill: 'Node', mastered: false},
    {id: 6, skill: 'Django', mastered: false},
    {id: 7, skill: 'Python', mastered: false},
    {id: 8, skill: 'React', mastered: false},
    {id: 9, skill: 'MERN', mastered: false}
  ];

  module.exports = {
      getAll,
      getOne,
      create,
      deleteOne,
      update
  };

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.mastered = false;
    skills.push(skill);
}

  function getOne(id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
  }

  function getAll() {
      return skills;
  }