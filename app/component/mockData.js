/*

	contrat de données

 */
// générer les données
var gen = require('./data/dataLoader');
var element = gen.generate(5);

//appeler la méthod pour calcule de la durée.
var serviceJob = require('./services/serviceJob');
var duration = serviceJob.getDurationByJob(element);
console.log(duration[0]);
console.log(duration[1]);


/*
var leng = element.tasks.length;
console.log(element.id);
console.log(element.name);
console.log(element.label);
console.log(leng);
console.log(element.startDate);
*/