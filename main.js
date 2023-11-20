import validator from "validator";

const mailList = [
  "abce@gmail.com",
  "arg.test@mail",
  "lalal@gl.",
  "nom.prenom@gmail.com",
];

// Fonction qui permet d'afficher quels mails sont valides et lesquels ne le sont pas
function isValidEmail(mail) {
  return validator.isEmail(mail);
}

// Couche d'abstraction : couche qui permet de ne pas utiliser directement une dépendance dans le code. Importer la dépendance dans un seul fichier et on l'y utilise qu'une seule fois.
// par exemple là on l'utilise qu'une fois dans la fonction puis c'est la fonction qu'on appelle, pas encore la dépendance à chaque nécessité.

// Pour afficher les mails valides et non valides
for (const mail of mailList) {
  console.log(mail + " " + isValidEmail(mail));
}

// Fonction qui trie pour garder que les mails valides : les retourne dans un tableau et affiche le tableau
function filterValidEmails(mailList) {
  const listFiltered = mailList.filter((mail) => {
    // Retourne un booléen indiquant si l'adresse e-mail est valide
    const isValid = validator.isEmail(mail);
    return isValid; // filter va garder que ceux qui retournent true
  });
  console.log(listFiltered);
}

filterValidEmails(mailList);

// for (const mail of mailList) {
//   const isValid = validator.isEmail(mail);
//   console.log(mail, isValid); // affiche en face de chaque email s'il est valide ou non
// }

// // utiliser filter pour ne garder que les numéros valides
// const listFiltered = mailList.filter((mail) => {
//   // retourne un booléen
//   const isValid = validator.isEmail(mail);
//   return isValid; // filter va garder que ceux qui return true
// });
// console.log(listFiltered);
