const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
    showUpdate
};

function update(req, res) {
    console.log(req.body);
    req.body.mastered = !!req.body.mastered;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req,res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    // req.body contains the data submitted
    // in the form
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
  }

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function showUpdate(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/update', { skill });
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', {skills});
}