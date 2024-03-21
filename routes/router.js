//router file
const express = require('express');
const file = require('js-yaml');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
  const projects = file.load(
    fs.readFileSync(__dirname + '/../projects.yaml', 'utf8')
  ).projects;

  res.render('home', {projects});
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

router.get('/project/:id', (req, res) => {
  const {id} = req.params;

  //search for project by id using the projects.yml file
  const projects = file.load(
    fs.readFileSync(__dirname + '/../projects.yaml', 'utf8')
  ).projects;

  const project = projects.find(
    (project) =>
      project.name.replace(' ', '-').toLowerCase() === id.toLowerCase()
  );
  if (!project) return res.status(404).send('Project not found');

  res.render('project', {project});
});

router.get('/but-:yn', (req, res) => {
  const {yn} = req.params;
  const etudes = file.load(
    fs.readFileSync(__dirname + '/../etudes.yaml', 'utf8')
  );

  const annee = etudes['annee ' + yn];
  if (!annee) return res.status(404).send('Year not found');

  res.render('annee-etudes', {annee});
});

module.exports = router;
