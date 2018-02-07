const companyDataArray = require('../../../company-names.json');
const branchDataArray = require('../../../branches.json');

const createCompany = (knex, companyTitle) => {
  return knex("topcompanies").insert({
    companyName: companyTitle.companyName,
    industry: companyTitle.industry,
    location: companyTitle.location,
    revenueGrowth: companyTitle.revenueGrowth
  }, "id")
  .then(branchID => {
    let companyArray = [];
    let filteredArray = branchDataArray.filter(company => {
      company.companyName === companyTitle.companyName
    });
  })
}



// const createCompany = (knex, company) => (
//   knex('companies').insert({
//     companyName: company[0].companyName,
//   }, 'id')
//   .then(companyId => {
//     let branchPromises = [];
//
//     company[2].branches.forEach()
//   })
// );
//
// exports.seed = (knex, Promise) {
//   return knex('branches').dle()
//     .then(() => knex('topcompanies').del())
//     .then(() => {
//       return Promise.all([
//         knex('topcompanies').insert({
//           id: 1
//         }, 'id')
//         .then(company => {
//           return knex ('branches').insert([
//             {
//               id: 1,
//               branchName: 'Josie',
//               employees: '23,000',
//               location: 'Santa Fe',
//               grossRevenue: '4,593,298',
//               company_id: topcompanies[0]
//             }
//           ]);
//         })
//         .then(() => console.log('The data was successfully seeded!'))
//         .catch(error => console.log(`Data seeding error ${error}`))
//       ]);
//     })
//     .catch(error => console.log(`Data seeding error ${error}`))
// };
// const createCompany = (knex, companyData) => {
//   return knex('topcompanies').insert({
//     companyName: companyData.companyName,
//     industry: companyData.industry,
//     location: companyData.location,
//     revenueGrowth: companyData.revenueGrowth
//   }, 'id')
// };
//
// const createFootnote = (knex, footnote) => {
//   return knex('footnotes').insert(footnote);
// };
//
// exports.seed = (knex, Promise) => {
//   return knex('footnotes').del() // delete footnotes first
//     .then(() => knex('papers').del()) // delete all papers
//     .then(() => {
//       let paperPromises = [];
//
//       papersData.forEach(paper => {
//         paperPromises.push(createCompany(knex, paper));
//       });
//
//       return Promise.all(paperPromises);
//     })
//     .catch(error => console.log(`Error seeding data: ${error}`));
// };
