//router file
const express = require('express');
const file = require('js-yaml');
const fs = require('fs');
const {log} = require('console');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

router.get('/project/:id', (req, res) => {
  const {id} = req.params;

  //search for project by id using the projects.yml file
  let projects = file.load(fs.readFileSync('./projects.yml', 'utf8'));
  projects = projects.projects;

  const project = projects.find(
    (project) =>
      project.name.replace(' ', '-').toLowerCase() === id.toLowerCase()
  );
  if (!project) return res.status(404).send('Project not found');

  res.render('project', {project});
});

module.exports = router;
