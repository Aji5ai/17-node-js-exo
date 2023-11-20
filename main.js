import validator from 'validator'; 

const mailList = [
  'abce@gmail.com',
  'arg.test@mail',
  'lalal@gl.',
  'nom.prenom@gmail.com',
];

for (const mail of mailList) {
  const isValid = validator.isEmail(mail);
  console.log(mail, isValid)
}

// utiliser filter pour ne garder que les numéros valides
const listFiltered = mailList.filter(
  (mail) => {
    // retourne un booléen
    const isValid = validator.isEmail(mail);
    return isValid; // filter va garder que ceux qui return true
  }
)
console.log(listFiltered)
