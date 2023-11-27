"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use(express.json()); // => to parse request body with http header "content-type": "application/json"
app.get('/api/liveness', (req, res) => {
    res.send('OK !!!');
});
app.use(express.json()); // => to parse request body with http header "content-type": "application/json"
let idGenerator = 1;
function newId() {
    return idGenerator++;
}
let learningPackages = [
    { id: newId(), title: 'Learn TypeScript' },
    { id: newId(), title: 'Learn Angular' },
    { id: newId(), title: 'Learn NodeJs' },
    { id: newId(), title: 'Learn Express' },
];
app.get('/api/learning-package', (req, res) => {
    res.send(learningPackages);
});
app.post('/api/learning-package', (req, res) => {
    let item = req.body;
    console.log('handle http POST /api/learning-package', item);
    item.id = newId();
    learningPackages.push(item);
    res.send(item);
});
console.log('starting...');
app.listen(3000, () => {
    console.log('Ok, started!');
});
// Define a route for querying a LearningPackage by its id
app.get('/api/package/:id', (req, res) => {
    const packageId = +(req.params.id);
    // Find the LearningPackage by ID in the sample data
    const foundPackage = learningPackages.find((pkg) => pkg.id === packageId);
    if (foundPackage) {
        // If the package is found, respond with status code 200 and the package data in JSON
        res.status(200).json(foundPackage);
    }
    else {
        // If the package is not found, respond with status code 404 and an error message in JSON
        res.status(404).json({ error: `Entity not found for id: ${packageId}` });
    }
});
// Route to create a new LearningPackage
app.post('/api/package', (req, res) => {
    const newPackage = req.body;
    // Vérifiez si les champs obligatoires sont fournis
    if (!newPackage.title) {
        res.status(400).json({ error: 'Le champ "title" est obligatoire.' });
        return;
    }
    // Attribuez un nouvel ID au package (simulez l'attribution d'ID unique)
    newPackage.id = learningPackages.length + 1;
    // Ajoutez le nouveau package à la liste des packages
    learningPackages.push(newPackage);
    // Répondez avec un code d'état 200 et le package créé en JSON (y compris son nouvel ID)
    res.status(200).json(newPackage);
});
// Route to update an existing LearningPackage by ID
app.put('/api/package/:id', (req, res) => {
    const packageId = +(req.params.id);
    const updatedPackage = req.body;
    // Find the index of the package in the array based on its ID
    const packageIndex = learningPackages.findIndex((pkg) => pkg.id === packageId);
    if (packageIndex === -1) {
        // If the package is not found, respond with a 404 error
        res.status(404).json({ error: `Entity not found for id: ${packageId}` });
        return;
    }
    // Update the existing package with the new data
    learningPackages[packageIndex] = Object.assign(Object.assign({}, learningPackages[packageIndex]), updatedPackage);
    // Respond with a 200 status code and the modified package in JSON
    res.status(200).json(learningPackages[packageIndex]);
});
// Route to get summaries of LearningPackages
app.get('/api/package-summaries', (req, res) => {
    // Map the array of LearningPackages to include only {id, title} fields
    const packageSummaries = learningPackages.map(({ id, title }) => ({ id, title }));
    // Respond with a 200 status code and the package summaries in JSON
    res.status(200).json(packageSummaries);
});
//# sourceMappingURL=app.js.map